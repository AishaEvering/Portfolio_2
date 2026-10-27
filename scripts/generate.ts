import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import type { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { Redis } from "@upstash/redis";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";

// Verify these routes against your actual Next.js app routes before running.
const markdownUrls: Record<string, string> = {
  "skills.md": "/about#skills",
  "education.md": "/about#education",
};

// Keep this list focused on visitor-facing content, not UI implementation.
// Adjust paths if your current components live elsewhere.
const componentRules: Array<{ path: RegExp; url: string }> = [
  // Home
  { path: /(^|\/)home\/hero\/Hero\.tsx$/i, url: "/" },
  { path: /(^|\/)home\/projects\/Projects\.tsx$/i, url: "/work" },

  // About — My Journey
  { path: /(^|\/)journey\/MyJourney\.tsx$/i, url: "/about#journey" },
  { path: /(^|\/)journey\/about\/BeyondTheScreen\.tsx$/i, url: "/about#beyond" },

  // About — Education
  { path: /(^|\/)journey\/education\/EducationSection\.tsx$/i, url: "/about#education" },

  // About — Experience
  { path: /(^|\/)journey\/experience\/ExperienceSection\.tsx$/i, url: "/about#experience" },

  // About — Skills
  { path: /(^|\/)skills\/SkillsSection\.tsx$/i, url: "/about#skills" },
];

const searchableComponents = new Set([
  "home/hero/Hero.tsx",
  "home/projects/Projects.tsx",
  "journey/MyJourney.tsx",
  "journey/about/BeyondTheScreen.tsx",
  "journey/education/EducationSection.tsx",
  "journey/experience/ExperienceSection.tsx",
  "skills/SkillsSection.tsx",
]);

function normalizePath(source: unknown): string {
  return String(source ?? "").replace(/\\/g, "/");
}

function cleanContent(content: string): string {
  return content
    .replace(/^\s*import[\s\S]*?from\s*["'][^"']+["'];?\s*$/gm, "")
    .replace(/^\s*import\s*["'][^"']+["'];?\s*$/gm, "")
    .replace(/\sclassName=(?:"[^"]*"|'[^']*'|\{[^\n]*?\})/g, "")
    .replace(/\n\s*\n\s*\n/g, "\n\n")
    .trim();
}

async function loadMarkdown(): Promise<DocumentInterface[]> {
  const loader = new DirectoryLoader(
    "src/components/utils/data/",
    { ".md": (path) => new TextLoader(path) },
    false,
  );

  return (await loader.load()).map((doc) => {
    const filename = normalizePath(doc.metadata.source).split("/").pop() ?? "";

    const isProject = !(filename in markdownUrls);

    return {
      pageContent: cleanContent(doc.pageContent),
      metadata: {
        source: filename,
        type: isProject ? "project" : "profile",
        url: markdownUrls[filename] ?? "/work",
      },
    };
  });
}

async function loadComponents(): Promise<DocumentInterface[]> {
  const loader = new DirectoryLoader(
    "src/components/",
    { ".tsx": (path) => new TextLoader(path) },
    true,
  );

  return (await loader.load()).flatMap((doc) => {
    const relativePath = normalizePath(doc.metadata.source)
      .split("/src/components/")[1];

    const rule = componentRules.find(({ path }) =>
      path.test(relativePath ?? "")
    );

    if (!rule) return [];

    return [{
      pageContent: cleanContent(doc.pageContent),
      metadata: { source: relativePath, url: rule.url, type: "component", },
    }];
  });
}

async function generateEmbeddings(): Promise<void> {
  // Build everything before deleting existing embeddings.
  const [markdownDocs, componentDocs] = await Promise.all([
    loadMarkdown(),
    loadComponents(),
  ]);

  const markdownSplitter = RecursiveCharacterTextSplitter.fromLanguage("markdown");
  const componentSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 150,
  });

  const [markdownChunks, componentChunks] = await Promise.all([
    markdownSplitter.splitDocuments(markdownDocs),
    componentSplitter.splitDocuments(componentDocs),
  ]);
  const chunks = [...markdownChunks, ...componentChunks]
    .filter((doc) => doc.pageContent.trim().length > 0);

  console.log(`Knowledge files: ${markdownDocs.length}; components: ${componentDocs.length}; chunks: ${chunks.length}`);
  console.log("Indexed sources:", [...markdownDocs, ...componentDocs].map((doc) => `${doc.metadata.source} -> ${doc.metadata.url}`));

  if (!markdownDocs.length || !chunks.length) {
    throw new Error("No usable knowledge documents found; existing embeddings were not deleted.");
  }

  // WARNING: This is still a destructive, non-atomic rebuild. If insertion fails,
  // the previous collection is gone. For production, build a new collection and swap.
  const vectorStore = await getVectorStore();
  const collection = await getEmbeddingsCollection();
  await collection.deleteMany({});
  await vectorStore.addDocuments(chunks);

  // Only invalidate the cache after the new embeddings have been inserted.
  // WARNING: flushdb() clears the entire selected Upstash Redis database.
  await Redis.fromEnv().flushdb();
  console.log("Embeddings rebuilt successfully.");
}

generateEmbeddings().catch((error) => {
  console.error("Embedding generation failed:", error);
  process.exitCode = 1;
});

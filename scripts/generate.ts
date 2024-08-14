import dotenv from "dotenv"
dotenv.config({path: ".env.local"})
// Configure dotenv before other imports
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents"
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { Redis } from "@upstash/redis";
import { getEmbeddingsCollection, getVectorStore } from "../src/lib/astradb";


async function generateEmbeddings(){

    // clear cache db
    await Redis.fromEnv().flushdb();

    // clear out vector db
   const vectorStore = await getVectorStore();
   (await getEmbeddingsCollection()).deleteMany({})

   const docs = [];

    // create metat-data docs and split the data into chunks
    const md_Docs  = await createLoader(".md");
    const md_splitter = RecursiveCharacterTextSplitter.fromLanguage("markdown");
    const md_splitDocs = await md_splitter.splitDocuments(md_Docs);
    docs.push(...md_splitDocs);

    // create component docs and split the data into chunks
    const componentDocs = await createComponentLoader();
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
    const splitDocs = await splitter.splitDocuments(componentDocs);
    docs.push(...splitDocs);
    
    await vectorStore.addDocuments(splitDocs);
}

async function createLoader(ext: string): Promise<DocumentInterface[]> {
    const loader = new DirectoryLoader("src/components/utils/data/", {
        [ext]: (path) => new TextLoader(path)
    }, false);

    return (await loader.load())
        .map((doc): DocumentInterface | undefined => {
            return doc ? {
                pageContent: cleanContent(doc.pageContent),
                metadata: { url: "/#projects" }
            } : undefined;
        }).filter((doc): doc is DocumentInterface => doc !== undefined);
}

async function createComponentLoader(): Promise<DocumentInterface[]> {
    const searchableDirs = ['nav', 'home'];
    const searchableHomeDirs = ['about', 'certifications', 'contact', 'experience', 'hero', 'projects'];

    const loader = new DirectoryLoader("src/components/",{
        ".tsx": (path) => new TextLoader(path)
    }, true);
    
    return (await loader.load())
        .map((doc): DocumentInterface | undefined => {
          
            let url = doc.metadata.source
            .replace(/\\/g, "/")
            .split("/src/components")[1];

            // is url in searchable_dirs
            const isInSearchableDirs = searchableDirs.some(path => url.includes(path));
    
            if (isInSearchableDirs){
                const isInNav = url.includes('components/MyLinks.tsx');
                const isInHome = searchableHomeDirs.some(path => url.includes(path));
    
                // check specific directory cases
                if(isInNav){             
                    return {
                        pageContent: cleanContent(doc.pageContent),
                        metadata: {url: "/"}
                    }
                }
                
                if(isInHome){
                    url = url.substring(0, url.lastIndexOf('/'));  
                    url = url.includes('hero') ? "/" : `/#${url.substring(url.lastIndexOf('/') + 1)}`;
                    return {
                        pageContent: cleanContent(doc.pageContent),
                        metadata: {url}
                    }
                }
            }
    }).filter((doc): doc is DocumentInterface => doc !== undefined)
}

function cleanContent(content:string){
    return content
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();
}


generateEmbeddings();
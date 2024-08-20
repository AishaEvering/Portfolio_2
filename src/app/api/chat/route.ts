import { getVectorStore } from "@/lib/astradb";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import {
  ChatPromptTemplate,
  MessagesPlaceholder,
  PromptTemplate,
} from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { Redis } from "@upstash/redis";
import {
  LangChainStream,
  StreamingTextResponse,
  Message as VercelChatMessage,
} from "ai";
import { UpstashRedisCache } from "langchain/cache/upstash_redis";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { createRetrievalChain } from "langchain/chains/retrieval";

export async function POST(req: Request) {
  try {

    // get message
    const body = await req.json();
    const messages = body.messages;

    // get api key
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error("Oops, API key is not defined.");
    }
   
    // get chatHistory and last message
    const { chatHistory, lastMessage: currentMessageContent } = getChatHistoryAndLastMessage(messages);
       
    // initialize cache
    const cache = new UpstashRedisCache({
      client: Redis.fromEnv(),
    })

    const { stream, handlers } = LangChainStream();

    // create models
    const {chatModel, rephrasingModel} = getModels(handlers, cache);

    // get prompts
    const {prompt, rephrasePrompt} = getPrompts();

    // get retriver to get the data from vector db
    const retriever = (await getVectorStore()).asRetriever();

    // get history search query retriever
    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: rephrasingModel,
      retriever,
      rephrasePrompt,
    });

    // docs chain
    const combineDocsChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt,
      documentPrompt: PromptTemplate.fromTemplate(
        "Page URL: {url}\n\nPage content:\n{page_content}",
      ),
      documentSeparator: "\n--------\n",
    });

    // retrieval chain
    const retrievalChain = await createRetrievalChain({
      combineDocsChain,
      retriever: historyAwareRetrieverChain,
    });

    // do the thing
    retrievalChain.invoke({
      input: currentMessageContent ?? "",
      chat_history: chatHistory,
    });

    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

function getChatHistoryAndLastMessage(messages: VercelChatMessage[]) {
  if (!messages || messages.length === 0) {
    return { error: "No messages provided" };
  }

  // get chat history excluding the last message
  const chatHistory = messages.slice(0, -1)
    .map((m: VercelChatMessage) => 
      m.role === "user" ? new HumanMessage(m.content) : new AIMessage(m.content)
    );

  // get the content of the last message
  const currentMessageContent = messages.at(-1)?.content;

  // return the chat history and the last message content
  return {
    chatHistory,
    lastMessage: currentMessageContent
  };
}



function getPrompts(){
    const prompt = ChatPromptTemplate.fromMessages([
      [
          "system",
          "You are a chatbot for a personal portfolio website. Your name is Buzz Lightyear. You work for the the website's owner. " +
          "The owner's name is Aisha.  You are Aisha's friend and will represent her well. You are friendly.  You are kind. You are " + 
          "funny. You are a sarcastic at times. Along with being professional you can be a little casual with hip hop references, but " +
          "you do not offend or curse. Answer the user's questions based on the below context. Whenever it makes sense, provide " +
          "links to pages that contain more information about the topic from the given context. Don't link the user to the " +
          "portfolio page.  If they are talking to you, they are already on the portfolio page. Format your messages in markdown " +
          "format.\n\n" +
          "Context:\n{context}",
      ],
      new MessagesPlaceholder("chat_history"),
      ["user", "{input}"]
  ])

  const rephrasePrompt = ChatPromptTemplate.fromMessages([
    new MessagesPlaceholder("chat_history"),
    ["user", "{input}"],
    [
      "user", "Given the above conversation, generate a search query to look up in order to get information relevant to the current question. " +
      "Don't leave out any relevant keywords.  Only return the query and no other text."
    ]
  ]);

  return {
    prompt,
    rephrasePrompt
  }
}

function getModels(handlers: any, cache: UpstashRedisCache){
  const MODEL_NAME = "gpt-3.5-turbo-0125";

  const chatModel = new ChatOpenAI({
    modelName: MODEL_NAME,
    streaming: true,
    callbacks: [handlers],
    verbose: false,
    cache,
  });

  const rephrasingModel = new ChatOpenAI({
    modelName: MODEL_NAME,
    verbose: false,
    cache,
  });

  return {
    chatModel,
    rephrasingModel
  };
}
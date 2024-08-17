<p align="center">
   <img src="https://github.com/AishaEvering/Portfolio_2/blob/main/header.png" height="300" width="600" alt="My Assistant Logo">
</p>

# About Buzz 🤖

My portfolio is a Next.js application built with React, featuring some notable highlights. First, I recreated the Gradio UI in React, making the custom UIs 
for the projects with live demos look better, more convenient, and even fun. Second, I developed a comprehensive Retrieval-Augmented Generation (RAG) chatbot 
system designed to answer questions about my portfolio. This system, named Buzz Lightyear, integrates OpenAI's ChatGPT for generating responses and a retrieval 
mechanism to fetch relevant information, showcasing the advanced capabilities of my work.

## Technologies
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## [Live Demo](https://aishaeportfolio.com/)

## Overview
${{\color{orange}\Huge{\textsf{What\ is\ Buzz?\ \}}}}\$
Buzz is a chatbot. But more than that, Buzz is an advanced large language model provided by OpenAI, known as ChatGPT, specifically trained to focus on answering questions about my portfolio or, as businesses might say, my domain. This is one of those moments where I truly appreciate the strides taken towards making "AI for everyone." ChatGPT is a robust and powerful LLM trained on expensive and sophisticated servers.  Yet, here I am, harnessing such a vastly knowledgeable model to focus on my very small site at a minimal cost. Much like you would do with the sun and a magnifying glass.  You’ve got to love it.

From a more technical perspective, Buzz is a system that processes data by converting it into vectors, splitting it into manageable chunks, and storing these chunks in a vector database. Later, it uses this data for semantic search to provide relevant context when communicating with users on my site. This ensures that interactions are informed and relevant based on the stored information.

A semantic search is a way to search for information based on the meaning and context of the words, rather than just matching exact keywords. It helps in understanding the intent behind a query to find more relevant and accurate results.

Along with the semantic search, I used prompting to give the model more details about its identity, purpose, and the type of tone to adopt. Since it's for *my* portfolio, the tone can be a bit spicy at times, which I don't mind at all.
***

${{\color{orange}\Huge{\textsf{The\ Data\ \}}}}\$
So how does Buzz get the data on my site? There are two ways:

1. Automated Script During Deployment:

   - I have a script written in TypeScript that runs whenever I deploy the site. This script uses LangChain to load all the components (`.tsx` files) in specific directories.
   - The script removes unnecessary information like import statements, styling, and extra spaces. LangChain then creates documents with the remaining data.
   - LangChain has a sophisticated splitter that can divide the HTML data without losing too much context. This splitter breaks the data into small chunks for the model.
   - The processed data is then passed to a vector store called AstraDB, hosted by Datastax, where it's converted into vectors.
     
2. Manual Inclusion of GitHub ReadMe Files:

   - I manually copy the ReadMe files I create for my GitHub projects and place them in a folder on my site. This provides additional context about my thoughts on my projects.
   - While LangChain can connect to GitHub, I specifically wanted only the ReadMe files and didn't want the overhead of connecting my GitHub account for data that rarely changes.
   - LangChain collects this data in the form of markdown files, splits it, and sends the split documents to the vector store, where they are converted into vectors.
***

${{\color{orange}\Huge{\textsf{Full\ Process\ \}}}}\$

Now that the data is gathered and stored, let’s talk about how Buzz uses this data:

1. User Interface: A React component handles the user interface, sending messages to a specific route.
2. Message Handling: The last message is considered the current message, while previous messages are considered the message history. This distinction is crucial because context is key.
3. The last message is considered the current message and the others are considered message history.  This is an important note because the name of the game is context.
   - If you only send the most current message, the model loses the ability to understand the full context of the conversation. To maintain this context, historic messages are processed separately.
   - These historic messages are sent to a dedicated model, which generates a search query to retrieve information relevant to the current question. This search query, along with the current message prompt,
     and of course the system prompte I mentioned earlier is then used to generate a response.
   - So not only am I creating prompts for the model, ChatGPT is also creating prompts based on prior information to ensure accurate and context-aware responses.
     
![Mind Blowing](https://media.giphy.com/media/2fLgzU6ZNbqgj1jJy2/giphy.gif)

4. Initialization: A few objects are initialized, including the LangChainStream, the models, and Redis. Redis is used for caching the messages. Although sending messages to the models is relatively inexpensive, it’s not free. By caching messages, users not only receive faster responses, but it also reduces the overall cost of the process.
5. Processing: Next, I gather everything—the models, the prompts, etc.—into a retrieval chain. The retrieval chain is invoked with the current message and chat history, fetching relevant data from the vector store to generate a context-aware response. The streamed response is then sent back to the user.
***

## Key Takeaways
Hindsight is 20/20, so let's talk about where things were unclear.
1. Navigating LangChain and Datastax Components: Working with LangChain and Datastax components can get messy. The industry is moving fast, and what is a valid way of doing things today can be deprecated tomorrow. While I was in the process of working on this project, I came across advice from a YouTuber who said, "If you want your things to work tomorrow, don't get the latest version of the libraries." That's when things started working for me.
2. Edge Runtime: Sigh, where do I begin? I kept getting warnings that I can't run dynamic code in the edge runtime, but all the new Next.js features wanted me to use the edge runtime. This was an issue because I needed to connect to the vector store, and the Datastax library used dynamic code. I tried creating another route just for the vector store connection, where I wasn't directly executing anything. Instead, I was sending it to a LangChain retriever. However, I couldn't get the object type returned from the route to match the expected type. Although this was just a warning, I ditched the route idea and ignored the warning, only to find out at the end that I couldn't build my code. 😢 So, as I mentioned before, I stepped back from the latest versions of LangChain and stopped using the edge runtime objects like NextRequest and NextResponse. For now, this approach works.
3. Hosting my application on Hostinger:  Depending on when you are reading this, Buzz may or may not be available on my site. Although I love to code, this doesn't necessarily equate to being adept at building and managing servers. Initially, I thought I was doing well—I set up a VPS (Virtual Private Server) on Hostinger, and my site was up and running with a custom domain.

   However, when I tried to integrate the chatbot, something was blocking it from retrieving data from the vector store. I knew it could push data out because the build script was working, but attempting to communicate with the bot resulted in it just hanging there. After exhausting all my troubleshooting efforts, I decided to try deploying the site on Vercel instead.
   
   Not only did the bot work on Vercel, but the site also became much smoother, faster, and more responsive overall. The deployment process was also incredibly easy. Consequently, I moved the site to Vercel. This also meant moving the domain, which takes 5-7 business days. So, until the domain transfer is complete, Buzz will unfortunately not be available.
***


## Summary

This is my coolest project yet, and I’m completely obsessed. So obsessed, in fact, that my next project will also be a RAG application. I’m not abandoning computer vision—there are still some exciting things I want to explore there—but I’ve decided to focus on one project at a time, and right now, that means diving into LLMs. I can talk to Buzz all day and am thrilled that it stays on track, always guiding users back to my portfolio. It’s like my personal cheerleader, and I’m so proud of it. Until next time, happy coding!

## Author

Aisha Evering  
[Email](<shovon3000g@gmail.com>) | [Portfolio](https://aishaeportfolio.com/)



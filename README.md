<p align="center">
   <img src="https://github.com/AishaEvering/Portfolio_2/blob/main/header.png" height="300" width="600" alt="My Assistant Logo">
</p>

# About Buzz 🤖

My portfolio is a Next.js application built with React, featuring some notable highlights. First, I recreated the Gradio UI in React, making the custom UIs 
for the projects with live demos look better, more convenient, and even fun. Second, I developed a comprehensive Retrieval-Augmented Generation (RAG) chatbot 
system designed to answer questions about my portfolio. This system, named Buzz Lightyear, integrates a language model for generating responses and a retrieval 
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

TODO
***

## Key Takeaways
${{\color{orange}\Huge{\textsf{Final\ Thoughts\ \}}}}\$
TODO

***


## Summary

TODO
 Happy coding!

## Author

Aisha Evering  
[Email](<shovon3000g@gmail.com>) | [Portfolio](https://aishaeportfolio.com/)



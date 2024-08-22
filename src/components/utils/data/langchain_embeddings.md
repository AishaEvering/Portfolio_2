# LangChain Practice

## Description

This is a simple console application that creates embeddings from text and then chats with the LLM about those embeddings.

## Core Concepts Practiced

- Embeddings: These are vector representations of data, specifically text from a text file in this case. Rather than just being a simple list of numbers, embeddings capture the relationships between words, showing how close or far a word or phrase is from others. LangChain simplifies this process through the OpenAIEmbeddings object, making it easy to convert text into these meaningful vectors.
- Vector Database: Once you have your embeddings, you need to store them in a vector database. There are various types of vector databases, but here, I am using Chroma DB. LangChain's Chroma DB creates a local database for your embeddings, enabling similarity searches with the LLM.
- RedundantFilterRetriever: This custom retriever not only connects to the database but also removes duplicate results, ensuring cleaner and more relevant retrievals. LangChain supports various types of retrievers because it works with many different vector databases. Essentially, a retriever is a function that enables LangChain to interact with the database.
- Application Example: This is essentially how the chatbot on my portfolio functions along with utilizing memory, caching, and other techniques.

Just imagine the possibilities with embeddings:

- Chat with anything
- Build more effective recommendation systems
- Create summaries
- And much more

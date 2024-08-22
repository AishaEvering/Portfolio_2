<p align="center">
   <img src="https://github.com/AishaEvering/LangChain_Practice_Agents/blob/main/parrot.jpeg" alt="PyTorch Logo" width="auto" height="300">
</p>

# LangChain Pratice

## Technologies
[![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)

## 📃 Description

An example of using an `AgentExecutor` to prompt the LLM to answer questions using data from a database and respond not only in text but also with HTML documents."  ❄️Brrrr...it's getting cool in here.❄️

## Core Concepts Practiced
- Contextual Conversations: I started by using a `ChatPromptTemplate` and `ConversationBufferMemory` to maintain context during conversations with the LLM.
- Creating an Agent: I created an agent using `OpenAIFunctionsAgent`, which requires an LLM, a prompt, and something called tools.
- Tools: Tools are objects that perform specific tasks. For example, I have tools that execute SQL queries and tools that save reports as HTML files. This is where the magic happens with agents. If you have a single input, use a `Tool`; if you have multiple inputs, use a `StructuredTool`.
- AgentExecutor: This acts like a sequential chain, using the agent, tools, memory, and prompt to invoke the LLM for a response.
- Working with Tools: While working with tools might seem straightforward, sometimes the LLM might take a different path than expected. To ensure the LLM uses the tools provided, I explicitly direct it through the prompts.
- Event Listening: You can listen for the events that the model executes to complete the task. This approach is often more effective than just setting the verbose option, as it provides a step-by-step rundown of every SQL or function call made by the LLM.
- Side Note: Using `pyboxen` makes your console output more readable, enhancing your ability to review it.


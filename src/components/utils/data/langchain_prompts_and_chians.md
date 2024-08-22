# LangChain Pratice

## 📃 Description

This is a simple console application that accepts user input, generates code in the selected programming language, and provides a corresponding test function.

## Core Concepts Practiced

- Prompt Template: Think of prompt templates as formatting masks for prompts that will be sent to the LLM. They can include user input, language, tasks, and even variables returned from previous prompts.
- LLM Chains: Think of LLM chains like links in a chain. It's an object that holds the model, prompt, and other optional properties like output_key. The output_key is simply the name of the output, which enhances the readability of your code.
- Sequential Chain: This is where the chain comes together, linking all the individual chains. It's what you invoke to send the prompts to the LLM and retrieve the results.

Although working with LangChain can seem unclear at times, breaking it down into small, simple blocks reveals just how straightforward and powerful LangChain really is."

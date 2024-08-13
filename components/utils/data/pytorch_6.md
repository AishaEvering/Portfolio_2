# Getting Modular

Breaking code into python scripts for reusability.

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/05_pytorch_going_modular_exercise_template.ipynb)

- **Key Takeaways**

  - Although it's good practice to break the code into reusable scripts there are a few drabacks.
    - When loading a saved model, like I have been doing with saving the state dictionay, you have to know the type of model it is to load it.
      - This led me to have to create a new model and for now hard code the parameters.
      - There is an option to use jit, but I was running into issues with that.
      - I couldn't easily get the class labels without just hard coding them. I found a few suggestions one being to make the class labels a property of the model. But the model is not supposed to know about those either.
    - I think saving scripts like creating datasets, data loaders, training steps, and testing steps is a smart way to go. But when it comes to training the model fully I don't see the benifit of using a script for that.

- **Where I Got Stuck**

  - I practiced creating a custom decorator to keep track of the execution time when training the model. It works well but I was running into issues when I tried to add that function to a script.
  - Probably not a good idead to hard code class labels and model parameters because of a script. If you can't use the scripts across at least a hand full of models, then why are we here.

- **TIL (I have my hand in several aspects of Machine Learning so sometimes I will come across something I thought was cool and need a place to remember it. This is that place.)**

  - Loaded my python scripts with a multithreaded funciton. It downloaed the scripts from my github and wrote them to the correct directory. I'm not new to pulling and writing files, but this time it was multi-threaded to that was cool.

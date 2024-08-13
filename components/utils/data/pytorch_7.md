# Transfer Learning

Breaking code into python scripts for reusability.

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/06_pytorch_transfer_learning_exercises.ipynb)

- **Key Takeaways**

  - I'm not new to transfer learning but doing it with PyTorch seems to be much more straight forward.
  - When choosing a a base model consider the...
    - Speed - How fast does it run?
    - Size - How big is the model?
    - Performance - How well does it handle your chosen problem.
      - Where does the model live? On a server with a lot of compute or on a mobel app?
  - After that it's all about transforming the data correctrly.
  - Then updating your classifier layer (in my case) to have the correct number of output features.
  - Easy Peasy

- **Where I Got Stuck**

  - There are multiple ways of training a model. When I tried the way of using weights.transform to train my data things did not go well. (Update
    ) I figured it out. It's the best way to go just in case the recipe for transforming the data for the base model changes.

- **TIL (I have my hand in several aspects of Machine Learning so sometimes I will come across something I thought was cool and need a place to remember it. This is that place.)**

  - I've come to the conclusion that most models are using transfering learning from bigger models these days. Why start from scratch? No reason.

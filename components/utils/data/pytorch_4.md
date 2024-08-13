# Computer Vision

Using PyTorch to build a computer vision models. These are my favorite types of projects so far. This notebook covers downloading datasets from Pytorch torchvision datasets, visualizing the data, turning the data into batches of tensors with the data loaders. It also covers building and testing CNN models that mimic the Tiny VGG architecture.

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/03_pytorch_computer_vision_exercises.ipynb)

- **Key Takeaways**
  - It is extremely convenient to use the datasets from PyTorch.
  - Finally started using the dataloader which turns out not to be a big deal. It just turns you dataset into a iterable. I don't why I though it was something more.
  - Also Python function iter()
  - It's more efficient and less computationally expensive to work in batches. Why put 60,000 tensors in memory and optimize (gradient descent) when you can put ~2000.
  - Also starting to focus on how long the model takes to train. Because not only do models have to be somewhat accurate they also have to be fast.
  - I had some clarity on how to conduct an experiment properly. It's less about DRY code and more about making small changes and re-running the experiment. That sounds extremely straight forward as I type this. But it really snapped that the point is not reusability, it helps but that's not the point. The point is to make it clear has to why models, hyper-parameters, metrics where chosen.
  - Speaking of hyper-parameters, I got great clarity as what kernal_size, padding, stride does to the output of a layer.
    - kernel size: the window size that glides across the image
    - padding: extra pixels around the image
    - stride: the number of pixels the the kernel will move across the image. Stride of 1 will cause the kernel to move 1 pixel at a time.
  - A great way of figuring out the number of in_features for the linear layer after the flatten layer is to simply print out the output shapes after each block.
  - Max pooling is essentially taking isolating the most important features by discarding features that are less than 0. Not only making the model more computationally efficient but avoids overfitting.
  - Getting a lot more comfortable with squeezing data and switching devices.
- **Where I Got Stuck**

  - There where times the models had very low accuracies. There was no error but the accuracies seemed extremely odd compared to the other more successful ones. Serveral times I had to search for typos or optimization functions using the wrong model parameters.
  - What would through errors are data or even functions not on the correct device. Had a lot of practice fixing those errors.

- **TIL (I have my hand in several aspects of Machine Learning so sometimes I will come across something I thought was cool and need a place to remember it. This is that place.)**

  - I cam across this today and I don't want to forget it. It has nothing to do with Computer Vision though, it's more about EDA.  
    Have you heard of DataFrame.melt() I've been studying a lot and I've until today, no one mentioned it. It's really cool. It takes a list of columns and "melts" them into rows. Which makes visualizing the data really cool.

  Snippet I don't want to forget:<br>

  features = ["YearBuilt", "MoSold", "ScreenPorch"]

  sns.relplot(
  x="value",
  y="SalePrice",
  col="variable",
  data=df.melt(id_vars="SalePrice", value_vars=features),
  facet_kws=dict(sharex=False),
  );

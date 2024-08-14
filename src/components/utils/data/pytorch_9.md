# Research Paper Replicating

Running experiments and using Tensor Board to analyze the results.

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/08_pytorch_paper_replicating_exercises.ipynb)

- **Key Takeaways**

  - You really have to dig through these papers to get all the hyperparameters.
  - Pytorch has pre-made layers for the more popular papers. That work better than creating all the layers from scratch.
  - I got amazing results from transfer learning. The ViT_B_16_Weights.IMAGENET1K_SWAG_E2E_V1 weights best accuracies and lowest losses.
  - Although the model is the best performing I will have to consider how large the model is. Because I need a model that will work fast in a mobel application.
  - The ViT archetecture performs a lot better than the Convolutional Neural Networks.
  - All and all pretraining on very large datasets and following archtectures that have been researched generally results is really great outcomes. I'm excited.
  - ImageNet-21k pretraining is a large dataset of ~14 million images and 21,000 classes.
  - Learning rate warmup is staring with a small learning rate and gradually increasing it until it reaches it's max. This helps with better convergence and with large batches of data.
  - Learning rate decay gradually lowers the learning rate in the training process. Useful for preventing overfitting and better generalization on unseen data.
  - Gradient clipping prevents the gradients becoming too large by clipping them at a max threshold. Used to prevent exploding gradients.

- **Where I Got Stuck**

  - Reading research papers is not as straight forward as reading a tutorial. It doesn't really flow and there are a lot of references.
  - I have to take the research papers is bits and sometimes hunt for hyerperameters that are not obvious.
  - Also at times I generally don't know what they are saying to I have to take time to google and youtube it.

- **TIL (I have my hand in several aspects of Machine Learning so sometimes I will come across something I thought was cool and need a place to remember it. This is that place.)**

  - Being introduced to the ViT archecture was pretty cool.

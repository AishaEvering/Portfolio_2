# Deploying Models!

Deploying models!!! Finally I made it to deploying uploading models and having live demos.

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/09_pytorch_model_deployment_exercises.ipynb)

- **Key Takeaways**
  - I've been practicing various ways to deploy a model from cloud services to edge devices. This was of deploying to an edge device and the most straight forward way I've encountered.
  - This is more for demo purposes and less for production use because I didn't add any real error handling. For instance, if you upload a image that's not expected the mode will still attempt to predict it. In the future I think I will look for low prediction totals and return "Unknown" if the sum of the predictions are below a certain threshold.
  - Since model or feature extractor is for an edge device the size of the model really mattered.
  - Adding data augmentation was sooooo needed for the overfitting on the Food101 and Oxford III Pet datasets.
  - Gradio and Hugging Faces are fast and convenient!!!!
- **Where I Got Stuck**

  - The training time on the full Food101 dataset was ~18 minutes. Also downloading the model took forever. Google Colab kept having to reconnect.

- **TIL (I have my hand in several aspects of Machine Learning so sometimes I will come across something I thought was cool and need a place to remember it. This is that place.)**

  - Label smoothing is a technique used in training neural networks to improve model performance and generalization. It addresses the issue of overconfidence in model predictions by softening the target labels.

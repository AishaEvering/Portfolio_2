# mlflow Practice

Having an easy and clear way to log machine learning projects is essential. MlFlow provides an easy way to do this and this I plan to adopt this in my all my projects moving forward although I have right now is my local server 😅

## Description

I explored the basic functionality of MLFlow while fine-tuning a distilled BERT model to classify articles based on their summaries. The details of fine-tuning the language model will be covered in a later repository; this repository focuses on using MLFlow to track my experiments. This will be a brief overview, as MLFlow is straightforward to use.

<ol>
  <li>Start MLFlow Server</li>
    <p>
You need to have an MLFlow server running, and luckily, you can do this locally at no cost. Did I mention MLFlow is open source as well? Super cool. I considered using a 'free' server on Databricks or opening a tunnel to my local server so people could see my work, but I needed this to be $Free.99. 
      FYI, you will lose your data when shutting down the server, so it's localhost and maybe some screenshots until I am *ahem* sponsored.
    </p>
    <li>Create Experiment and Starting a Run</li>
    <p>
      This can be done through the MLFlow UI or through code. I chose to do it with code. An experiment is an area where you group all the experimentation for training a model. Each run contains all the parameters, artifacts, and metrics recorded during training. This setup allows you to track exactly how you achieved those awesome results and makes it easier 
      to compare and tweak values like hyperparameters, data, etc.
    </p>
  <li>Logging Params</li>
    <p>
      Keeping a dictionary of your parameters is a convenient way to store model names, hyperparameters, and directories all in one place for all your runs.
    </p>
    <li>Logging Metrics</li>
    <p>
      This is perhaps the coolest feature because, out of the box, you can see the trend of all your metrics and quickly determine which version of your model is performing the best. You can skip all the boilerplate code to plot loss curves and focus on adjusting the model. What a time saver!
    </p>
      <li>Artifacts</li>
    <p>
      You can store everything here, from the data to the actual model. You can register your model in the model registry, download it later, and use it for inference, much like with HuggingFace and other platforms. This is great because who wants to re-train on a CPU because they don't own a GPU? I certainly don't! 😄
    </p>
</ol>

## Conclusion

MLFlow really supports the 'science' part of machine learning, and I like it more than TensorBoard so far. I've heard Weights & Biases and others are also awesome, but the point is that no matter what experiment tracking software is used, it's more important to be familiar with experiment tracking.

# Binary & Multi-class Classification

Creating binary and multi-class classification models. Also I have to choose the appropriate loss and optimization functions.

## 📙 [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/02_pytorch_classification_exercises.ipynb)

- **Key Takeaways**
  - I've used Relu before but somehow these exercise really brought home what non-linearity really means. If you have a regression line or some classification data that can be separated with a straight line then you don't need ReLu or any other non-linear activation function. I understood that it took the max(0, x) before essentially turning off neurons. But to plot it and see the lines curve was a click moment for me.
  - LeakyRelu is supposed to be better because it doesn't turn the neurons completely off.
  - Using the Sequential container to chain the layers within the nnModule makes writing the forward function a lot easier.
  - I understand that you can build a model with the sequential container alone. Creating a nn.Module subclass is good practice for now.
  - Activation functions are not hard to right but PyTorch somehow makes them more efficient.
  - Accuracy is a easy calculations but I used the TorchMetrics Accuracy instead. Of course I usually use the one from Scikit-Learn.
  - Binary Classification
    - BCEWithLogitsLoss loss function is "numerically stable" than just using the BCELoss function. According the the PyTorch documentation.
    - BDEWithLogitsLoss call Sigmoid followed by BCELoss. Otherwise in order to call BCELoss you have to call Sigmoid first.
    - I read that the better activation function is tanh() because it's zero center but can be computationally expensive.
  - Multi-class Classification
    - Instead of SGD I used the Adam optimizer instead and increased the learning rate. This returned a really great test accuracy.

## title: Get Binary Classification Predictions

flowchart LR
a("Forward Pass to get logits") --> b("Sigmoid Function to convert to 0->1 probabilities") --> c("Round Probabilities")

---

## title: Get Multi-class Classification Predictions

flowchart LR
a("Forward Pass to get logits") --> b("Softmax Function to get probabilities, sum of classes = 1") --> c("Argmax to get highest probability")

- **Where I Got Stuck**

  - Sometimes I'll walk away and when I run the same code I get an error that the tensor is not on the correct device. I could just at ...to(device) at the end but there's no real need the code was working perfectly fine before. If I rebuild the model everything is back to normal.
  - Make sure you get the in_features, and out_features correct. I mis-read my binary y label as 2 instead of the layer should return 1 value. Found the issue and fixed it.

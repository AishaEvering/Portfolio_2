Created linear data using torch.arange, built a linear regression model, created a testing and training loop, made predictions, plotted the predictions, saved the model to disk, and re-loaded the model.

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/01_pytorch_workflow_exercises.ipynb)

**Key Takeaways**

- nn.L1Loss() MAE (Mean Absolute Error). This is the loss function for regression models. Basically, how far on average where the predictions off from the ground truth?
- nn.MSELoss() (Mean Square Error). Makes small errors look BIG.
- SGD Optimizer (Stochastic Gradient Descent) works with a lot of model types including linear regression. It changes the model's parameters (weights, bias) **using a subset of the training data** in order to lower the loss/cost function.
- When testing or making predictions be sure to put the model in eval mode so it doesn't so extra unneeded steps like gradient descent, dropout, etc..
- Also when testing or making predictions use with torch.inference_mode(): for faster processing
- It's recommended to save the stat_dict instead of the entire model.
- When saving the best model be sure to use deepcopy(model.stat_dict()) or the best_model will be updated as the model continues to train.

## title: Training Loop

flowchart LR
a("Set Train Mode") --> b("Forward Pass") --> c("Calculate the Loss") --> d("Zero the Gradients") --> e("Back Propagation") --> f("Optimizer Step")

---

## title: Testing Loop

flowchart LR
a("Set Eval Mode") --> b("With Inference_Mode()") --> c("Forward Pass") --> d("Calculate the Loss") --> e("Print What's Happening")

**Where I Got Stuck**

- Squeezing and Unsqueezing tensors still seem a little unintuitive. I recognize the error so the fix is quick but I will like when to squeeze/unsqueeze to become more intuitive.

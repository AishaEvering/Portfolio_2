Solidifying the fundamentals of Tensors and Pytorch 😄

## [Jupyter Notebook](https://github.com/AishaEvering/PyTorch_Exercises/blob/main/00_pytorch_fundamentals_exercises.ipynb)

What is a Tensor?:<br>
Tensors are n-dememsional arrays with the implicit assumption that they ca run on a GPU. They are fast. Way faster than arrays.

- ** Key Takeaways**

  - Device agnostic code is very very important. It's best to set the device early in the project to make it easier to handle any device specific errors later.
  - Matplotlib does not support cuda. You have to go back to ...cpu() in order to plot something.
  - This is how you multiply a tensor, tensor_1.matmul(tensor_1.T). So is this, tensor_1.mm(tensor_1.T). And this, tensor_1 @ tensor_1.T

- ** Where I Got Stuck**
  - Why do we have to randomly squeeze tensors? I understand the squeezing a tensor removes the 1 dimensions.

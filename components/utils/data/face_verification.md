<p align="center">
   <img src="https://github.com/AishaEvering/FaceVerification/blob/main/FaceVerification.png" alt="Face Verification" width="600" height="300">
</p>

# Face Verification (YouTube Tutorial) :youtube

This is the result of an 8 part YouTube series of using Deep Learning with TensorFlow to authenticate your face much like on iPhone. _Pretty Cool._

## Description

This is a TensorFlow neural network model that performs computer vision to authenticate an image.

## What Did I Learn

- How to use Tensor flow decorators.
- How to create a custom training step using TensorFlow.

## Key Takeaways

This is my first experience with following a research paper's neural network architecture. Some of the cool takeaways I got from it where

- One Shot: The model must correctly make predictions given only a single example. The model was trained on hundreds of images of my face (positive) and random faces (negative). Then the model was given a single single (one-shot) image and validated it against a validation image. Depending on the verification threshold which in the case was 70% the model verified that if the person in the image was the same person if the given image.
- This model used the siamese neural network method that took in 2 inputs and ranked the similarity.

### Where I Got Stuck

- OpenCV opening the web camera does not work in Google Colab. There is a snippet available on Google Colab that takes a single picture from the web camera, but I needed hundreds. So I took a little detour and updated the code to work like OpenCV did in the tutorial. I even wrote about it, check it out. [TIL How to Take Hundreds of Images Through Google Colab](https://dev.to/aishaevering/til-how-to-take-hundred-of-images-through-google-colab-3bbo)

### Todos...

- Deploy the model so it can easily verify faces.

### Dataset

- ~400 Anchor images taken with my webcam. They are currently stored in my Google Drive.
- ~400 Positive images taken with my webcam. They are currently store in my Google Drive.
- ~400 Negative images provided my tutorial, labeled Faces in the Wild.

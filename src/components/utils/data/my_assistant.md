# My Assistant

In our fast-paced world, having a personal assistant can make life significantly easier. While some are fortunate enough to have one, most of us rely on virtual assistants like Alexa, Siri, Google Assistant, and now, My Assistant.

My Assistant is a fine-tuned DistilBERT model optimized for multiclass text classification. Trained on the [Bhuvaneshwari/intent_classification dataset](https://huggingface.co/datasets/Bhuvaneshwari/intent_classification) from Hugging Face, it accurately predicts customer intents across a range of categories, including:

[<i>Add To Playlist, Affirmation, Book Meeting, Book Restaurant, Cancellation, Excitment, Get Weather, Greetings, Play Music, Rate Book, Search Creative Work, Search Screening Event</i>]

## [Live Demo](https://huggingface.co/spaces/AishaE/My_Assistant)

## [Jupyter Notebook](https://github.com/AishaEvering/My_Assistant/blob/main/My_Assistant.ipynb)

## Key Takeaways

PyTorch Seems Easier with Hugging Face

During this project, I encountered numerous transformer versioning issues. As a developer accustomed to constant change, I found the rapid evolution in the machine learning field particularly intense. When searching for help online, I often had to check dates, as the community might have moved on from older methods quite quickly. This wasn’t as prominent during my work on a PyTorch project. It might be due to the larger number of developers working with PyTorch or my increased use of Hugging Face transformers. Despite Hugging Face offering both PyTorch and TensorFlow versions of their models, TensorFlow sometimes feels like the “red-headed stepchild”—that’s a reference to Annie, for those who might not be familiar. However, [legacy documentation](https://huggingface.co/transformers/v3.2.0/custom_datasets.html) proved to be incredibly helpful. This experience leads me to my next topic...

---

Do We Still Use Training Arguments?

I’ve noticed that there’s a shift away from using TrainingArguments and the Trainer class. The current approach involves setting up an optimizer, activation function, and crafting a training loop similar to what you’d do with PyTorch. Please correct me if I’m mistaken. This change underscores the importance of knowing the correct version of transformers to use, as getting it wrong can lead to a host of errors during model downloading and training. Regardless, I believe it’s still beneficial to be familiar with older methods, as companies often don’t adapt as quickly as the latest libraries. Being knowledgeable about established practices can still be a significant advantage.

---

What Is BERT?
BERT is an encoder-only transformer architecture. As a visual learner, this part <img src="https://github.com/AishaEvering/My_Assistant/blob/main/encoder.png" alt="Encoder Only Transformer Archecture"> for the most part you need to add linear and softmax output layers. BERT is used in applications such as summarization, sentiment analysis, question answering systems, and text classification. For this project, I’m using the distilled version of the model because it’s smaller and faster. The real magic lies in the attention or multi-head attention layers, where the model determines the context of words. It’s a true testament to the power of math, and the nerd in me thinks it’s incredibly cool.

---

Final Results

I got great metrics from testing on the test dataset. Hmmmm...that's suspicious

   <table>
     <tr>
       <td>
         <strong>Accuracy</strong>
       </td>
        <td>98.9%</td>
     </tr>
     <tr>
       <td>
         <strong>Precision</strong>
       </td>
        <td>98.9%</td>
     </tr>
     <tr>
       <td>
         <strong>Recall</strong>
       </td>
        <td>98.9%</td>
     </tr>
   </table>
<br/>


After also manually testing the model it seemed to work. So I just went with it. This model is currently the one showcased in the [live demo](https://huggingface.co/spaces/AishaE/My_Assistant).

## Room for Improvement

- I could transition from using TrainingArguments and Trainer to setting up an optimizer, activation function, and a custom training loop. This change would allow me to better monitor the training process. With the Trainer, I was unable to see the current epoch or estimate the duration of the training process, which made it difficult to gauge progress.
- The data was imbalanced for a few classes. To address this, I upsampled the minority classes to match the majority classes. Ideally, retraining the model on this more balanced dataset would improve performance.

## Summary

The project was successful, but if I’m being honest, my next project will be in PyTorch. It’s not necessarily easier, but sharpening my skills is my top priority right now. Focusing on becoming highly proficient in one framework that I can use more efficiently seems like a worthwhile approach. Don't quote me on this, I might change my mind tomorrow.
Happy coding!

## Author

Aisha Evering  
[Email](shovon3000g@gmail.com) | [Portfolio](https://aishaeportfolio.com/)

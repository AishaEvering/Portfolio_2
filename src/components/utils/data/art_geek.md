# Art Geek

I'm diving into the world of art classification with cutting-edge neural networks! This project leverages the diverse [WikiArt dataset](https://huggingface.co/datasets/huggan/wikiart) from Hugging Face to train models that classify artworks into multiple categories, including genre and style. Unlike traditional single-label tasks, my approach tackles the complexity of multi-class classification, predicting multiple attributes of each piece to provide a rich, nuanced understanding of artistic creations.

## [Live Demo](https://huggingface.co/spaces/AishaE/art_geek)

## [Jupyter Notebook](https://github.com/AishaEvering/Art_Geek/blob/main/Art_Geek.ipynb)

## Key Takeaways

Understanding Multi-Label vs. Multi-Class Classification

Initially, I thought my problem was multi-label classification because it involved multiple characteristics of artwork, such as artist, genre, and style. However, I quickly realized that this wasn't the case. Multi-label classification applies when each artwork can have multiple labels in each category (e.g., multiple artists or styles). In my scenario, each artwork is associated with exactly one artist, one genre, and one style, making it a multi-class classification problem.
To align with this, I had to make several adjustments:

- Data Encoding: Switched from MultiLabelBinarizer to One-Hot Encoding.
- Loss Function: Changed from Binary Cross-Entropy (BCE) to Cross-Entropy Loss.
- Activation Function: Transitioned from Sigmoid to Softmax.
  These changes were essential to correctly model the classification task and highlighted the important distinction between multi-label and multi-class problems.

---

Removed Artist as a Classification Characteristic

The dataset exhibited significant imbalance across all labels—artist, genre, and style—with an even greater disparity for the artist label. Over half of the data had unknown artists, and many artists had only a few artworks. Unlike genre and style, the artist label lacked sufficient breadth and diversity for effective model training. Consequently, I decided to remove the artist label to improve the model's overall performance.
In the future, I might revisit this aspect by focusing on a select group of top artists, such as training a model specifically to recognize Vincent Van Gogh's works. For now, the project's focus remains on broadly classifying artworks based on genre and style.

---

Handling Imbalanced Data

To address the remaining imbalance in the genre and style labels, I chose to retain the dataset as is and leverage the compute_class_weight function to adjust the class weights in the model's loss function. This approach increased the importance of underrepresented classes while reducing the weight of overrepresented ones. As a result, this adjustment not only reduced the loss but also enhanced the model’s accuracy.

---

Efficient Net vs. Vision Transformer

In this project, I evaluated the performance of EfficientNet and Vision Transformer (ViT) models using transfer learning. EfficientNet was chosen for its compact size, efficiency, and strong representation of convolutional neural networks (CNNs). Conversely, ViT was selected to explore whether transformers might outperform CNNs for certain tasks. Additionally, I experimented with various image augmentations. However, these experiments were less successful compared to the base models, which is understandable given that altering artwork could significantly change its genre or style.

- **EfficientNet**: This model excelled at predicting the genre of an image but was less effective at predicting the style.
   <table>
     <tr>
       <td>
         <strong>Accuracy</strong>
         <ul>
           <li><strong>Genre:</strong> 57%</li>
           <li><strong>Style:</strong> 39%</li>
         </ul>
       </td>
       <td>
         <strong>F1 Score</strong>
         <ul>
           <li><strong>Genre:</strong> 53%
             <ul>
               <li><small><i>Precision:</i> 51% of the predicted genres were correct.</small></li>
               <li><small><i>Recall:</i> The model identified 64% of all actual genres.</small></li>
             </ul>
           </li>
           <li><strong>Style:</strong> 35%
             <ul>
               <li><small><i>Precision:</i> 34% of the predicted styles were correct.</small></li>
               <li><small><i>Recall:</i> The model identified 49% of all actual styles.</small></li>
             </ul>
           </li>
         </ul>
       </td>
     </tr>
   </table>
<br/>

- **Vision Transformer**: This model also excelled at predicting the genre of an image and also did better in predicting the style.

   <table>
     <tr>
       <td>
         <strong>Accuracy</strong>
         <ul>
           <li><strong>Genre:</strong> 61%</li>
           <li><strong>Style:</strong> 45%</li>
         </ul>
       </td>
       <td>
         <strong>F1 Score</strong>
         <ul>
           <li><strong>Genre:</strong> 58%
             <ul>
               <li><small><i>Precision:</i> 55% of the predicted genres were correct.</small></li>
               <li><small><i>Recall:</i> The model identified 68% of all actual genres.</small></li>
             </ul>
           </li>
           <li><strong>Style:</strong> 43%
             <ul>
               <li><small><i>Precision:</i> 40% of the predicted styles were correct.</small></li>
               <li><small><i>Recall:</i> The model identified 54% of all actual styles.</small></li>
             </ul>
           </li>
         </ul>
       </td>
     </tr>
   </table>

The standout performer is the ViT model, which excels even without additional augmentations. This model is currently the one showcased in the [live demo](https://huggingface.co/spaces/AishaE/art_geek).

## Room for Improvement

- Expand the Dataset: Increasing the amount of data and extending the number of epochs will likely enhance model performance and prediction accuracy.
- Utilize a Learning Rate Scheduler: Implementing a learning rate scheduler can help fine-tune the learning rate, potentially leading to better convergence.
- Focus on Specific Artists: Narrowing the dataset to a select group of artists could provide the model with more focused training, improving its ability to classify art more accurately.
- Incorporate Model Ensembling: Combining predictions from multiple models could lead to more robust and accurate results.

## Summary

This project has been both a challenging and rewarding journey. I had to step back and reassess the metrics, retrain, refactor the code several times, and all of this was done on a borrowed Google GPU via Google Colab, adding to the adventure. Despite the frustrations, I’m incredibly proud of what I’ve accomplished. There’s something truly satisfying about figuring things out as you go. Thank you for following along, and I look forward to sharing my next project. Happy coding!

## Author

Aisha Evering  
[Email](shovon3000g@gmail.com) | [Portfolio](https://aishaeportfolio.com/)

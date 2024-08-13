# ML Models From Scratch Exercises

This repo will contain various ML models written from scratch via a tutorial. It just futher solidifies my understanding of how these models work.

## Extra Info:

- [Classification Model Metrics](#classification-model-metrics)<br>
- [Regression Model Metrics](#regression-model-metrics)

## [K-Nearest Neighbors (KNN)](https://github.com/AishaEvering/ML_Models_From_Scratch/blob/main/K_Nearest_Neighbors.ipynb)

- One of the most straight forward classfication models.
- K-Nearest Neighbors (KNN) operates by computing the distances between the data point in question and all other points in the dataset. It then identifies the top 'k' (a hyperparameter) closest neighbors and determines the appropriate label based on the majority label among these neighbors.
- Make sure the k is an odd number to avoid ties for majority.

## [Linear Regression](https://github.com/AishaEvering/ML_Models_From_Scratch/blob/main/Linear_Regression.ipynb)

- Understand and quantify the relationship between two variables by fitting a straight line to the observed data points.

## [Logistic Regression](https://github.com/AishaEvering/ML_Models_From_Scratch/blob/main/Logistic_Regression.ipynb)

- Understand the relationship between the independent variables and the categorical outcome using the logistic function (sigmoid), which outputs probabilities between 0 and 1.

<hr />

## Classification Model Metrics

- **Accuracy**: Correct classifications out of all the classifications. Do not use when data is unbalanced.
- **Precision**: Proportion of correct positives out of all the postivies. Use when the need to know what was classified as positive is actually positive.
- **Recall**: Proportion of correct positives out of all the actual positives including true positives and false negatives. Use when it's important to know how well the model is capturing all the positives.
- **F1 score**: A balance between precision and recall.
- **ROC Curve (Receiver Operating Characteristic Curve)**: A plot of the true positive rate (tpr) against the false positive rate (fpr) at various thresholds.
- **AUC Curve (Area Under the ROC Curve)**: It provides a single value representing the model's ability to discriminate between positive and negative instances across all possible threshold settings.

## Regression Model Metrics

- **Mean Squared Error (MSE)**: On average how far are the predictions off squared. It's squared so the negative differences don't negate the positive ones.
- **Root Mean Squared Error (RMSE)**: The square root of MSE.
- **Mean Absolute Error (MAE)**: The average of the absolute differences between the predicted and actual values. Just like MSE expect it handles the negative differences by turning them to absolutes and it does not square the values.
- **R-squared (R2)**: The proportion of the variance in the dependent variable (the label) that is predictable from the independant variable(s) (the features). Unlike the ones mention above, the higher the value (closer to 1) the better.
- **Adjusted R-squared**: R2 but it also penalized the addition of unnecessary predictors (features) to the model.

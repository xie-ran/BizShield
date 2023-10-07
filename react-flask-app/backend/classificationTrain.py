# for demo purpose only
# real nn may vary a lot depending on the data

# import necessary libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import SMOTE
from statsmodels.tsa.arima_model import ARIMA
from xgboost import XGBClassifier
from lightgbm import LGBMClassifier
from sklearn.metrics import classification_report
from lime.lime_tabular import LimeTabularExplainer
from tensorflow import keras
from sklearn.metrics import accuracy_score, classification_report


# assume data is in data.csv
data = pd.read_csv('data.csv')

# split data 
X = data.drop(columns=['risk_type']) 
y = data['risk_type']

labeled_mask = y.notnull()
X_labeled = X[labeled_mask]
y_labeled = y[labeled_mask]
X_unlabeled = X[~labeled_mask]
y_unlabeled = y[~labeled_mask]


# feature engineering 
scaler = StandardScaler()
X_labeled = scaler.fit_transform(X_labeled)
X_unlabeled = scaler.transform(X_unlabeled)

X_train, X_test, y_train, y_test = train_test_split(X_labeled, y_labeled, test_size=0.2, random_state=42)

# SMOTE for handling class imbalance
smote = SMOTE()
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

# time series component
# arima_model = ARIMA(y_labeled, order=(p, d, q))  
# arima_fit = arima_model.fit()

model = keras.Sequential([
    keras.layers.Input(shape=(X_resampled.shape[1],)),  
    keras.layers.Dense(64, activation='relu'), 
    keras.layers.Dense(32, activation='relu'), 
    keras.layers.Dense(16, activation='relu'), 
    keras.layers.Dense(4, activation='softmax') 
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(X_resampled, y_resampled, epochs=10, batch_size=64)
nn_predictions = model.predict(X_resampled)
nn_accuracy = accuracy_score(y_resampled, nn_predictions)


# XGBoost Classifier
xgb_model = XGBClassifier()
xgb_model.fit(X_resampled, y_resampled)

# LightGBM Classifier
lgbm_model = LGBMClassifier()
lgbm_model.fit(X_resampled, y_resampled)

# evaluate the models
y_pred_xgb = xgb_model.predict(X_unlabeled)
y_pred_lgbm = lgbm_model.predict(X_unlabeled)

# generate classification reports 
report_xgb = classification_report(y_unlabeled, y_pred_xgb)
report_lgbm = classification_report(y_unlabeled, y_pred_lgbm)

print("Neural Network Accuracy:")
print(nn_accuracy)

print("XGBoost Classification Report:")
print(report_xgb)

print("LightGBM Classification Report:")
print(report_lgbm)

# LIME explainer
explainer = LimeTabularExplainer(X_resampled, mode="classification")

instance_to_explain = X_unlabeled[0]
explanation = explainer.explain_instance(instance_to_explain, xgb_model.predict_proba)
explanation.show_in_notebook()
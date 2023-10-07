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

# SMOTE for handling class imbalance
smote = SMOTE()
X_resampled, y_resampled = smote.fit_resample(X_labeled, y_labeled)

# time series component
# arima_model = ARIMA(y_labeled, order=(p, d, q))  
# arima_fit = arima_model.fit()

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

print("XGBoost Classification Report:")
print(report_xgb)

print("LightGBM Classification Report:")
print(report_lgbm)

# LIME explainer
explainer = LimeTabularExplainer(X_resampled, mode="classification")

instance_to_explain = X_unlabeled[0]
explanation = explainer.explain_instance(instance_to_explain, xgb_model.predict_proba)
explanation.show_in_notebook()

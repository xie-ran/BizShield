from flask import Flask, jsonify, request
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/api/login/investor', methods=['POST'])
def investor_login():
    # Hardcoded credentials
    username = "investor123"
    password = "password"
    
    if request.json["username"] == username and request.json["password"] == password:
        return jsonify(status="success", message="Logged in as Investor!")
    else:
        return jsonify(status="error", message="Invalid credentials!")

@app.route('/api/login/company', methods=['POST'])
def company_login():
    # Hardcoded credentials
    username = "company123"
    password = "password"
    
    if request.json["username"] == username and request.json["password"] == password:
        return jsonify(status="success", message="Logged in as Company!")
    else:
        return jsonify(status="error", message="Invalid credentials!")


@app.route('/api/getCompanyListings', methods=['POST'])
def get_company_listings():
    if not request.json:
        return jsonify({"error": "JSON data expected"}), 400

    # Your data processing logic can use the incoming JSON if required

    companies = ['Apple', 'Microsoft', 'Google', 'Facebook', 'Amazon']
    data = []

    for company in companies:
        operation_risk = random.randint(1, 97)
        legal_risk = random.randint(1, 98 - operation_risk)
        loan_risk = random.randint(1, 99 - operation_risk - legal_risk)
        others = 100 - operation_risk - legal_risk - loan_risk

        risks = {
            'operation_risk': operation_risk,
            'legal_risk': legal_risk,
            'loan_risk': loan_risk,
            'others': others
        }

        max_risk_type = max(risks, key=risks.get)

        data.append({
            'name': company,
            'operation_risk': operation_risk,
            'legal_risk': legal_risk,
            'loan_risk': loan_risk,
            'others': others,
            'type': max_risk_type
        })

    return jsonify(data)


@app.route("/api/getCompanyData", methods=["GET"])
def get_company_data():
    data = {
        'riskData': {
            'labels': ['Operational', 'Legal', 'Loan', 'Others'],
            'datasets': [{
                'data': [35, 20, 25, 20],
                'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        'stockData': {
            'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            'datasets': [{
                'label': 'Stock Price',
                'data': [100, 105, 104, 110, 115],
                'backgroundColor': 'rgba(75,192,192,0.4)',
                'borderColor': 'rgba(75,192,192,1)',
                'borderWidth': 1
            }]
        },
        'esgData': {
            'labels': ['Environmental', 'Social', 'Governance'],
            'datasets': [{
                'data': [40, 30, 30],
                'backgroundColor': ['#33A02C', '#1F78B4', '#E31A1C']
            }]
        },
        'analystRatingsData': {
            'labels': ['Buy', 'Hold', 'Sell'],
            'datasets': [{
                'data': [10, 5, 2],
                'backgroundColor': ['#5DADE2', '#F4D03F', '#E74C3C']
            }]
        },
        'newsItems': ["News Item 1", "News Item 2", "..."],
        'analystComments': ["Analyst Comment 1", "Analyst Comment 2", "..."]
    }
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)

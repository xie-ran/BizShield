from flask import Flask, jsonify, request
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/api/login/individual', methods=['POST'], strict_slashes=False)
def investor_login():
    # Hardcoded credentials
    username = "individual123"
    password = "ilovechengdu"
    
    if request.json["username"] == username and request.json["password"] == password:
        return jsonify(status="success", message="Logged in as Individual!")
    else:
        return jsonify(status="error", message="Invalid credentials!")

@app.route('/api/login/corporate', methods=['POST'], strict_slashes=False)
def company_login():
    # Hardcoded credentials
    username = "corporate123"
    password = "ilovechengdu"
    
    if request.json["username"] == username and request.json["password"] == password:
        return jsonify(status="success", message="Logged in as Corporate!")
    else:
        return jsonify(status="error", message="Invalid credentials!")


@app.route('/api/getCompanyListings', methods=['POST'], strict_slashes=False)
def get_company_listings():
    if not request.json:
        return jsonify({"error": "JSON data expected"}), 400

    # Your data processing logic can use the incoming JSON if required

    companies = ['Apple', 'Microsoft', 'Google', 'Facebook', 'Amazon', 'Tesla', 'Netflix', 'Samsung', 'IBM', 'Oracle'];

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


@app.route("/api/getProfileData", methods=["GET"], strict_slashes=False)
def get_profile_data():
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
                'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        'newsItems': ["News Item 1", "News Item 2", "..."],
        'analystComments': ["Analyst Comment 1", "Analyst Comment 2", "..."]
    }
    return jsonify(data)



@app.route("/api/getDashboardData", methods=["GET"], strict_slashes=False)
def get_dashboard_data():
    data = {
        'riskData': {
            'labels': ['Operational', 'Legal', 'Loan', 'Others'],
            'datasets': [{
                'data': [35, 20, 25, 20],
                'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },
        'financialOverview': {
            'labels': ['Revenue', 'Expenses', 'Profit'],
            'datasets': [{
                'data': [100000, 50000, 50000],
                'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56'], 
            }],
            'annotations': [
                'Operational risk affected revenue in Q1',
                'Legal settlements increased expenses in Q2',
                'Profit margins improved after mitigating loan risks in Q3'
            ]
        },
        'marketAnalysis': {
            'labels': ['Market Share', 'Competitive Position', 'Market Shifts'],
            'datasets': [{
                'label': 'Market Data', 
                'data': [25, 2, -5],  
                'backgroundColor': 'rgba(75,192,192,0.2)', 
                'borderColor': 'rgba(75,192,192,1)', 
                'pointBackgroundColor': 'rgba(75,192,192,1)', 
                'pointBorderColor': '#fff',
                'pointHoverBackgroundColor': '#fff',
                'pointHoverBorderColor': 'rgba(75,192,192,1)'
            }],
            'risks': ['Loss of market share due to operational risks', 'Position threatened by legal issues', 'Market shifts due to external economic factors']
        },


        'goalsAndTargets': {
            'goals': ['Increase Market Share', 'Launch New Product', '...'],
            'mitigationStrategies': ['Address operational risks to improve production', 'Secure loans for R&D to facilitate new product launch','...']
        }
    }

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

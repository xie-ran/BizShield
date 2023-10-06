from flask import Flask, jsonify, request
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/login/investor', methods=['POST'])
def investor_login():
    # Hardcoded credentials
    username = "investor123"
    password = "password"
    
    if request.json["username"] == username and request.json["password"] == password:
        return jsonify(status="success", message="Logged in as Investor!")
    else:
        return jsonify(status="error", message="Invalid credentials!")

@app.route('/login/company', methods=['POST'])
def company_login():
    # Hardcoded credentials
    username = "company123"
    password = "password"
    
    if request.json["username"] == username and request.json["password"] == password:
        return jsonify(status="success", message="Logged in as Company!")
    else:
        return jsonify(status="error", message="Invalid credentials!")


@app.route('/getCompanyListings', methods=['POST'])
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


@app.route('/getCompanyMetrics', methods=['POST'])
def get_company_metrics():
    # For this example, we'll just send dummy data. Typically, you'd query a database.
    
    data = {
        'peRatio': "25.4",
        'dividendYield': "1.5%",
        'eps': "$3.20",
        'revenueTrend': "$5.6B (3% YoY increase)",
        'competitorRisk': "Lower",
        'sustainabilityInitiatives': "Company has reduced carbon emissions by 15% this year.",
        'recentNews': "Apple has recently faced operational challenges due to supply chain disruptions.",
        
        'riskChartData': {
            'labels': ['Operational', 'Legal', 'Loan', 'Others'],
            'datasets': [{
                'data': [35, 20, 25, 20],
                'backgroundColor': ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        },

        'stockChartData': {
            'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            'datasets': [{
                'label': 'Stock Price',
                'data': [100, 105, 104, 110, 115],
                'backgroundColor': 'rgba(75,192,192,0.4)',
                'borderColor': 'rgba(75,192,192,1)',
                'borderWidth': 1
            }]
        }
    }

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

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


if __name__ == '__main__':
    app.run(debug=True)
 
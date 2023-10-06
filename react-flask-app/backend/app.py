from flask import Flask, jsonify, request

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)
 
## BizShield

Welcome to the BizShield demo. 

To get started, let's set up the necessary environment and tools:

---

**Initial Setup:**

Ensure you have a conda environment. Create one using:
```bash
conda create --name venv python=3.9.6
```

---

### 1. Setting up the Flask Backend

**Requirement:** Python3.

```bash
# Install npm
install npm

# Activate the conda environment
conda activate venv

# Clone the BizShield repository
git clone https://github.com/xie-ran/BizShield.git

# Navigate to the backend directory
cd BizShield/react-flask-app/backend

# Install the required packages
pip install -r requirements.txt

# Launch the Flask server
flask run
```
Access the Flask backend at [http://localhost:5000/](http://localhost:5000/).

---

### 2. Setting up the React Frontend

**Requirement:** npm and yarn.

```bash
# In a separate terminal, activate the conda environment
conda activate venv

# Navigate to the app directory
cd BizShield/react-flask-app

# (Optional) Remove the package-lock.json file
rm -rf package-lock.json

# Install react-scripts and other dependencies
npm install react-scripts
npm install

# Launch the React app
npm run start
```
Access the React frontend at [http://localhost:3000/](http://localhost:3000/).

---

### 3. Running the App Locally

```bash
# In a terminal, activate the conda environment and run the backend
conda activate venv
cd BizShield/react-flask-app/backend
python app.py

# In another terminal, launch the front-end app
cd BizShield/react-flask-app
yarn start
```
Keep both terminals running. Access the full app at [http://localhost:3000/](http://localhost:3000/).

---

**Sample Logins:**

For Individual Users:
- **Username:** individual123
- **Password:** ilovechengdu

For Corporates:
- **Username:** corporate123
- **Password:** ilovechengdu

---

**Acknowledgment:** 
My heartfelt thanks to my teammates, Yitong and Xintong, for their consistent support throughout the app's development.
```
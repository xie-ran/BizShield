```markdown
## BizShield

This is a demo for BizShield.

Before you start, create a conda environment using the following command:
```bash
conda create --name venv python=3.9.6
```

---

### 1. Install Flask Back End

**Requirement:** Ensure Python3 is installed.

```bash
# Install npm
install npm

# Activate the conda environment
conda activate venv

# Clone the repository
git clone https://github.com/xie-ran/BizShield.git

# Change to the backend directory
cd BizShield/react-flask-app/backend

# Install required packages
pip install -r requirements.txt

# Start Flask
flask run
```

The Flask back end will be accessible at: [http://localhost:5000/](http://localhost:5000/)

---

### 2. Install React Front End

**Requirement:** Ensure npm and yarn are installed.

```bash
# Open a separate terminal window and activate the conda environment
conda activate venv

# Change to the main app directory
cd BizShield/react-flask-app

# Remove the package-lock.json file
rm -rf package-lock.json

# Install react-scripts
npm install react-scripts

# Install other required packages
npm install

# Start the React app
npm run start
```

React will be accessible at: [http://localhost:3000/](http://localhost:3000/)

---

### 3. Run the app locally

```bash
# Open a terminal window and activate the conda environment
conda activate venv

# Change to the backend directory
cd BizShield/react-flask-app/backend

# Run the backend app
python app.py

# Open another terminal window
cd BizShield/react-flask-app

# Start the front-end app
yarn start
```

The app will be accessible at: [http://localhost:3000/](http://localhost:3000/)

Please ensure both terminal windows remain open at all times.

---

**Acknowledgment:** 
I sincerely thank my teammates, Yitong and Xintong, for their unwavering support during the development of this app.
```
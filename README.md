# BizShield
 This is a demo for BizShield.

Create conda environment using the following command
`conda create --name venv python=3.9.6 (first time only)`

# step 1: Backend
Requirement: Please have Python3 installed.
1. `install npm`
2. `conda activate venv`
3. `git clone https://github.com/xie-ran/BizShield.git` (first time only)
4. `cd BizShield/react-flask-app/backend`
5. `pip install -r requirements.txt` (first time only)
6. `flask run`
the flask back end will be running on http://localhost:5000/

# step 2: Frontend
Requirement: Please have npm and yarn installed.
1. open another separate terminal window
2. `conda activate venv`
2. `cd BizShield/react-flask-app`
3. `rm -rf package-lock.json` (first time only)
4. `npm install react-scripts` (first time only)
5. `npm install` (first time only)
6. `npm run start`
the app will run on http://localhost:3000/
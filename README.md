# BizShield
This is a demo for BizShield.

Please first create a conda environment using the following command
`conda create --name venv python=3.9.6` 

### 1. Install Flask Back End
Requirement: Please have Python3 installed.
1. `install npm`
2. `conda activate venv`
3. `git clone https://github.com/xie-ran/BizShield.git` 
4. `cd BizShield/react-flask-app/backend`
5. `pip install -r requirements.txt` 
6. `flask run`
The flask back end will be running on http://localhost:5000/

### 2. Install React Front End
Requirement: Please have npm and yarn installed.
1. open another separate terminal window
2. `conda activate venv`
2. `cd BizShield/react-flask-app`
3. `rm -rf package-lock.json` 
4. `npm install react-scripts` 
5. `npm install`
6. `npm run start`
The front end will be running on http://localhost:3000/


### 3. Run the app
1. Open a terminal window
2. `conda activate venv`
3. `cd BizShield/react-flask-app/backend`
4. `flask run`
5. Open another terminal window
6. `cd BizShield/react-flask-app`
7. `yarn start`
8. The app will be running on http://localhost:3000/
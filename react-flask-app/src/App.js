import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import CompanyListings from './Components/CompanyListings/CompanyListings';
import CompanyProfile from './Components/CompanyProfile/CompanyProfile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login/:type" element={<LoginPage />} />
                <Route path="/company-listings" element={<CompanyListings />} />
                <Route path="/company/:companyName" element={<CompanyProfile />} />
            </Routes>
        </Router>
    );
}

export default App;

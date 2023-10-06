import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import LoginPage from './Components/LoginPage/LoginPage';
import CompanyListings from './Components/CompanyListings/CompanyListings';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login/:type" element={<LoginPage />} />
                <Route path="/company-listings" element={<CompanyListings />} />
            </Routes>
        </Router>
    );
}

export default App;

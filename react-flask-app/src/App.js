import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login/:type" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;

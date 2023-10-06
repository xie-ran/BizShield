import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome</h2>
            <button onClick={() => navigate('/login/investor')}>Investor</button>
            <button onClick={() => navigate('/login/company')}>Company</button>
        </div>
    );
}


export default WelcomePage;

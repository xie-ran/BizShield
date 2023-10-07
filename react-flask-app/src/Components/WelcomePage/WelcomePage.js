import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function WelcomePage() {
    const navigate = useNavigate();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h2>Welcome to BizShield</h2>
                    <p>Select your role to proceed:</p>
                    <div className="d-grid gap-2">
                        <button 
                            className="btn btn-primary mb-2"
                            onClick={() => navigate('/login/individual')}
                        >
                            Individual
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => navigate('/login/corporate')}
                        >
                            Corporate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;

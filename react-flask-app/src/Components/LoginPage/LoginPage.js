import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { type } = useParams();
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch(`/api/login/${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            if(data.status === "success") {
                if(type === "investor") {
                    console.log('investor')
                    navigate('/company-listings'); // Redirect to company listings page
                } else if(type === "company") {
                    console.log('company')
                    navigate('/company-dashboard'); // Redirect to company dashboard page
                }
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error.message);
        });

    };

    const title = type.charAt(0).toUpperCase() + type.slice(1) + " Login";

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">{title}</h2>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

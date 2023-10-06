import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { type } = useParams(); // <-- This is how you get the route params
    const navigate = useNavigate();

    const handleLogin = () => {
        fetch(`http://localhost:5000/login/${type}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === "success") {
                alert(data.message);
                if(type === "investor") {
                    navigate('/company-listings'); // Redirect to company listings page
                }
            } else {
                alert(data.message);
            }
        });
    };

    const title = type.charAt(0).toUpperCase() + type.slice(1) + " Login";

    return (
        <div>
            <h2>{title}</h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}



export default LoginPage;

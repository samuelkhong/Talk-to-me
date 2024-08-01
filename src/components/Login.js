import React, { useState } from "react";

// takes data and sends it to server to auth, see if valid and log them in f
const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            onLogin(data.token, data.username);
        } 
        catch (error) {
            console.error('There was a problem with the login request:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            
            
            
            <input 
            type='text'
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;
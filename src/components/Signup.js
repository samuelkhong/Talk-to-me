import React, { useState } from "react";

// takes data and sends it to server to auth, see if valid and log them in f
const SignupForm = ({onSignup}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            onSignup(data.token, data.username);
        } 
        catch (error) {
            console.error('There was a problem with the registration request:', error);
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
            <input 
            type='text'
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default SignupForm;
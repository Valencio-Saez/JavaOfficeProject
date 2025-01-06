import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/v1/Login/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // const data = await response.json();
                // Store session token and role
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('role', username === 'admin1' ? 'admin1' : 'Aicon');

                // Redirect based on role
                if (username === 'admin1') {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

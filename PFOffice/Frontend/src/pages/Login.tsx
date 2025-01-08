import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../../wwwroot/css/site.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [alertShown, setAlertShown] = useState(false); // Prevent multiple alerts
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Extract error message from query parameters
        const queryParams = new URLSearchParams(location.search);
        const errorMessage = queryParams.get('error');

        if (errorMessage && !alertShown) {
            alert(decodeURIComponent(errorMessage)); // Show the alert
            setAlertShown(true); // Mark alert as shown
            setError(decodeURIComponent(errorMessage)); // Optional: Set the error state

            // Remove the query parameter from the URL
            const newSearchParams = new URLSearchParams(location.search);
            newSearchParams.delete('error');
            navigate({
                pathname: location.pathname,
                search: newSearchParams.toString(),
            }, { replace: true }); // Replace history to prevent re-triggering
        }
    }, [location, alertShown, navigate]);

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
                const data = await response.json();
                // localStorage.setItem('token', data.token);
                // localStorage.setItem('userId', data.UserId);
                // localStorage.setItem('username', data.UserName);
                if (username === 'admin1') {
                    navigate('/admin');
                } else {
                    navigate('/user');
                }
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
        }
    };


    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button type="button" onClick={() => navigate('/register')}>Go to register page</button>
            <div>
                <button type="button" onClick={() => navigate('/')}>Home</button>
            </div>
        </div >
    );
};

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AccessibilityOptions from './AccessibilityOptions';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const goToUserPastEvents = () => {
    navigate('/UserPastEvents');
  };

  return (
    <div>
      <h1>Welcome to the Office Management System</h1>
      <button onClick={goToLogin}>Log In</button>
      <button onClick={goToRegister}>Register</button>
      <AccessibilityOptions />
    </div>
  );
};

export default Home;
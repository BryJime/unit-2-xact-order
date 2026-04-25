import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginDisplay = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const hardcodedUsername = 'admin';
  const hardcodedPassword = 'password123';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setErrorMessage('');
      navigate('/AddExam.jsx'); 
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginDisplay;
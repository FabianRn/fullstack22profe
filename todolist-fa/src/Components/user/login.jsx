import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-container">
      {/* Background animated shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <div className="login-glass-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to access your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder=" "
            />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="input-group">
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="#forgot" className="forgot-password">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className={`login-button ${isHovered ? 'glow' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <a href="#signup">Create one now</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

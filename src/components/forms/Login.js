import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import '../../styles/components/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      // You could show an error message here
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="particles-bg"></div>
      <div className="login-overlay">
        <div className="login-form">
          <div className="login-header">
            <div className="logo-container">
              <div className="logo">⚓</div>
            </div>
            <p>Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="email">
                <span className="icon">📧</span>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className={formData.email ? 'has-value' : ''}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">
                <span className="icon">🔒</span>
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className={formData.password ? 'has-value' : ''}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>
            
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              className={`login-btn ${loading ? 'loading' : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className="loading-spinner"></span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
          
          <div className="login-footer">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../src/assets/logo.svg';
import { useEffect } from 'react';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
  
      // ✅ Save login session in localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
  
      alert('✅ Login successful!');
      navigate('/dashboard');
    } catch (err) {
      alert(`❌ ${err.message}`);
    }
    useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) navigate('/dashboard');
    }, []);
  };

  
  return (
    <div className="login-card">
      <img src={logo} alt="Logo" className="logo" />
      <h2 className="heading">Sign in to your account</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="input"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="link">Forgot password?</a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="input"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn">Sign in</button>
      </form>

      <p className="footer-text">
        Don't have an account? <a href="/register" className="link">Register here</a>
      </p>
    </div>
  );
}

export default Login;

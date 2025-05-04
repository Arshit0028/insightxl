import React from 'react'
import logo from '../src/assets/logo.svg'

function Login() {
  return (
    <div className="login-card">
    <img src={logo} alt="Logo" className="logo" />
    <h2 className="heading">Sign in to your account</h2>
  
    <form className="space-y-5">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input id="email" name="email" type="email" required className="input" />
      </div>
  
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <a href="#" className="link">Forgot password?</a>
        </div>
        <input id="password" name="password" type="password" required className="input" />
      </div>
  
      <button type="submit" className="btn">Sign in</button>
    </form>
  
    <p className="footer-text">
      Don't have an account? <a href="#" className="link">Register here</a>
    </p>
  </div>
  
    )
  }
export default Login
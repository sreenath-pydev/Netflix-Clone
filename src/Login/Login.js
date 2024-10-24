import React, { useState } from 'react';
import './Login.css'; 
import { signup, login } from '../Firebase/Firebase';
import spinner_loading from './Images/loading.gif'
export default function Login() {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signState, setSignState] = useState('Sign In');
  const [userName, setUserName] = useState('');
  const [loading,setLoading] = useState(false)

  // Function to switch between Sign Up and Sign In
  const UserAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === 'Sign In') {
      await login(email, password);
    } else {
      await signup(userName, email, password);
    }
    setLoading(false);
  };

  return (
    // Conditional rendering for loading
    loading? <div className="spinner-loading">
      <img src={spinner_loading} alt="Loading..." />
      </div>:
    <div className="login-container">
      {/* Logo Section */}
      <div className="row logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
        />
      </div>
      
      {/* Login Form Section */}
      <div className='login'>
        <h1>{signState}</h1>
        <form className="login-form" >
          {/* Conditional rendering for Sign Up */}
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            /> 
          )}
          <input
            type="email"
            placeholder="Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={UserAuth} type="submit">{signState === 'Sign In' ? 'Sign In' : 'Sign Up'}</button>
          
          {signState === 'Sign In' && <p>OR</p>}
          
          {signState === 'Sign In' && (
            <button className='login-with-code' type="button">Using a sign-in code</button>
          )}
          
          <span >{signState === 'Sign In' && 'Forgot password?'}</span>
          
          {/* Remember Me Checkbox */}
          <div className='remember-me'>
            <input className='checkBox' type='checkbox' />
            <p>Remember me</p>
          </div>

          {/* Switch between Sign In and Sign Up */}
          {signState === 'Sign In' ? (
            <p className='set-sign'>New to Netflix? 
              <span onClick={() => setSignState('Sign Up')}> Sign up now.</span>
            </p>
          ) : (
            <p className='set-sign'>Already have an account?
              <span onClick={() => setSignState('Sign In')}> Sign in now.</span>
            </p>
          )}
        </form>
      </div>

      {/* Footer Section */}
      <div className="login-footer">
        <p className='footer-text'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. 
          <span> Learn more.</span>
        </p>
        <p>Questions? Call <span>000-800-040-1843</span></p>

        {/* Footer Links */}
        <ul className="footer-links">
          {['FAQ', 'Help Center', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information'].map(link => (
            <li key={link}><span>{link}</span></li>
          ))}
        </ul>

        {/* Language Selector */}
        <div className="language-selector">
          <select name="language" id="language">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </div>

        {/* Country Information */}
        <p className="footer-country">Netflix India</p>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import './Login.css'; 

export default function Login() {
  // State variables for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [signState, setSignState] = useState('Sign In');
  const [userName, setUserName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('User Name:', userName);
  };

  return (
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
        <form className="login-form" onSubmit={handleSubmit}>
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
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Mobile number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            /> 
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{signState === 'Sign In' ? 'Sign In' : 'Sign Up'}</button>
          
          {signState === 'Sign In' && <p>OR</p>}
          
          {signState === 'Sign In' && (
            <button className='login-with-code' type="button">Using a sign-in code</button>
          )}
          
          <a href="#">{signState === 'Sign In' && 'Forgot password?'}</a>
          
          {/* Remember Me Checkbox */}
          <div className='remember-me'>
            <input className='checkBox' type='checkbox' />
            <p>Remember me</p>
          </div>

          {/* Switch between Sign In and Sign Up */}
          {signState === 'Sign In' ? (
            <p className='set-sign'>New to Netflix? 
              <a onClick={() => setSignState('Sign Up')}> Sign up now.</a>
            </p>
          ) : (
            <p className='set-sign'>Already have an account?
              <a onClick={() => setSignState('Sign In')}> Sign in now.</a>
            </p>
          )}
        </form>
      </div>

      {/* Footer Section */}
      <div className="login-footer">
        <p className='footer-text'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. 
          <a href="#"> Learn more.</a>
        </p>
        <p>Questions? Call <a href="tel:000-800-040-1843">000-800-040-1843</a></p>

        {/* Footer Links */}
        <ul className="footer-links">
          {['FAQ', 'Help Center', 'Terms of Use', 'Privacy', 'Cookie Preferences', 'Corporate Information'].map(link => (
            <li key={link}><a href="#">{link}</a></li>
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
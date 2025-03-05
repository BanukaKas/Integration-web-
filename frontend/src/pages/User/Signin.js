import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInImg from '../../assets/signInImg.jpeg';
import SignInImgPhone from '../../assets/signInImgPhone.png';
import logo from '../../assets/logo.png';
import PageCorner from '../../assets/pageCorner.png';
import or from '../../assets/or.png';
import google from '../../assets/google.png';
import '../../css/User/signin.css';

// Define API Base URL
const API_BASE_URL = 'http://localhost:7000/api/user';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirect user if already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  // Handle Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token); // Save token
        toast.success('Login Successful!', { position: 'top-right' });
        navigate('/'); // Redirect immediately
      } else {
        setError(data.message || 'Login failed');
        toast.error(data.message || 'Login failed', { position: 'top-right' });
      }
    } catch (err) {
      setError('Server error, please try again later.');
      toast.error('Server error, please try again later.', { position: 'top-right' });
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async (response) => {
    setError('');
    const token = response.credential;

    try {
      const res = await fetch(`${API_BASE_URL}/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token); // Save token
        localStorage.setItem("email", response.data.email);
        toast.success('Google Login Successful!', { position: 'top-right' });
        navigate('/'); // Redirect immediately
      } else {
        setError(data.message || 'Google login failed');
        toast.error(data.message || 'Google login failed', { position: 'top-right' });
      }
    } catch (err) {
      setError('Server error, please try again later.');
      toast.error('Server error, please try again later.', { position: 'top-right' });
    }
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className='container'>
        <div className='epwsk-left'>
          <img src={SignInImg} alt='Sign In' className='epwsk-sign-in-img epwsk-desktop' />
          <img src={SignInImgPhone} alt='Sign In' className='epwsk-sign-in-img epwsk-mobile' />
        </div>

        <div className='epwsk-right'>
          <img src={logo} alt='Logo' className='epwsk-logo' />
          <img src={PageCorner} alt='Design' className='epwsk-corner-design' />
          <div className='epwsk-form-container'>
            <h2 className='epwsk-desktop-only'>Sign In</h2>
            {error && <p className='error-message'>{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type='email'
                placeholder='Email'
                required
                className='epwsk-input-field'
                autoComplete='off'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                required
                className='epwsk-input-field'
                autoComplete='new-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='epwsk-forgot-password'>
                <Link to='/forgotpassword' className='epwsk-forgot-password-link'>Forgot password?</Link>
              </p>
              <button type='submit' className='epwsk-btn-signin'>Sign In</button>
              <img src={or} alt='or' className='epwsk-or-divider' />
              <GoogleLogin onSuccess={handleGoogleLogin} onError={() => toast.error('Google login failed', { position: 'top-right' })} />
              <p className='epwsk-signup-text'>Don't have an account?</p>
              <button type='button' className='epwsk-btn-signup'>
                <Link to='/user-signup' className='epwsk-link-signup'>Sign Up</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignIn;

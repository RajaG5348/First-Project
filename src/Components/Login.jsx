import { Link } from "react-router-dom";
import "../Styles/Login.css";
// import Avatar from '../../Assets/Images/images.jpg'
import React from 'react';

const Login = () => {
  return (
   <div className="Login-box">
      {/* <img src={Avatar} alt="img" /> */}
      <h3>Welcome Back!</h3>
      <p>Login to continue</p>
      <label htmlFor="text">Username or Email</label>
      <input type="text" required placeholder="Username or Email" />
      <label htmlFor="password">Passwrod</label>
      <input
        type="password"
        required
        minLength={8}
        maxLength={15}
        placeholder="Enter your password"
      />
      <button type="submit">Log in</button>
      <Link to="/myhome/fwd" className="link">
        Forgot password
      </Link>
      <Link to="/myhome/sign-up" className="link">
        Sign up
      </Link>
    </div>
  );
}

export default Login;


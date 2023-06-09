import { Link } from "react-router-dom";
import "../Styles/Signup.css";

function Register() {
  return (
    <div className="signup-box">
      <h2>Create account</h2>
      <div className="signup-links">
        <Link to="./home">
          <i className="bi bi-linkedin"></i>
        </Link>
        <Link to="./home">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link to="./home">
          <i className="bi bi-google"></i>
        </Link>
        <Link to="./home">
          <i className="bi bi-apple"></i>
        </Link>
      </div>
      <p> or use your email for registration :</p>
      <div className="input-box">
        <i className="bi bi-person"></i>
        <input type="text" placeholder="Enter Your Name" required />
      </div>
      <div className="input-box">
        <i className="bi bi-envelope"></i>
        <input type="email" placeholder="Enter Your Email" required />
      </div>
      <div className="input-box">
        <i className="bi bi-key"></i>
        <input type="password" placeholder="Enter Your Password" required />
      </div>
      <button>Sign up</button>

      <Link to="/myhome/sign-in" className="rgd">
      
        Already a member? <span>Sign in</span>
      </Link>
    </div>
  );
}

function Forgotpassword() {
  return (
    <div className="Fwd-box">
      <i className="bi bi-key"></i>
      <h2>Forgot Password ?</h2>
      <p>No worries, we'll send you reset instructions</p>
      <label htmlFor="email">Email</label>
      <input type="email" required placeholder="Enter your Email" />
      <button type="button">Reset password</button>
      <div className="fgd">
        <i className="bi bi-box-arrow-in-left"></i>
        <Link to="/myhome/sign-in" className="fga">          
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export { Register, Forgotpassword };

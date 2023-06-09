import React from "react";
import Logo from "../Assets/Images/Footer Logo.png";
import play from "../Assets/Images/app-logo2.png";
import { Link } from "react-router-dom";
import "../Styles/Footer.css"


const Footer = () => {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col col-1">
            <img src={Logo} alt="img" className="logo" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="col col-2">
            <h3 className="underline">Office</h3>
            <p>ECR Beach Road</p>
            <p>Thiruvanmiyur, Chennai</p>
            <p>TamilNadu, PIN 600041, India</p>
            <p className="email-id"> Official@Outlook.com</p>
            <h5>+91 - 0123456789</h5>
          </div>
          <div className="col col-3">
            <h3 className="underline">For Restaurants</h3>
            <ul>
              <li>
                <Link to="#">partner With Us</Link>
              </li>
              <li>
                <Link to="#">Apps For You</Link>
              </li>

              <h4 className="underline">Legal</h4>
              <li>
                <Link to="#">Privacy policy</Link>
              </li>
              <li>
                <Link to="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col col-4">
            <h3 className="underline">Learn More</h3>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">privacy</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
              <li>
                <Link to="#">Terms & Contitions</Link>
              </li>
              <li>
                <Link to="#">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="col col-5">
            <h3 className="underline">Newsletter</h3>
            <form>
              <i className="bi bi-envelope"></i>
              <input type="email" placeholder="enter your email" required />
              <button type="submit">
                <i className="bi bi-arrow-right"></i>
              </button>
            </form>

            <div className="social-icons">
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-whatsapp"></i>
            </div>

            <div className="app">
              <img src={play} alt="img" />
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">
          Copyright -2023. website made by <span>Raja Ganesan.</span> All Rights
          Reserved .
        </p>
      </footer>
    );
}

export default Footer;

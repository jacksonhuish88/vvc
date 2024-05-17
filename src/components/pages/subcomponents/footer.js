import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/logo.PNG";
import './css/footer.css'; // Assuming you have a custom CSS file for footer-specific styles

const Footer = () => {
  return (
    <footer className="footer bg-light">      
      <div className="container">
        <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center flex-column flex-md-row text-center text-md-left">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '100px', marginRight: '20px' }} />
            <p>
              At VVG, we're dedicated to turn every moment into a joyful memory, supporting recovery through play and companionship.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h5>More Info</h5>
            <ul className="list-unstyled">
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/#contact-us">Contact Us</Link></li>
              <li><a href="mailto:test@test.com">test@test.com</a></li>  {/* Keep mailto as an <a> tag */}
            </ul>
          </div>
        </div>
        <div className="last-row">
        <p>© Establish 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/logo.PNG';
import './css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <img src={Logo} alt="Logo" className="navbar-logo"/>
        <Link className="navbar-brand" to="/">Virtual Visits Gaming</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <HashLink className="nav-link" to="/#contact-us">Contact</HashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Header.css';

const logo = require('./4FIT_logo.png');
const profile = require('./profile.png');

function Header() {


  return (

    <div className="Header">

      <nav className="navbar">

        {/* Logo */}

        <img
          className="navbar-logo"
          src={logo}
          alt="Website Logo"
        />
        

        {/* <!-- Menu --> */}

        <div className="navbar-menu">
          <a href="#">Home</a>
          <a href="#">News</a>
          <a href="#">Products</a>
          <a href="#">Community</a>
          <a href="#">Contact</a>
        </div>

        {/* <!-- Profile --> */}

        <img
          className="navbar-profile"
          src={profile}
          alt="Profile picture"
        />
      </nav>

    </div>
  );
}

export default Header;

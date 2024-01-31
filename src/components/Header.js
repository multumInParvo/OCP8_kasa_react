// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoheader.png';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div>
        <img src={logo} alt="Logo header" />
      </div>
      <nav>
        <Link to="/" className={location.pathname === "/" ? 'nav-links active' : 'nav-links'}>Accueil</Link>
        <Link to="/about" className={location.pathname === "/about" ? 'nav-links active' : 'nav-links'}>A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;

// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoheader.png';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <img className='header-logo' src={logo} alt="Logo header" />
      <nav>
        <Link to="/" className={location.pathname === "/" ? 'nav-links active uppercase' : 'nav-links uppercase'}>Accueil</Link>
        <Link to="/about" className={location.pathname === "/about" ? 'nav-links active uppercase' : 'nav-links uppercase'}>A Propos</Link>
      </nav>
    </header>
  );
};

export default Header;

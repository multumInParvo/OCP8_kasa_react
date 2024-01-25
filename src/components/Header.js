// Header.js
import React from 'react';
import logo from '../assets/logoheader.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo header" />
      </div>
      <nav>
          <a className='nav-links' href="/">Accueil</a>
          <a className='nav-links' href="/About">A Propos</a>
      </nav>
    </header>
  );
};

export default Header;

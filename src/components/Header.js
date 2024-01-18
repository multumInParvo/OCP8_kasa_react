// Header.js
import React from 'react';
import logo from '../assets/logoheader.png';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo header" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">A Propos</a></li>
          {/* to add navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

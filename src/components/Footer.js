// src/components/Footer.js
import React from 'react';
import logo from '../assets/logofooter.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo footer" />
      <p className='footer-text'>© 2024 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

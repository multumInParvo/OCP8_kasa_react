// src/pages/404.js
import React from 'react';
import '../styles/404.css';

function NotFoundPage() {
  return (
    <div className='not-found-container'>
      <h1 className='not-found-title'>404</h1>
      <h2 className='not-found-description'>Oups! La page que vous demandez n'existe pas.</h2>
      <a className='return-home-button' href='#'>Retourner sur la page d’accueil</a>
    </div>
  );
}

export default NotFoundPage;

// src/components/Card.js
import React from 'react';
import '../styles/Card.css';

const Card = ({ appartment }) => {
    const { cover, title } = appartment

    return (
        <div>
          <img className='card' src={cover} alt={title} />
          <h2 className='card-title'>{title}</h2>
        </div>
      );
    };

export default Card;
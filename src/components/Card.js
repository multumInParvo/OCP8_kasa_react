// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ appartment }) => {
    const { cover, title,id } = appartment

    return (
        <div>
          <Link to={`/housing/${id}`}>
          <img className='card' src={cover} alt={title} />
          <h2 className='card-title'>{title}</h2>
          </Link>
        </div>
      );
    };

export default Card;
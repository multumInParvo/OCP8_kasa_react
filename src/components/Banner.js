// src/components/Banner.js
import React from 'react';
import '../styles/Banner.css';

function Banner({ imageSrc, altText }) {
    return (
        <div className='banner-container'>
            <img className='banner' src={imageSrc} alt={altText} />
        </div>
    );
}

export default Banner;
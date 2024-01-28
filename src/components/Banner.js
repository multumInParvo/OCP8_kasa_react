// src/components/Banner.js
import React from 'react';
import '../styles/Banner.css';

function Banner({ imageSrc, altText, showTitle }) {
    return (
        <div className='banner-container'>
            <img className='banner' src={imageSrc} alt={altText} />
            {showTitle && <h2 className='banner-title'>Chez vous, partout et ailleurs</h2>}
        </div>
    );
}

export default Banner;
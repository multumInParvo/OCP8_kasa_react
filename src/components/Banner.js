// src/components/Banner.js
import React from 'react';

function Banner({ imageSrc, altText }) {
    return (
        <div>
            <img src={imageSrc} alt={altText} />
        </div>
    );
}

export default Banner;
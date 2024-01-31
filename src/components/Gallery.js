// Gallery.js
import React, { useState } from 'react';
import '../styles/Gallery.css';
import arrowBack from '../assets/arrow_back.png';
import arrowForward from '../assets/arrow_forward.png';

const Gallery = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <img
        src={arrowBack}
        alt="Previous"
        className="arrow-button-back"
        onClick={previousImage}
      />
      <img
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="gallery-image"
      />
      <img
        src={arrowForward}
        alt="Next"
        className="arrow-button-forward"
        onClick={nextImage}
      />
    </div>
  );
};

export default Gallery;

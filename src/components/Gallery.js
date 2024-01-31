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
      {pictures.length > 1 && (
      <img
        src={arrowBack}
        alt="Previous"
        className="arrow-button-back"
        onClick={previousImage}
      />
      )}
      <img
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="gallery-image"
      />
      {pictures.length > 1 && (
      <img
        src={arrowForward}
        alt="Next"
        className="arrow-button-forward"
        onClick={nextImage}
      />
      )}
      {pictures.length > 1 && (
      <p className="image-counter">{`${currentImageIndex + 1}/${pictures.length}`}</p>
      )}
    </div>
  );
};

export default Gallery;

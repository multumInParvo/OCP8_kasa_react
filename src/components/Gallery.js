// Gallery.js
import React, { useState } from 'react';
import '../styles/Gallery.css';

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
      <button onClick={previousImage}>Previous</button>
      <img
        src={pictures[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="gallery-image"
      />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Gallery;

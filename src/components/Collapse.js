// src/components/Collapse.js
import React, { useState } from 'react';
import '../styles/Collapse.css';

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-item">
      <div className="collapse-header" onClick={toggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className={`collapse-icon ${isOpen ? 'open' : ''}`}>
        <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'show' : ''}`}>
        <div className="collapse-description">{description}</div>
      </div>
    </div>
  );
};

export default Collapse;
// src/pages/Housing.js
import React from 'react';
import '../styles/Housing.css';
import AppartmentsData from '../data/appartments.json';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';

const Housing = () => {
  const { id } = useParams();
  const appartment = AppartmentsData.find(item => item.id === id);

  if (!appartment) {

    return <div>Appartment not found</div>;
  }

  return (
    <div>
      <Gallery pictures={appartment.pictures} />
      <h1 className='housing-title'>{appartment.title}</h1>
      <h2 className='housing-location'>{appartment.location}</h2>
      <div className='tags-container'>
        {appartment.tags.map((tag, index) => (
          <span key={index} className='tag'>{tag}</span>
        ))}
      </div>
      <div className='housing-collapse-component-structure'>
        <Collapse title="Description" description={appartment.description} />
        <Collapse title="Équipements" description={appartment.equipments.map((equipment, index) => (
          <p key={index} className='equipment'>{equipment}</p>
        ))} />
      </div>

    </div>
  );
}

export default Housing;
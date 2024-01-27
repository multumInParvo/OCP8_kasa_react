// src/pages/Housing.js
import React from 'react';
import AppartmentsData from '../data/appartments.json';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';

const Housing = () => {
    const { id } = useParams(); 
    const appartment = AppartmentsData.find(item => item.id === id);

    if (!appartment) {

        return <div>Appartment not found</div>;
      }
    
    return (
      <div>
        <Gallery pictures={appartment.pictures} />
        <h1>{appartment.title}</h1> 
        <h2>{appartment.location}</h2> 
      </div>
    );
  }
  
export default Housing;
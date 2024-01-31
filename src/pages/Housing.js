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

  // Function to render star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // Determine the color based on the rating
      const starColor = i < rating ? '#FF6060' : '#E3E3E3';
      stars.push(<i key={i} className="fa-solid fa-star" style={{ color: starColor }}></i>);
    }
    return stars;
  };

  // Split the hosts full name into separate parts
  const [firstName, lastName] = appartment.host.name.split(' ');

  return (
    <div className='main-content'>
      <Gallery pictures={appartment.pictures} />

      <div className='housing-host-info'>
        <div className='housing-info'>
          <h1 className='housing-title'>{appartment.title}</h1>
          <h2 className='housing-location'>{appartment.location}</h2>
          <div className='housing-tags-container'>
            {appartment.tags.map((tag, index) => (
              <span key={index} className='tag'>{tag}</span>
            ))}
          </div>
        </div>

        <div className='host-info-rating'>
          <div className='host-container'>
            <div className='host-name-lastname'>
              <p className='host-name'>{firstName}</p>
              <p className='host-name'>{lastName}</p>
            </div>
            <img src={appartment.host.picture} alt={appartment.host.name} className='host-picture' />
          </div >

          <div className="rating-stars">
            {renderStars(parseInt(appartment.rating))}
          </div>
        </div>
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
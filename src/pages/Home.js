// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner';
import MainBanner from '../assets/MainBanner.png';
import Card from '../components/Card';
import AppartmentsData from '../data/appartments.json';

const Home = () => {

  return (
    <div>
      <Banner imageSrc={MainBanner} altText='seaside and green cliffs' />

      <div className="card-container">
        {AppartmentsData.map((appartment) => (
          <Card key={appartment.id} appartment={appartment} />
        ))}
      </div>
    </div>
  );
}

export default Home;

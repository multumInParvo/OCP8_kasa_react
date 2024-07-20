// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import Banner from '../components/Banner';
import HomeBanner from '../assets/MainBanner.png';
import Card from '../components/Card';
import AppartmentsData from '../data/appartments.json';

const Home = () => {

  return (
    <div>
      <Banner imageSrc={HomeBanner} altText='seaside and green cliffs' showTitle={true} />

      <div className="home-housing-structure">
        {AppartmentsData.map((appartment) => (
          <Card key={appartment.id} appartment={appartment} />
        ))}
      </div>
    </div>
  );
}

export default Home;

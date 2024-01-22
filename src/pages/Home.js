// src/pages/Home.js
import React from 'react';
import Banner from '../components/Banner'; 
import MainBanner from '../assets/MainBanner.png';

function Home() {
  return (
    <div>
      <Banner imageSrc={MainBanner} altText='main banner' />
    </div>
  );
}

export default Home;

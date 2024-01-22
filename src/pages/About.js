// src/pages/AboutPage.js
import React from 'react';
import Banner from '../components/Banner';
import SecondaryBanner from '../assets/SecondaryBanner.png';

function AboutPage() {
  return (
    <div>
      <Banner imageSrc={SecondaryBanner} altText='secondary banner'/>
    </div>
  );
}

export default AboutPage;

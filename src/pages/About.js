// src/pages/About.js
import React from 'react';
import Banner from '../components/Banner';
import SecondaryBanner from '../assets/SecondaryBanner.png';
import Collapse from '../components/Collapse';
import collapseComponentData from '../data/collapseComponentData.json';

function About() {
  return (
    <div>
      <Banner imageSrc={SecondaryBanner} altText='secondary banner'/>

      <div>
      {collapseComponentData.map(item => (
        <Collapse key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
    </div>
  );
}

export default About;

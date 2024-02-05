// src/pages/About.js
import React from 'react';
import '../styles/About.css';
import Banner from '../components/Banner';
import AboutBanner from '../assets/SecondaryBanner.png';
import Collapse from '../components/Collapse';
import collapseComponentData from '../data/collapseComponentData.json';

function About() {
  return (
    <div>
      <Banner imageSrc={AboutBanner} altText='blue mountains and trees' />
      <div className='collapse-component-structure'>
        {collapseComponentData.map(item => (
          <Collapse key={item.id} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default About;

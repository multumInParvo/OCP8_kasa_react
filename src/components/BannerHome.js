// src/components/BannerHome.js
import React from 'react';
import MainBanner from '../assets/MainBanner.png';

function BannerHome() {
    return (
        <div>
            <img src={MainBanner} alt="main banner"/>
        </div>
    );
}

export default BannerHome;
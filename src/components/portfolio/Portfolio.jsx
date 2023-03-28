import React from 'react';
import bgvideo from '../../assets/bgvideo.mp4';
import { Header } from '../../containers';
import CarouselSlides from '../carousel_slides/CarouselSlides';
import './portfolio.css';

function Portfolio() {
    return (
        <div>
            <Header />
            {/*  TO DO Fix vertical height begining of title */}
            <video autoPlay muted loop src={bgvideo} type="video/mp4" id="homepage-background" />
            <CarouselSlides />
        </div>
    );
}

export default Portfolio;
import React from 'react';
import bgvideo from '../../assets/bgvideo.mp4';
import { Header } from '../../containers';
import CarouselSlides from '../carousel_slides/CarouselSlides';
import './portfolio.css';
import '../../App.css'

function Portfolio() {
    return (
    <div id="page-wrapper">
        <Header />
        <div id="portfolio-page-parent-content">
            <h1 className='self-align-center'>Portfolio</h1>
            <video autoPlay muted loop playsinline src={bgvideo} type="video/mp4" id="homepage-background" />

            <CarouselSlides />
        </div>
    </div>
    );
}

export default Portfolio;
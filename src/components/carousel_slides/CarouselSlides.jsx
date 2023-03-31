import React, { useEffect } from 'react';
import { Header } from '../../containers';
import './carouselSlides.css';
import '../main/main.css';
import blankautophoto from '../../assets/blankautophoto.png';
import graycode from '../../assets/graycode.jpg';
import lwgrayart from '../../assets/lwgrayart.png';
import pickapump from '../../assets/pickapump.png';
import wizardingwords from '../../assets/wizardingwords.png';
import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const websites = [
    {
        title: 'L.W.Gray Art',
        url: 'https://lwgrayart.com',
        image: lwgrayart,
        info: 'A website I made for a family member which includes an image gallery, contact form and personal information to help display his work and allow potential customers to order commissioned personal artworks.',
    },
    {
        title: 'Blank Auto Photo',
        url: 'https://blankautophoto.ie',
        image: blankautophoto,
        info: 'An automotive photography blog created for a friend. This website is wordpress based but has had extensive custom styling to give the owner his desired look.',
    },
    {
        title: 'Pick a Pump',
        url: 'https://pickapump.com',
        image: pickapump,
        info: 'Pick a Pump is a start-up app, this site is a business landing page to display different features and potential business opportunities, includes custom contact form and FAQs for potential clients and investors.',
    },
    {
        title: 'Wizarding Words',
        url: 'https://wizardingwords.portkey.uk',
        image: wizardingwords,
        info: 'Wizarding Words is a fun Harry Potter quote generator written in React JS, it uses a Harry Potter quote API that I previously created using Python Flask.',
    },
    {
        title: 'Graycode',
        url: 'https://graycode.ie',
        image: graycode,
        info: 'A small personal technology blog, this was the first website I made while in university. Created so I could share my interest and knowledge of web development, programming and engineering.',
    },
];

const CarouselSlides = () => {
    Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

    useEffect(() => {
        new Swiper('#swiper-container', {
            slidesPerView: 'auto',
            loop: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 50,
                stretch: -50,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <div id="page-wrapper">
            <Header />
            <div id="page-parent-content" className='page-parent-content'>
                <h1>Previous Work</h1>
                        <div id="swiper-container" className="swiper-container">
                            <div className="swiper-wrapper">
                                {websites.map((website, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <div className="slide-row">
                                            <div className="image-container">
                                                <img className="centered" src={website.image} alt={website.title} />
                                            </div>
                                            <div className="borderright"></div>
                                            <div className="content-container">
                                                <a href={website.url}>
                                                    {' '}
                                                    <h3 className="centered">{website.title}</h3>{' '}
                                                </a>
                                                <p className="centered">{website.info}</p>{' '}
                                                <a className="links" href={website.url}>
                                                    <button type="button">Check It Out</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
    );
};

export default CarouselSlides;

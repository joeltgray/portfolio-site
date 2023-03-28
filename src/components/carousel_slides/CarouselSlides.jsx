import React, { useEffect } from 'react';
import './carouselSlides.css'
import '../main/main.css'
import blankautophoto from '../../assets/blankautophoto.png'
import graycode from '../../assets/graycode.jpg'
import lwgrayart from '../../assets/lwgrayart.png'
import pickapump from '../../assets/pickapump.png'
import wizardingwords from '../../assets/wizardingwords.png'
import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const websites = [
    { title: 'L.W.Gray Art', url: 'https://lwgrayart.com', image: lwgrayart, info: "A website I made for a family member which includes an image gallery, contact form and personal information to help display his work and allow potential customers to order commissioned personal artworks."},
    { title: 'Blank Auto Photo', url: 'https://blankautophoto.ie', image: blankautophoto, info: "An automotive photography blog I made for a friend. This website is wordpressed based but has had extensive custom styling to give the owner his desired look."},
    { title: 'Pick a Pump', url: 'https://pickapump.com', image: pickapump, info: "Pick a Pump is an app start up landing page I made, to display different features and potential business opportunities, includes custom contact form and FAQs for potential clients and investors."},
    { title: 'Wizarding Words', url: 'https://wizardingwords.portkey.uk', image: wizardingwords, info: "Wizarding Words is a fun web wrapper written in React JS for a Harry Potter quote API that I previously created."},
    { title: 'Graycode', url: 'https://graycode.ie', image: graycode, info: "A small personal technology blog, this was the first website I made while in university. Created so I could share my interest and knowledge of web development, programming and engineering."},
];


const CarouselSlides = () => {

    Swiper.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

    useEffect(() => {
        new Swiper('#swiper-container', {
          slidesPerView: "auto",
          loop: true,
          effect: "coverflow",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: true
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });
      }, []);
    

    return (
    <div id="page-wrapper">
        <div id="page-content">
            <div className="content --centered">
                <div className='row centered'>
                    <h1 >Completed Projects</h1>
                        <div id="swiper-container" className="swiper-container">
                            <div className="swiper-wrapper">
                                    {websites.map((website, index) => (
                                        <div className='swiper-slide' key={index}> 
                                            <a  href={website.url}> <h2 className="centered">{website.title}</h2> </a>
                                            <img className="centered" src={website.image} alt={website.title} />
                                            <div className="row centered" style={{padding: "2%"}}> <p className="centered">{website.info}</p> <a className="links" href={website.url}>View the site</a></div>
                                        </div>
                                    ))}
                                    
                            </div>
                            <div className="swiper-pagination row centered"></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CarouselSlides;

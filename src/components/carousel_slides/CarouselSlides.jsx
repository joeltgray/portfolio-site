import React, { useEffect } from 'react';
import './carouselSlides.css';
import '../main/main.css';
import '../../App.css';
import blankautophoto from '../../assets/blankautophoto.png';
import graycode from '../../assets/graycode.jpg';
import lwgrayart from '../../assets/lwgrayart.png';
import pickapump from '../../assets/pickapump.png';
import wizardingwords from '../../assets/wizardingwords.png';
import Swiper, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const githubProjects = [
    {
        title: 'Odoo K8s',
        description: 'A repo for building Odoo Community from source and deploying with microK8s on Linux.',
        language: 'Shell',
        url: 'https://github.com/joeltgray/odooK8s',
        image: 'https://www.odoo.com/web/image/website/1/social_default_image?unique=5412cda'
    },
    {
        title: 'Harry Potter API',
        description: 'A rest API for retreiving Harry Potter quotes, users can GET a random quote or GET by UUID, this API was created using Python Flask and includes rating limiting.',
        language: 'Python (Flask)',
        url: 'https://github.com/joeltgray/HarryPotterAPI',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png'
    },
    {
        title: 'AImaginary Creations',
        description: 'An Instagram bot that uses random words, to generate a prompt for Open AI\'s Dalle-2. It creates a unique AI image in the style of a specific artist or art movement, then posts it to an instagram account. @AImaginary_Creations',
        language: 'JavaScript',
        url: 'https://github.com/joeltgray/AImaginaryCreations',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/2560px-OpenAI_Logo.svg.png'
    },
    {
        title: 'Instagram Auto-follower',
        description: 'A repo that allows users to search a hashtag on their feed, grab the posters primary key which is used to identify their profile uniquely, check their following status and automatically follow...',
        language: 'JavaScript',
        url: 'https://github.com/joeltgray/InstagramAutofollower',
        image: 'https://adrienjoly.com/cours-javascript/js-logo.png'

    },
];


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
        <>

        <div className='portfolio-container'>        
        <h2 className='self-align-left mt--heavy'>Github Projects</h2>
        <p>Check out more on my<a href="https://github.com/joeltgray" target="_blank" rel="noopener noreferrer"> Github page</a></p>
  
                <div className="projects-container mt--heavy">
                    {githubProjects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer"><img src={project.image} alt={project.title} /></a>
                            <h3><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
                            <p>{project.description}</p>
                            <p>Language: {project.language}</p>
                        </div>
                    ))}
                </div>

                <div className="websites-container mt--super-heavy">
                    <h2>Web Development</h2>
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
                </>
    );
};

export default CarouselSlides;

import React from 'react';
import './pageNotFound.css';
import '../main/main.css';
import bgvideo from '../../assets/bgvideo.mp4';
import { Image } from '../Image/Image';
import desmondthemoonbear from '../../assets/desmondthemoonbear.jpg';
import { Header } from '../../containers';

function PageNotFound() {
    return (
        <div id="page-wrapper">
            <Header />
            <div id="page-content">
                <div className="fourofour content --centered">
                    <video autoPlay muted loop playsinline src={bgvideo} type="video/mp4" id="homepage-background" />

                    <h1>404 - How did you get here? </h1>
                    

                    <div className="desmond centered">
                        <h3 style={{padding: 10}}>You made Desmond sad</h3>
                        <Image url={desmondthemoonbear} isRounded={true} />
                    </div>

                    <a className="links singleButton" href={"/home"}>
                        <button type="button">Take Desmond Home</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;

import React from 'react';
import './main.css';
import bgvideo from '../../assets/bgvideo.mp4';
import pfp from '../../assets/pfp.jpeg';
import { Image } from '../Image/Image';
import { Footer } from "../../containers";
import { Header } from '../../containers';

function Main() {
    return (
        <div id="page-wrapper">
            <Header />
        <div id="page-content">
          <div className="content --centered">
            <div>
                <video autoPlay muted loop src={bgvideo} type="video/mp4" id="homepage-background" />
                <div className="profile-picture">
                    <Image url={pfp} isRounded={true} />
                </div>

                <h1 className="coming-soon centered mb">Joel Gray</h1>
                <p className="centered mb--heavy">Developer | Tinkerer | General wise guy</p>
                <div className="centered">
                    <h3 className="links mb--light">
                        <a href="https://graycode.ie" target="_blank" rel="noreferrer noopener">
                            Blog
                        </a>
                    </h3>
                    <h3 className="links mb--light">
                        <a href="https://github.com/joeltgray" target="_blank" rel="noreferrer noopener">
                            GitHub
                        </a>
                    </h3>
                    <h3 className="links mb--light">
                        <a href="/portfolio" target="_blank" rel="noreferrer noopener">
                        Portfolio
                        </a>
                    </h3>
                </div>
            </div>
            </div>
            <Footer />
            </div>
            </div>
    );
}

export default Main;

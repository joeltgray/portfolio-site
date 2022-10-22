import React from 'react';
import './main.css';
import bgvideo from '../../assets/bgvideo.mp4';
import { Image } from '../Image/Image';

function Main() {
    return (
        <div className="content --centered">
            <div>
                <video autoPlay muted loop src={bgvideo} type="video/mp4" id="homepage-background" />
                <div className="profile-picture">
                    <Image url="https://pbs.twimg.com/profile_images/1527616056847638530/IxU0Lc6b_400x400.jpg" isRounded={true} />
                </div>

                <h1 className="coming-soon centered mb">Joel Gray</h1>
                <p className="centered mb--heavy">Developer | Tinkerer | General wise guy</p>
                <div className="links centered">
                    <h3 className="mb--light">
                        <a href="mailto:joel@joelgray.work">Contact Me</a>
                    </h3>
                    <h3 className="mb--light">
                        <a href="https://github.com/joeltgray" target="_blank" rel="noreferrer noopener">
                            Checkout My GitHub
                        </a>
                    </h3>
                    <h3 className="mb--light">
                        <a href="https://graycode.ie" target="_blank" rel="noreferrer noopener">
                            Blog
                        </a>{' '}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Main;

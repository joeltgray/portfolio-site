import React from 'react';
import './main.css';
import bgvideo from '../../assets/bgvideo.mp4';

function Main() {
    return (
      <div className='main'>
          <video autoPlay muted loop src = { bgvideo } type="video/mp4" />
          <div className='content'>
            <img src={'https://pbs.twimg.com/profile_images/1527616056847638530/IxU0Lc6b_400x400.jpg'}/>
            <h1>Portfolio Coming Soon</h1>
            <p>Website is under construction, <a href="mailto:joel@joelgray.work">email me</a> in the meantime</p>
            <div className='links'>
              <h3><a href="mailto:joel@joelgray.work">Contact Me</a></h3>
              <h3><a href="https://github.com/joeltgray" target="_blank" rel="noreferrer noopener">Checkout My GitHub</a></h3>
              <h3><a href="https://graycode.ie" target="_blank" rel="noreferrer noopener">Electronics Website</a> </h3>
            </div>
          </div>
      </div>
    )
  }
  
  export default Main
import React from 'react';
import './header.css';
import bgvideo from '../../assets/bgvideo.mp4';

function Header() {
  return (
    <div className='header'>
        <video autoPlay muted loop src = { bgvideo } type="video/mp4" />

    </div>
  )
}

export default Header
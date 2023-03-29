import React from 'react';
import './header.css';
import '../../components/main/main.css'
import '../../App.css'
import logo from '../../assets/logo-nobg.png'

function Header() {
  return (
    <div className='header'>
        <div className='centerpls'>
          <a className='logo-link' href="/">
            <img className="logos" src={logo} alt="Site logo" />
          </a>
        </div>
        <div className="header-links">
        <ul>
          <ul>
            <a href="mailto:joel@joelgray.work">
              <h3 className='links'>Contact Me</h3>
            </a>  
          </ul>
          {/* <ul><h3 className='links'>Other</h3></ul> */}
        </ul>
          
        </div>
    </div>
  )
}

export default Header
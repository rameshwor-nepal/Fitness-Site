import React from 'react'
import './Footer.css'

import instragram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="blur footer-blur"></div>
        <div className='footer-img'>
            <div className='social-media-icon'>
                <img src= {instragram} alt="" />
                <img src= {linkedin} alt="" />
                <img src= {github} alt="" />
            </div>
            
            <img className='logo-img' src={logo} alt="" />
    </div>
    </div>
  )
}

export default Footer
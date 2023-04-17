import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'

const header = () => {
  return (
    <div className='main'>
        <div className='logo-div'>
                <img className='logo' src={ logo } />
        </div>

        <div className='menu-div'>
            <ul className='menubar'>
                <li>
                    Home
                </li>
                <li>
                    Programs
                </li>
                <li>
                    Testimonials
                </li>
                <li>
                    Contact
                </li>

            </ul>
            
        </div>
    </div>
  )
}

export default header
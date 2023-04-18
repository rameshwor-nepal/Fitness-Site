import React, { useState } from 'react'
import './Testimonial.css'
import rightarrow from '../../assets/rightArrow.png'
import leftarrow from '../../assets/leftArrow.png'
import tImage from '../../assets/t-image2.jpg'

import {testimonialsData} from '../../data/testimonialsData'

const Testimonial = () => {

    const [selected, setSelected ] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <section>
    <div className='testimonial-container'>
        <div className="testimonial-content">
            <p className="testimonial-subtitle">
                Testimonial
            </p>

            <p className="what-other-say">
               <span className='stroke-text'>What They</span>  Say About Us
            </p>

            <p className="their-saying-content">
                {testimonialsData[selected].review}
            </p>
            
            <div className='changing-arrow'>
                <p className="who-say">{testimonialsData[selected].name}<span> - {testimonialsData[selected].status}</span></p>
               
               <div className='changing-arrow-div'>

                 <img 

                onClick={() => {
                selected === 0 ? setSelected (tLength - 1)
                : setSelected((prev) => prev - 1);
                }}
                 
                src= {leftarrow} alt="" /> 
                
                <img
                
                onClick={() => {
                selected === tLength -1 ? setSelected (0)
                : setSelected((prev) => prev + 1);
                }}

                src= {rightarrow} alt="" />
            
               </div>
               

            </div> 

        </div>



        <div className="testimonial-picture">

            <div className="image-item">
                <span></span>
                <span className='span2'></span>
                <img className='timage' src= {testimonialsData[selected].image} alt="" />
            </div>                         
        </div>

       
    </div>

     <div>
            <hr className='hr-line'/>
            <div className='ready-to-join'>
                <div className="ready-to-join-heading">
                   <span className="stroke-text"> Ready to</span> level up your body <span className="stroke-text">with us?</span> 
                </div>

                <div className='sent-mail-div'>
                        <input type="text" placeholder='Enter your email address ' />
                        <button> Join Now</button>
                </div>

            </div>
        </div>
</section>
  )
}

export default Testimonial
import React from 'react'
import './Testimonial.css'
import rightarrow from '../../assets/rightArrow.png'
import leftarrow from '../../assets/leftArrow.png'
import tImage from '../../assets/t-image2.jpg'

const Testimonial = () => {
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
                This fitness place much helpful where all member are always ready to help and support 
            </p>
            
            <div className='changing-arrow'>
                <p className="who-say">Jelvin Pert<span> - Coach</span></p>
               
                <img src= {leftarrow} alt="" /> 
                <img src= {rightarrow} alt="" />

            </div>            
        </div>



        <div className="testimonial-picture">

            <div className="image-item">
                <span></span>
                <span className='span2'></span>
                <img className='timage' src= {tImage} alt="" />
            </div>                         
        </div>

       
    </div>

     <div>
            <hr className='hr-line'/>
            <div className='ready-to-join'>
                <div className="ready-to-join-heading">
                   <span className="stroke-text"> Ready to</span> level up your body <span className="stroke-text">with us?</span> 
                </div>

                <div className="sent-email">
                    <div>
                        <input type="text" />
                        <button> Join Now</button>
                    </div>
                </div>

            </div>
        </div>
</section>
  )
}

export default Testimonial
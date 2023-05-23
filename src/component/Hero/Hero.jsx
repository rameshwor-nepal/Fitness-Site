import React from 'react'
import hero_image from '../../assets/hero_image.png'
import hero_img_back from '../../assets/hero_image_back.png'
import Header from '../Header/Header'
import './hero.css'
import CountUp from 'react-countup';

const hero = () => {
  return (
    <div className='hero-container'>

        <div className='left-div'>
            <Header />
            <div className="blur hero-blur"></div>

            <div className='best-fitness-club'>
                <div></div>
                <span className='best-fitness'>The Best Fitness Club In The Town</span>
            </div>

            <div className="topic">
              <span className="stroke-text">Shape</span> Your Ideal Body
            </div>

            <div className="description">
              In here, we will help you to shape and build your ideal body and live up your life to fullest
            </div>

            <div className="members">

              <div className="member-category">
                 <span className='member-number'>
                      <CountUp end = {140} start = {100} delay = '0' prefix = '+' />
                 </span>
                 <span className='member-title'>
                     Coaching Staffs
                 </span>
              </div>

              <div className="member-category">
                 <span className='member-number'>
                    <CountUp end = {800} start = {650} delay = '0' prefix = '+' />
                 </span>
                 <span className='member-title'>
                      Joined Member                 
                </span>  
              </div>

              <div className="member-category">
                 <span className='member-number'>
                    <CountUp end = {200} start = {100} delay = '0' prefix = '+' />
                 </span>
                 <span className='member-title'>
                     Fitness Program
                 </span>
              </div>

              <div className="calories-burned">
                 <span className='member-number'>
                      220 kcal
                 </span>
                 <span className='member-title'>
                     Calories Burned
                 </span>
              </div>
               
            </div>

            <div className='hero-button'>
               <div className="get-started">
                  <button className='get-started-button'> Get Started </button>
               </div>

               <div className="learn-more">
                  <button className='learn-more-button'> Learn More </button>
               </div>
            </div>

        </div>

        <div className='right-div'>

          <div className="right-div-left">
              <img className='hero-img' src={ hero_image } />
              <img className='hero-back-img' src= { hero_img_back } alt="" />
              
          </div>

          <div className='right-div-right'>          
              <div className="join-now">
                    <button className="join-now-button">
                      Join Now
                    </button>
              </div>

              <div className="heart-rate">
                  <span className='heart-rate-number'>
                        220 bpm
                  </span>
                  <span className='heart-rate-title'>
                      Heart Rate
                  </span>
                </div>
         </div> 
        </div>

    </div>
  )
}

export default hero
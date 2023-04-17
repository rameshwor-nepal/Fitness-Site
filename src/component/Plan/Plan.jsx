import React from 'react'
import './Plan.css'
import heart from '../../assets/heart.png'
import tick from '../../assets/tick.png'
import rightarrow from '../../assets/rightArrow.png'

const Plan = () => {
  return (
    <div className='plan-container'>

        <h1 className='plan-title'>
           <span className='stroke-text'> Ready to start</span> your journey <span className='stroke-text'>with us</span> 
        </h1>

        <div className='plan-category'>
            <div className='plan-detail'>
                <img src= {heart}  className="plan-detail-img" />
                <p className="plan-detail-title">
                    Basic Plan
                </p>
                <p className="plan-detail-price">
                    $25
                </p>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <p className='see-more'> See More Benefits <img src= {rightarrow } /> </p>

                <button className='plan-join-now'> Join Now</button>

            </div>

            <div className='plan-detail'>
                <img src= {heart}  className="plan-detail-img" />
                <p className="plan-detail-title">
                    Premium  Plan
                </p>
                <p className="plan-detail-price">
                    $50
                </p>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <p className='see-more'> See More Benefits <img src= {rightarrow } /> </p>

                <button className='plan-join-now'> Join Now</button>

            </div>

            <div className='plan-detail'>
                <img src= {heart}  className="plan-detail-img" />
                <p className="plan-detail-title">
                   Pro Plan
                </p>
                <p className="plan-detail-price">
                    $100
                </p>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <div className='plan-detail-description'>
                    <img src= {tick} alt="" />
                    <p> Over 140+ experienced trainer</p>
                </div>

                <p className='see-more'> See More Benefits <img src= {rightarrow } /> </p>

                <button className='plan-join-now'> Join Now</button>

            </div>
        </div>

        
    </div>
  )
}

export default Plan
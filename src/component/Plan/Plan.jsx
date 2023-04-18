import React from 'react'
import './Plan.css'
import heart from '../../assets/heart.png'
import tick from '../../assets/tick.png'
import rightarrow from '../../assets/rightArrow.png'

import { plansData } from '../../data/plansData'

const Plan = () => {
  return (
    <div className='plan-container'>

        <h1 className='plan-title'>
           <span className='stroke-text'> Ready to start</span> your journey <span className='stroke-text'>with us</span> 
        </h1>

        <div className='blur plan-blur1'></div>
        <div className='blur plan-blur2'></div>

        <div className='plan-category'>
            
        {plansData.map((plan, i) => (

            <div className='plan-detail' key = {i}>
            
                <div className="plan-detail-img"> {plan.icon} </div>
                <p className="plan-detail-title">
                   {plan.name}
                </p>
                <p className="plan-detail-price">
                    ${plan.price}
                </p>

                {plan.features.map((feature, i) => (

                    <div className='plan-detail-description'>
                        <img src= {tick} alt="" />
                        <p key={i}> {feature}</p>
                    </div>
                    
                ))}

                <p className='see-more'> See More Benefits <img src= {rightarrow } /> </p>

                <button className='plan-join-now'> Join Now</button>
            </div>

         ))}   

        </div>
        
    </div>
  )
}

export default Plan
import React from 'react'
import './Program.css'

import rightarrow from '../../assets/rightArrow.png'
import dumbell from '../../assets/dumbell.svg'

const Program = () => {
  return (
    <div className='program-div'>
        <h1 className="title">
           <span className='stroke-text'>Explore Our</span> Program <span className='stroke-text'>To Shape You</span> 
        </h1>

        <div className="program-list">
          <div className="program-list-element">
             <img className='program-list-img' src= { dumbell } alt="" />
             <p className='program-list-title'> Strength Training </p>
             <p className='program-list-para'>
              Here we will help you to increase your strength and build your body according to your hard work
             </p>
             <div className='program-list-btn'>
               <p className='program-list-joinNow'>Join Now</p>
               <img className='rightarrow' src= { rightarrow } alt="" /> 
             </div>
          </div>

          <div className="program-list-element">
             <img className='program-list-img' src= { dumbell } alt="" />
             <h4 className='program-list-title'> Strength Training </h4>
             <p className='program-list-para'>
              Here we will help you to increase your strength and build your body according to your hard work
             </p>
             <div className='program-list-btn'>
               <p className='program-list-joinNow'>Join Now</p>
               <img className='rightarrow' src= { rightarrow } alt="" /> 
             </div>
          </div>

          <div className="program-list-element">
             <img className='program-list-img' src= { dumbell } alt="" />
             <h4 className='program-list-title'> Strength Training </h4>
             <p className='program-list-para'>
              Here we will help you to increase your strength and build your body according to your hard work
             </p>
             <div className='program-list-btn'>
               <p className='program-list-joinNow'>Join Now</p>
               <img className='rightarrow' src= { rightarrow } alt="" /> 
             </div>
          </div>

          <div className="program-list-element">
             <img className='program-list-img' src= { dumbell } alt="" />
             <h4 className='program-list-title'> Strength Training </h4>
             <p className='program-list-para'>
              Here we will help you to increase your strength and build your body according to your hard work
             </p>
             <div className='program-list-btn'>
               <p className='program-list-joinNow'>Join Now</p>
               <img className='rightarrow' src= { rightarrow } alt="" /> 
             </div>
          </div>
        </div>
    </div>
  )
}

export default Program
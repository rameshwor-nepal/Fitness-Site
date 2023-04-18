import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import rightarrow from '../../assets/rightArrow.png'
import dumbell from '../../assets/dumbell.svg'

const Program = () => {
  return (
    <div className='program-div'>
        <h1 className="title">
           <span className='stroke-text'>Explore Our</span> Program <span className='stroke-text'>To Shape You</span> 
        </h1>

        <div className="program-list">

          {programsData.map((program) =>(
            
            <div className="program-list-element">
                  <div className='program-list-img'> { program.image }</div>
                  <p className='program-list-title'> {program.heading} </p>
                  <p className='program-list-para'>
                    { program.details }
                  </p>
                  <div className='program-list-btn'>
                    <p className='program-list-joinNow'>Join Now</p>
                    <img className='rightarrow' src= { rightarrow } alt="" /> 
                  </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Program
import React from 'react'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import tick from '../../assets/tick.png'
import nb from '../../assets/nb.png'
import nike from '../../assets/nike.png'
import adidas from '../../assets/adidas.png'

import './Reason.css'

const Reason = () => {
  return (
    <div className='reason-container'>
        <div className="grid-image">
            <img className="item1" src= {image1} />
            <img className="item2" src={ image2}/>
            <img className="item3" src= { image3}/>
            <img className="item4"src= {image4} />
        </div>

        <div className="reason-description">
            <h4>Some Reasons</h4>

            <h1> <span className='stroke-text'> Why</span> Choose Us?</h1>

            <div className="point-reason">
                <img src= {tick} alt="" />
                <p> Over 140+ experienced trainer</p>

            </div>

            <div className="point-reason">
                <img src= {tick} alt="" />
                <p> Over 140+ experienced trainer</p>

            </div>

            <div className="point-reason">
                <img src= {tick} alt="" />
                <p> Over 140+ experienced trainer</p>

            </div>

            <div className="point-reason">
                <img src= {tick} alt="" />
                <p> Over 140+ experienced trainer</p>

            </div>

            <p className='partner'> Our Partners</p>
            <div className='partner-img'>

                <img src= {nb} />
                <img src= {nike} />
                <img src= {adidas} />


            </div>

        </div>
        
    </div>
  )
}

export default Reason
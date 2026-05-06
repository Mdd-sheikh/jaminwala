import React from 'react'
import './LandingPage.css'
import { images } from '../../assets/assests';

const LandingPage = () => {
  return (
    <div className='landpage'>
        <div className="landingpage-section-one">
          <img src={images.landImage_seven} alt="" />
        </div>
    </div>
  )
}

export default LandingPage;
import React from 'react'
import './LandingPage.css'
import { images } from '../../assets/assests';

const LandingPage = () => {
  return (
    <div className='landpage'>
      <div className="landingpage-section-one">
        <h2>The Most Trusted Land Marketplace <br /> in Bihar</h2>
        <p>Legally secure, transparent, and direct property transactions powered by <br /> verified Jamabandi records.</p>
        <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>

      </div>
    </div>
  )
}

export default LandingPage;
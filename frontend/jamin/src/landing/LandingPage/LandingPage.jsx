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
      <section>
        <div className="landingpage-section-two">
          <div className="section-two-heading">
            <span>Our Workflow</span>
            <h1>How it Works</h1>
          </div>
          <div className="section-two-boxes">
            <div className="SearchPrecisely">
              <i class="fa-solid fa-earth-americas"></i>
              <h2>Search Precisely</h2>
              <p>Find your perfect plot by filtering through District, Block, and specific Village records with pinpoint accuracy.</p>
            </div>
            <div className="VerifyLegally">
              <i class="fa-regular fa-file-lines"></i>
              <h2>Verify Legally</h2>
              <p>Every listing is linked to official Jamabandi and Khatian records ensuring 100% legal security.</p>
            </div>
            <div className="ContactDirectly">
              <i class="fa-regular fa-message"></i>
              <h2>Contact Directly</h2>
              <p>Connect with sellers directly and get your queries resolved in real-time.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default LandingPage;
import React from 'react'
import './LandingPage.css'
import { images } from '../../assets/assests';
import LandingPage_section_two from '../sections/LandingPage_section_two';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from 'react';

const LandingPage = () => {
  const [active, setActive] = useState(0);

  const faqData = [
    {
      question: "How is the land verified?",
      answer:
        "Every property listing is cross-referenced with the official Bihar Government Revenue & Land Reforms digital records (Jamabandi and Khatian). Only listings with valid record IDs are approved for display.",
    },

    {
      question: "Are there any middleman fees?",
      answer:
        "No. Buyers and sellers can communicate directly without unnecessary brokerage or hidden middleman charges.",
    },

    {
      question: "How to contact sellers?",
      answer:
        "You can directly contact sellers through the contact button available on every property listing page.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <div className='landpage'>
      <div className="landingpage-section-one">
        <h2>The Most Trusted Land Marketplace <br /> in Bihar</h2>
        <p>Legally secure, transparent, and direct property transactions powered by <br /> verified Jamabandi records.</p>
        <button>Get Started <i class="fa-solid fa-arrow-right"></i></button>

      </div>
      <section className='section-two'>
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
        <div className="landingpage-section-three">
          <LandingPage_section_two />
        </div>
        <div className="Landing-section-four">
          <div className="testimonial-wrapper">

            {/* TOP SECTION */}
            <div className="top-section">

              <div className="content-side">
                <h1>Grounded in Authority</h1>

                <p>
                  We combine traditional land values with modern digital
                  verification to create Bihar's most reliable property ecosystem.
                </p>

                <div className="stats-grid">
                  <div className="stat-box blue">
                    <h2>38</h2>
                    <span>DISTRICTS COVERED</span>
                  </div>

                  <div className="stat-box green">
                    <h2>100%</h2>
                    <span>VERIFIED LISTINGS</span>
                  </div>

                  <div className="stat-box brown">
                    <h2>50k+</h2>
                    <span>TRUSTED USERS</span>
                  </div>

                  <div className="stat-box blue">
                    <h2>⚖</h2>
                    <span>GOVT CERTIFIED</span>
                  </div>
                </div>
              </div>

              <div className="image-side">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                  alt="office"
                />
              </div>
            </div>

            {/* TESTIMONIAL SECTION */}
            <div className="testimonial-section">
              <span className="small-title">TESTIMONIALS</span>

              <h1>What Our Users Say</h1>

              <div className="testimonial-grid">

                <div className="testimonial-card">
                  <p>
                    "As a buyer from Muzaffarpur, I was always worried about land
                    disputes. Bihar Bhumi Bazaar's direct link to Jamabandi records
                    gave me the confidence to finalize my first plot in Danapur.
                    The transparency is unmatched."
                  </p>

                  <div className="user-info">
                    <div className="avatar">👤</div>

                    <div>
                      <h3>Rajesh Kumar</h3>
                      <span>✔ VERIFIED BUYER</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card">
                  <p>
                    "Selling our ancestral land in Gaya was a smooth process.
                    I listed it here, and within a week, I was talking to serious
                    buyers. No middlemen calling me every hour, just direct and
                    honest conversations."
                  </p>

                  <div className="user-info">
                    <div className="avatar">👤</div>

                    <div>
                      <h3>Suman Singh</h3>
                      <span>✔ VERIFIED SELLER</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="landingPage-section-five">
          <section className="faq-section">

            <span className="faq-small-title">
              HELP CENTER
            </span>

            <h1>
              Common Questions
            </h1>

            <div className="faq-container">

              {faqData.map((item, index) => (

                <div
                  className={`faq-box ${active === index ? "active" : ""}`}
                  key={index}
                >

                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >

                    <h3>{item.question}</h3>

                    <span>
                      {active === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>

                  </div>

                  {active === index && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </section>
        </div>

      </section>
    </div>
  )
}

export default LandingPage;
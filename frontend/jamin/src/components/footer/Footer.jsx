// Footer.jsx

import "./Footer.css";
import {
  FaGlobe,
  FaRegClone,
  FaUsers,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h1>
            Bhumi
            Bazaar
          </h1>

          <p>
            Bihar's premier digital land marketplace.
            Bridging the gap between traditional land
            ownership and modern transactional transparency.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h3>NAVIGATION</h3>

          <a href="/">Home</a>
          <a href="/">Browse Properties</a>
          <a href="/">Sell Land</a>
          <a href="/">Help Center</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>CONTACT</h3>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>
              M-14, Boring Road, <br />
              Patna, Bihar 800001
            </p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>support@biharbhumi.in</p>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <p>1800-123-4567 (Toll-free)</p>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>SOCIAL MEDIA</h3>

          <div className="social-icons">
            <div className="social-circle">
              <FaGlobe />
            </div>

            <div className="social-circle">
              <FaRegClone />
            </div>

            <div className="social-circle">
              <FaUsers />
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2024 Bihar Bhumi Bazaar. All rights reserved.
          Managed by Revenue & Land Reforms Dept.
        </p>

        <div className="footer-bottom-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Sitemap</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
// Login.jsx

import "./Auth.css";

import { useState } from "react";

import {
  FaUser,
  FaLock,
  FaEye,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";

import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";

import { FiPhone } from "react-icons/fi";
import { images } from "../assets/assests";

const Auth = () => {

  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="auth-container">

      {/* LOGIN PAGE */}

      {!showSignup ? (

        <div className="login-card">

          {/* IMAGE */}
          <div className="login-image">

            <img
              src={images.loginimage}
              alt="land"
            />

          </div>

          {/* CONTENT */}

          <div className="login-content">

            <h1>Welcome Back</h1>

            <p>
              Access your verified land records and marketplace listings.
            </p>

            {/* INPUTS */}

            <div className="input-group">

              <label>Phone Number or Email</label>

              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  placeholder="e.g. 9876543210 or name@mail.com"
                />
              </div>

            </div>

            <div className="input-group">

              <div className="password-top">
                <label>Password</label>
                <span>Forgot Password?</span>
              </div>

              <div className="input-box">
                <FaLock />
                <input
                  type="password"
                  placeholder="Enter your password"
                />
                <FaEye className="eye-icon" />
              </div>

            </div>

            {/* BUTTONS */}

            <button className="login-btn">
              Login →
            </button>

            <div className="or-line">
              <span>OR</span>
            </div>

            {/* SIGNUP BUTTON */}

            <button
              className="signup-switch-btn"
              onClick={() => setShowSignup(true)}
            >
              Create New Account
            </button>

            {/* SECURITY BOX */}

            <div className="security-box">

              <div className="security-icon">
                ✔
              </div>

              <div>
                <h4>Grounded Authority & Security</h4>
                <p>
                  Your data is secured by government-grade encryption.
                </p>
              </div>

            </div>

          </div>

        </div>

      ) : (

        /* SIGNUP PAGE */

        <div className="signup-card">

          {/* TOP */}

          <div className="signup-top">

            <div>
              <span className="step-text">
                STEP 01 OF 03
              </span>

              <h1>Create your account</h1>
            </div>

            <div className="step-icon">
              ✦
            </div>

          </div>

          {/* PROGRESS */}

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          {/* FORM */}

          <div className="signup-form">

            {/* FULL NAME */}

            <div className="signup-input">

              <label>Full Name</label>

              <div className="input-box">
                <FaUser />
                <input
                  type="text"
                  placeholder="Enter as per Aadhaar"
                />
              </div>

            </div>

            {/* PHONE */}

            <div className="signup-input">

              <label>Mobile Number</label>

              <div className="input-box">
                <FiPhone />
                <input
                  type="text"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="verify-box">
                We will send a verification code and property
                updates via WhatsApp.
              </div>

            </div>

            {/* EMAIL */}

            <div className="signup-input">

              <label>Email Address</label>

              <div className="input-box">
                <MdEmail />
                <input
                  type="email"
                  placeholder="example@domain.com"
                />
              </div>

            </div>

            {/* DISTRICT */}

            <div className="signup-input">

              <label>District</label>

              <div className="input-box">
                <MdLocationOn />
                <select>
                  <option>Select your district</option>
                  <option>Patna</option>
                  <option>Gaya</option>
                  <option>Muzaffarpur</option>
                </select>
              </div>

            </div>

            {/* INTENT */}

            <div className="intent-section">

              <h2>
                What is your primary intent?
              </h2>

              <div className="intent-grid">

                <div className="intent-card active-card">
                  <FaShoppingCart />
                  <p>I am a Buyer</p>
                </div>

                <div className="intent-card">
                  <FaStore />
                  <p>I am a Seller</p>
                </div>

              </div>

            </div>

            {/* BUTTONS */}

            <button className="create-account-btn">
              Continue
            </button>

            <button
              className="back-login-btn"
              onClick={() => setShowSignup(false)}
            >
              Back to Login
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default Auth;
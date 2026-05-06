import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState("navbar");
    const [mobileMenu, setMobileMenu] = useState("mobile-menu");


    
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className="navbar-conatiner-one">
                    <button onClick={()=>setMobileMenu("active")}><i class="fa-solid fa-bars"></i></button>
                    <h2>Bhumi Bazar</h2>
                </div>
                <div className="navbar-conatiner-two">
                    <ul>
                        <li className={navbar === "home" ? "active" : ""} onClick={() => setNavbar("home")}>Home</li>
                        <li className={navbar === "browse" ? "active" : ""} onClick={() => setNavbar("browse")}>Browse</li>
                        <li className={navbar === "sell" ? "active" : ""} onClick={() => setNavbar("sell")}>Sell</li>
                        <li className={navbar === "save" ? "active" : ""} onClick={() => setNavbar("save")}>Save</li>
                    </ul>
                </div>
                <div className="navbar-conatiner-three">
                    <Link to="/login"><button>Login</button></Link>

                </div>
                
            </div>
             <div className={`mobile-menu ${mobileMenu==='active' ? 'menu-active' : ''}`}>
                <ul>
                    <li className={navbar === "home" ? "active" : ""} onClick={() => setNavbar("home")}>Home</li>
                    <li className={navbar === "browse" ? "active" : ""} onClick={() => setNavbar("browse")}>Browse</li>
                    <li className={navbar === "sell" ? "active" : ""} onClick={() => setNavbar("sell")}>Sell</li>
                    <li className={navbar === "save" ? "active" : ""} onClick={() => setNavbar("save")}>Save</li>
                </ul>
            </div>

           
        </nav>
    )
}

export default Navbar;
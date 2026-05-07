import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navbar, setNavbar] = useState("navbar");
    const [mobileMenu, setMobileMenu] = useState("mobile-menu");
    const [scroll, setScroll] = useState(false);

    const Handlenavbar = () => {
        if (window.scrollY > 500) {
            setScroll(true);
            console.log("working");

        }
        else{
            setScroll(false); 
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", Handlenavbar);
        return () => {
            window.removeEventListener("scroll", Handlenavbar);
        };
    }, [])

    return (
        <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-conatiner-one">
                    <button onClick={() => setMobileMenu("active")}><i class="fa-solid fa-bars"></i></button>
                    <Link to="/"><h2 >Bhumi Bazar</h2></Link>
                </div>
                <div className="navbar-conatiner-two">
                    <ul>
                       <Link to="/home"><li className={navbar === "home" ? "active" : ""} onClick={() => setNavbar("home")}>Home</li></Link>
                        <Link to="/browse"><li className={navbar === "browse" ? "active" : ""} onClick={() => setNavbar("browse")}>Browse</li></Link>
                        <Link to="/sell"><li className={navbar === "sell" ? "active" : ""} onClick={() => setNavbar("sell")}>Sell</li></Link>
                        <Link to="/save"><li className={navbar === "save" ? "active" : ""} onClick={() => setNavbar("save")}>Save</li></Link>
                    </ul>
                </div>
                <div className="navbar-conatiner-three">
                    <Link to="/login"><button>Login</button></Link>

                </div>

            </div>
            <div className={`mobile-menu ${mobileMenu === 'active' ? 'menu-active' : ''}`}>
                <ul>
                    <Link to="/home"><li className={navbar === "home" ? "active" : ""} onClick={() => setNavbar("home")}>Home</li></Link>
                    <Link to="/browse"><li className={navbar === "browse" ? "active" : ""} onClick={() => setNavbar("browse")}>Browse</li></Link>
                    <Link to="/sell"><li className={navbar === "sell" ? "active" : ""} onClick={() => setNavbar("sell")}>Sell</li></Link>
                    <Link to="/save"><li className={navbar === "save" ? "active" : ""} onClick={() => setNavbar("save")}>Save</li></Link>
                </ul>
            </div>


        </nav>
    )
}

export default Navbar;
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className="navbar-container">
        <div className="navbar-conatiner-one">
            <button><i class="fa-solid fa-bars"></i></button>
            <h2>Bhumi Bazar</h2>
        </div>
        <div className="navbar-conatiner-two">
            <ul>
                <li>Home</li>
                <li>Browse</li>
                <li>Sell</li>
                <li>save</li>
            </ul>
        </div>
        <div className="navbar-conatiner-three">
            <button>Login</button>
            
        </div>
    </div>
    </nav>
  )
}

export default Navbar;
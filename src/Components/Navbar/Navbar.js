import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import avatar from '../../img/avatar.png'

function Navbar() {
  // Setup state for toggling navbar
  const [show, handleShow] = useState(false);

  // Sets show to true when scrolling > 100px, else sets show to false
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  // Runs function on page load
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    // Only applies 'nav__black' class after scrolling > 100px
    <div className={`navbar ${show && 'nav__black'}`}>
      <div className='navbar__content'>
        <img className='navbar__logo' src={logo} alt="navbar logo" />
        <img className='navbar__avatar' src={avatar} alt="navbar avatar" />
      </div>
    </div>
  )
}

export default Navbar

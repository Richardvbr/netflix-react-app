import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import avatar from '../../img/avatar.png'
import { useHistory } from 'react-router-dom';

function Navbar() {
  // Setup state for toggling navbar
  const [show, handleShow] = useState(false);
  const history = useHistory();

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
    <nav className={`navbar ${show && 'nav__black'}`}>
      <div className='navbar__content'>
        {/* ADD REST OF NAVBAR */}
        <img onClick={() => history.push('/')} className='navbar__logo' src={logo} alt="navbar logo" />
        <img onClick={() => history.push('/profile')} className='navbar__avatar' src={avatar} alt="navbar avatar" />
      </div>
    </nav>
  )
}

export default Navbar

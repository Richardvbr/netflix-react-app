import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import avatar from '../../img/avatar.png'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

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
      <div className="fade-top"></div>
      <div className='navbar__content'>
        <div className="navbar__left">
          <img onClick={() => history.push('/')} className='navbar__logo' src={logo} alt="navbar logo" />
          <ul className="navbar__left__ul">
            <a href="#">
              <li className="navbar__left__ul__li hide-mobile">Home</li>
            </a>
            <a href="#">
              <li className="navbar__left__ul__li hide-mobile">TV Shows</li>
            </a>
            <a href="#">
              <li className="navbar__left__ul__li hide-mobile">Movies</li>
            </a>
            <a href="#">
              <li className="navbar__left__ul__li hide-mobile">Recently Added</li>
            </a>
            <a href="#">
              <li className="navbar__left__ul__li hide-mobile">My List</li>
            </a>
          </ul>
        </div>
        <div className="navbar__right">
          <div className="navbar__right__ul">
            <a href="#"><FontAwesomeIcon className='searchIcon hide-mobile' icon={faSearch} /></a>
            <a href="#">
              <li className="navbar__right__ul__li hide-mobile">KIDS</li>
            </a>
            <a href="#">
              <li className="navbar__right__ul__li hide-mobile">DVD</li>
            </a>
            <a href=""><FontAwesomeIcon className='bellIcon hide-mobile' icon={faBell} /></a>
          </div>
          <img onClick={() => history.push('/profile')} className='navbar__avatar' src={avatar} alt="navbar avatar" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar

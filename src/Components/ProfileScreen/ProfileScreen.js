import React from 'react'
import './ProfileScreen.css'
import Navbar from '../Navbar/Navbar'
import avatar from '../../img/avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={avatar} alt="avatar" />
          <div className="profileScreen__details">
            <h3>Your email address</h3>
            <h2>{`${user.email || 'Logged in as guest'}`}</h2>
            <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <div className="profileScreen__standard plan">
                <div className="plan__details">
                  <h4>Netflix Standard</h4>
                  <p>1080p</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__basic plan">
                <div className="plan__details">
                  <h4>Netflix Basic</h4>
                  <p>720p</p>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__premium plan">
                <div className="plan__details">
                  <h4>Netflix Premium</h4>
                  <p>4K+HDR</p>
                </div>
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen

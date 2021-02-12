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
            <div className="profileScreen__plans">
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen

import React, { useState } from 'react'
import './LoginScreen.css'
import logo from '../../img/logo.png'
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';

function LoginScreen() {
  const [signIn, setSignin] = useState(false);
  const history = useHistory();

  // Sign in as guest
  const guestSignIn = (e) => {
    e.preventDefault();
    auth
      .signInAnonymously()
      .then((authUser) => {
        console.log('Logged in as guest')
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img onClick={() => history.push('/')} className
          ='loginScreen__logo' src={logo} alt="netflix logo" />
        <button onClick={() => setSignin(true)} className='loginScreen__button'>Sign In</button>
        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
              <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="loginScreen__input">
                  <form>
                    <input type='email' placeholder='Email Address' />
                    <button onClick={() => setSignin(true)} className='loginScreen__getStarted'>
                      Get Started
                    </button>
                    <button type='submit' onClick={guestSignIn} className='loginScreen__guestLogin' >Or continue as guest</button>
                  </form>
                </div>
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default LoginScreen

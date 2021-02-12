import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './SignUpScreen.css'

function SignUpScreen() {
  // Listen for email and password values
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Register user with entered email and password
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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

  // Logs in with entered email and password
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(`${emailRef.current.value} was logged in`)
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='signupScreen__gray'>New to Netflix?</span> <span className='signupScreen__link' onClick={register}>Sign up now.</span></h4>
        <button type='submit' onClick={guestSignIn} className='loginScreen__guestLogin' >Or continue as guest</button>
      </form>
    </div>
  )
}

export default SignUpScreen;

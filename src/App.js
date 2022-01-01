import './app.css'
import Messenger from './Components/Messenger';
import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Components/Login';
import {auth, db} from './firebase'
import SignOut from './Components/SignOut';
import imageImport from './logo.png'


function App() {
  
  const [user] = useAuthState(auth);


  return (
    <>
      <div className='appBar'>

          <img className="image" src={imageImport} />
          <h1>
            Messenger
          </h1>
          <div className='signInOut'> 
          {user ? <SignOut/> : <Login/>}
          </div>

      </div>

      {!user ? null : <Messenger id={user.uid} name={user.displayName} ></Messenger>}
    </>
   
  );
}

export default App;

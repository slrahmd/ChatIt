import './app.css'
import Messenger from './Components/Messenger';
import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Components/Login';
import {auth, db} from './firebase'
import SignOut from './Components/SignOut';


function App() {
  
  const [user] = useAuthState(auth);

  return (
    <div className='messenger'>
      <h2 className='top'> {user ? <SignOut/> : 'Chat'} </h2>
      <hr></hr>
     {!user ? <Login/> : <Messenger ></Messenger>}
    </div>
   
  );
}

export default App;

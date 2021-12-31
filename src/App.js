import './app.css'
import Messenger from './Components/Messenger';
import React, {useState, useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Components/Login';
import {auth, db} from './firebase'


function App() {
  
  //Key id hook
  //const [id, setId] = useState(0);
  //react-firebase-hook for user login
  const [user] = useAuthState(auth);

  // const messageSetter = (input) => {
  //   setId(id+1);
  //   const newObj = {id , input};
  //   setMessages([...messages, newObj]);
  // }


  return (
    <div className='messenger'>
      <h2 className='top'>Messenger App</h2>
      <hr></hr>
     {!user ? <Login/> : <Messenger ></Messenger>}
    </div>
   
  );
}

export default App;

import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import {auth} from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import '../app.css'

const Login = () => {

    const signInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

    }
    return (
        <div className='loginPage'>
            <LoginIcon style={{cursor:'pointer'}} onClick={signInWithGoogle}/>
        </div>
    )
}

export default Login

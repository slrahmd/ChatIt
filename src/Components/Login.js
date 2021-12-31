import React from 'react'
import {Button} from '@material-ui/core';
import {auth} from '../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Login = () => {

    const signInWithGoogle = () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);

    }
    return (
        <div>
            <Button onClick={signInWithGoogle}>Sign in with google</Button>
        </div>
    )
}

export default Login

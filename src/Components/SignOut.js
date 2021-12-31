import React from 'react'
import { Button } from '@material-ui/core';
import {auth} from '../firebase';


const SignOut = () => {

   const signOutFunction = () => {
        auth.signOut();
    }
    return (
        <div>
           <Button onClick={signOutFunction}>
               Sign Out
           </Button>
        </div>
    )
}

export default SignOut

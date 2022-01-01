import React from 'react'
import { Button } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import {auth} from '../firebase';


const SignOut = () => {

   const signOutFunction = () => {
        auth.signOut();
    }
    return (
        <div>
           <LogoutIcon onClick={signOutFunction}>
           </LogoutIcon>
        </div>
    )
}

export default SignOut

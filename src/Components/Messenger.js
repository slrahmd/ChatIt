import React from 'react'
import { useState, useEffect } from 'react';
import MessageComp from './MessageComp';
import {Typography, FormControl, Input, InputLabel, IconButton} from '@material-ui/core'
import SignOut from './SignOut';
import { Send } from '@mui/icons-material';
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app';
import './component.css';

const Messenger = ({id, name}) => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        db.collection('Messages').orderBy('createdAt').limit(50)
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }
        , []);

    async function onSubmit(e) {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await db.collection('Messages').add({
            message: input,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }


    return (
        <div>
            <div className='flexMessages'>
                {
                    messages.map(
                        (message) => (<MessageComp uid={id} messageuID={message.uid} photoURL={message.photoURL} key={message.id} text={message.message} />)
                    )
                }
            </div>

            <div className='inputComponent'>
                <form onSubmit={onSubmit}>
                    <FormControl style={{ display: 'flex', justifyContent: 'center', 
                    alignItems: 'center'}}>
                        <InputLabel style={{left:'auto', margin:'auto'}} htmlFor="my-input">Type Message...</InputLabel>
                        <Input value={input} onChange={(e) => setInput(e.target.value)} aria-describedby="my-helper-text" />
                        <IconButton disabled={!input} variant="contained" type='Submit' color="primary" >
                            <Send/>
                        </IconButton>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}

export default Messenger


import React from 'react'
import { useState, useEffect } from 'react';
import MessageComp from './MessageComp';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import SignOut from './SignOut';
import {auth, db} from '../firebase'
import firebase from 'firebase/compat/app';

const Messenger = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=> {db.collection('Messages').orderBy('createdAt').limit(50)
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })}
    ,[]);

    async function onSubmit(e) {
        e.preventDefault();

        const{uid, photoURL} = auth.currentUser;

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
            <SignOut/>
            <form onSubmit={onSubmit}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Type Message...</InputLabel>
                    <Input value={input} onChange={(e) => setInput(e.target.value)} aria-describedby="my-helper-text" />
                    <Button variant="contained" type='Submit'>Send</Button>
                </FormControl>
                
            </form>
        {
        messages.map(
        (message) => ( <MessageComp key={message.id} text={message.message} />)
        )
        }
        </div>
    )
}

export default Messenger


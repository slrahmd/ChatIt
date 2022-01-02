import React from 'react'
import { Box } from '@material-ui/core'
import { margin } from '@mui/system'

const MessageComp = ({uid, messageuID, photoURL, text}) => {

    return (

        <div className={`messageIndividual ${uid === messageuID ? 'myMessage' : ''}`}>
            { 
            messageuID === uid ?
            <>
            <p>{text}</p>
            <img className='messageImage' src={photoURL} />
            </>
            :
            <>
            <img className='messageImage' src={photoURL} />
            <p className='other'>{text}</p>
            </>
            }
        </div>
    )
}

export default MessageComp

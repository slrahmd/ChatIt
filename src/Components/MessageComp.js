import React from 'react'
import { Box } from '@material-ui/core'
import { margin } from '@mui/system'

const MessageComp = ({photoURL, text}) => {

    return (

        <div className='messageIndividual'>
            <img className='messageImage' src={photoURL} />
            <p>{text}</p>
        </div>
    )
}

export default MessageComp

import React from 'react'
import { Box } from '@material-ui/core'
import { margin } from '@mui/system'

const MessageComp = ({text}) => {
    return (
        <div>
            <Box component="span" 
            sx={{ display: 'block', minHeight: '2.5rem', bgcolor: '#1B7DFF',
            borderRadius: '10px', boxShadow: '5', }}>
                {text}
            </Box>
            
        </div>
    )
}

export default MessageComp

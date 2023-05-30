import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import useName from '../custom-name';

const UseName = () => {

    const [name, setName] = useName();

    return (
    <Box>
        <Typography>name: {name}</Typography>
         <Box>
         <input type="text" onChange={e => setName(e.target.value)} value={name}/>

         </Box>
    </Box>
    );
};

export default UseName
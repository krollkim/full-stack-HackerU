import { Box } from '@mui/system';
import React, { useState } from 'react'

const UseStateWithComplex = () => {

    const initName = {
        first: "kim",
        last: "kroll"
    };

    const [fullName, setfullName] = useState(initName)

  return (
    <Box display={'flex'} justifyContent={'center'} mt={6}>
        <Box>
        <Box display={'flex'} justifyContent={'center'} mb={4} backgroundColor={'lightpink'}>
            {fullName.first} {fullName.last}
        </Box>
        <input type="text" 
        placeholder='Enter first name' 
        onChange={e => setfullName({ ...fullName, first: e.target.value})}/>
        <input type="text" placeholder='Enter last name' onChange={e => setfullName({ ...fullName, last: e.target.value})}/>
        </Box>
    </Box>
    
  )
}

export default UseStateWithComplex
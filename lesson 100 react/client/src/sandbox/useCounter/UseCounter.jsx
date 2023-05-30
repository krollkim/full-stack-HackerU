import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import useCounter from '../custom-hook';

const UseCounter = () => {
    const [count, increament, decreament, reset] = useCounter();
  return (
    <Box>
     <Typography>{count}</Typography>
      <Box>
        <Button onClick={increament}>+</Button>
        <Button onClick={decreament}>-</Button>
        <Button onClick={reset}>reset</Button>
      </Box>
    </Box>
  )
}

export default UseCounter
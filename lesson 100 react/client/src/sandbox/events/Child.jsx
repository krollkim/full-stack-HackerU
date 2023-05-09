import { Button } from '@mui/material'
import React from 'react'

const ChildEvents = ({handleClick}) => {
  return (
        <Button onClick={handleClick}>click</Button>
    )
}

export default ChildEvents
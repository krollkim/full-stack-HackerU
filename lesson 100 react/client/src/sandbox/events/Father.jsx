import React from 'react'
import ChildEvents from './Child';

const FatherEvents = () => {
    const handleClick = () => console.log("click Event from father");
  return (
    <ChildEvents handleClick={handleClick} />
  )
}

export default FatherEvents
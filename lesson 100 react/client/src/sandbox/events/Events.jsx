import React from 'react'
import {Button} from '@mui/material'
import { Box } from '@mui/system';

const Events = () => {
    // const onClick = () => {
    //   console.log("hey");
    // };

    // const onClickWithText = (text) => console.log(text);
    // const onClickMuiButton = () => console.log("Mui Button");

    const handleClick = e => console.log(e.target) + console.log("Was Clicked");
    return (
        <Box sx={{display: "flex", justifyContent: "center", mt: 10}}>
        <div>
        {/* <button onClick={onClick}>onClick</button>
        <button onClick={() => onClickWithText("text")}>onClickWithText</button>
        <Button onClick={() => onClickMuiButton("text")}>mui button</Button> */}
        <Button onClick={e => handleClick(e)} variant="contained">click</Button>
        </div>
        </Box>
    );
  };
  
  export default Events;
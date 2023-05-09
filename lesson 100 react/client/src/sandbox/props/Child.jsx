import React from 'react'
// import {Box} from "@mui/material";
// import Typography from '@mui/material/Typography'

const Child = ({obj}) => {
    console.log(obj.ChildTitle);
    // const { str } = obj; 
  return (
    <>
        {/* <Box sx={{
            width: 100,
            height: 100,
            "&:hover": {
                backgroundColor: "primary.dark",
                opacity: [0.9, 0.8, 0.7],
            },
        }}/>

        <Typography variant="body1">child comp</Typography>
        <Typography>{str}</Typography> */}

      <div>{obj.ChildTitle}</div>
      {/* <div>{props.massage.subTitle}</div>
      <div>{props.massage.id}</div>
      <div>{props.sum}</div>
      <div>{props.title}</div> */}
    </>
  )
}

export default Child
import React from 'react'
import Child from './Child'
import SecondChild from './SecondChild'
// import Typography from '@mui/material/Typography'

const Father = () => {
    // const title = "hello from father jeff"
    // const sum = 10;
    const obj = {
        ChildTitle: "hello child from jeff",
        SecondChildTitle: "hello second child from jeff",
    }
  return (
    <>
      <Child obj={obj}/>
      <SecondChild obj={obj}/>

      {/* <Typography variant="body1" m={2}>
        {" "}
        father comp - passing string
      </Typography>
      <Box sx={{
        m:2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:300,
        height:300,
        backgroundColor: "secondary.dark"
      }}>
        <Child string={str}/>
      </Box> */}
    </>
  )
}

export default Father
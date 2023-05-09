import {useState, React} from 'react'
import { Box, Button } from '@mui/material';
const UseState = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("default");

    const changeCounter = (term) => {
       if(term === "+") return setCounter(prev => prev + 1); 
       if(term === "-") return setCounter(prev => prev - 1); 
       setCounter(0);
    }

  return (
    <>
    <Box sx={{display:'flex', justifyContent:'center', mt:4}}>
        <Box>
            <Box backgroundColor={'lightpink'} textAlign={'center'} mb={2}>
                {`counter ${counter}`}
            </Box>
            <Button
                onClick={() => changeCounter("+")}
                variant="outlined">
                +
            </Button>
            <Button
                onClick={() => changeCounter("-")}
                variant="outlined">
                -
            </Button>
            <Button
                onClick={changeCounter}
                variant="outlined">
                reset counter
            </Button>
        </Box>
    </Box>

      <Box sx={{display:'flex', justifyContent:'center', mt:4}}>
        <div>{name}</div>
      <button onClick={() => setName("Eliran")}>Set Name - Eliran</button>
      <button onClick={() => setName("Ron")}>Set Name - Ron</button>
      <button onClick={() => setName((prev) => `${prev} Dagan`)}>
        Add Last name - Dagan
      </button>
      <button onClick={() => setName("")}>Reset</button>
    </Box>
    </>
  );
}

export default UseState
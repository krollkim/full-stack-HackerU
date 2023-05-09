import {useState, React} from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';

const SetCounter = () => {
    const [counter, setCounter] = useState(0);

    const changeNum = (term= "") => {
       if(term === "+") return setCounter(count => count + 1); 
       if(term === "-") return setCounter(count => count - 1); 
       setCounter(0);
    }

    const initialName = {
        first: "ki",
        last: "ko",
    };
    
    const [name, setName] = useState(initialName);

  return (
    <>
    <Box display={'flex'} justifyContent={'center'} mt={4} mb={6}>
        <Box>
            <Box textAlign={'center'} mb={2}>
                {`counter ${counter}`}
            </Box>
            <Button
                onClick={() => changeNum("+")}
                variant="outlined">
                +
            </Button>
            <Button
                onClick={() => changeNum("-")}
                variant="outlined">
                -
            </Button>
            <Button
                onClick={changeNum}
                variant="outlined">
                reset counter
            </Button>
        </Box>
    </Box>
    <Divider/>
    <Box>
        <Typography textAlign={'center'} mt={8} backgroundColor={'purple'} color={'white'}>
            {name.first} {name.last}
        </Typography>
        <Box display={'flex'} justifyContent={'center'} mt={6}>
        <input type="text" placeholder='first name' 
        onChange={e => setName({...name, first: e.target.value})}/>
        <input type="text" placeholder='last name' 
        onChange={e => setName({...name, last: e.target.value})}/>
        </Box>
        
    </Box>
    </>
  );
};

export default SetCounter
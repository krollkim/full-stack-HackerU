import { Button } from '@mui/material';
import { string, func } from 'prop-types';
import React, {memo} from 'react'

const ButtonComp = ({handleClick, children}) => {
console.log(`rendering button ${children}`);
  return (
    <Button variant='outlined' onClick={handleClick} color="primary">
        {children}
    </Button>
  );
};

ButtonComp.proTypes = {
    handleClick: func.isRequired,
    children: string.isRequired,
}

export default memo(ButtonComp);
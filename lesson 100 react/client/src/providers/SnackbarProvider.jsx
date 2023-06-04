import { Alert, Snackbar } from '@mui/material';
import React, { useCallback, useContext, useState} from 'react'
import { node } from 'prop-types';

const SnackbarContext = React.createContext(null)

export const SnackbarProvider = ({children}) => {

    const [isSnackbarOpen, setOpenSnackbar] = useState(false);
    const [snackColor, setSnackColor] = useState("success");
    const [snackMessage, setSnackMessage] = useState("in Snackbar");
    const [snackVarient, setSnackVarient] = useState("filled");

    const setSnack = useCallback((color,message,varient="fill") => {
        setOpenSnackbar(true)
        setSnackColor(color)
        setSnackMessage(message)
        setSnackVarient(varient)
    }, [
        setOpenSnackbar,
        setSnackColor,
        setSnackMessage,
        setSnackVarient
    ]);

    
  return (
    <>
     <Snackbar 
       open={isSnackbarOpen} 
       onClose={() => setOpenSnackbar(false)}
       anchorOrigin={{vertical:"top",horizontal: "right"}}
       autoHideDuration={3000}>
         <Alert severity={snackColor} variant={snackVarient}>
            {snackMessage}
         </Alert>
     </Snackbar>

     <SnackbarContext.Provider value={setSnack}>
        {children}
     </SnackbarContext.Provider>
    </>
  )
};

export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw Error("useSnack must use SnackbarProvider");
    return context;
};

SnackbarProvider.propTypes = {
    children: node.isRequired,
};

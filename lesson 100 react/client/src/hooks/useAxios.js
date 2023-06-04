import axios from 'axios';
// import { useSnack } from '../providers/SnackbarProvider';

const useAxios = () => {
    // const snackFunc = useSnack();
    axios.interceptors.request.use(data => {
        console.log("Entered useAxios request"); 
        return Promise.resolve(data);
    }, null);

    axios.interceptors.response.use(data => {
        console.log("Entered useAxios response");
        return Promise.resolve(data);
    }, 
    error => {
        // const expectedError = error.response && error.response.status >= 400;
        // if(expectedError){
        //     snackFunc("error", error.message, "outlined")
        // }
        console.log("Entered useAxios response - error");
        return Promise.reject(error);
    });
};

export default useAxios
import { number} from "prop-types";
import { useState } from "react";

const useCounter = (initCount = 0) => {
    const [counter, setCounter] = useState(initCount);

    const increament = () => setCounter(prev => prev + 1);
    const decreament = () => setCounter(prev => prev - 1);
    const reset = () => setCounter(initCount);

    return [counter, increament, decreament, reset];
};

useCounter.propTypes = {
    initCount: number,
};


export default useCounter
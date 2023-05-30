import { string } from "prop-types";
import { useState } from "react";

const useName = (initialName = "") => {

    const [name, setName] = useState(initialName);
    return [name,setName];
        
    
}

useName.propTypes = {
    initialName: string,
};

export default useName
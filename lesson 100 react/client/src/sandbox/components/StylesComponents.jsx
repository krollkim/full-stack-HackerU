import React from 'react'
import "./StylesComponents.css";

const StylesComponents = () => {
    const flag = true;
    const styleTwo = {
        color: flag ? "purple" :  "green",
        background: "yellow",
    }
    const marg = {
        padding: 20
    }
  return (
    <> 
        <div>style 1</div>
        <div style={{color: "red", ...marg}}>one</div>
        <div style={{color: "pink", ...marg}}>two</div>
        <div style={{color: "skyblue", ...marg}}>three</div>

        <div>style 2</div>
        <div className='pointer' style={styleTwo}>four</div>


    </>
    
  )
}

export default StylesComponents
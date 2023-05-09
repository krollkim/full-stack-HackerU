import React from 'react'
import PropTypes from 'prop-types'
import PropTypesChild from './PropTypesChild'
import PropTypesShape from './PropTypesShape';

const PropTypesFather = () => {
    // const obj = {
    //     name: 'kuki'
    // };
    // const arr = [1, 2, 3];
    const shape = {
        id: 10,
        name: "kuki"
    }
  return (
    // <PropTypesChild str={"hello"} num={10} oneOfType={10} oneOf={"one"} obj={obj.name} arr={arr}/> 

    <PropTypesShape obj={shape}/>
)
}

PropTypesFather.propTypes = {}

export default PropTypesFather
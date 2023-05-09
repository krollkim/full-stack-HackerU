import React from 'react'
import PropTypes from 'prop-types'

const PropTypesChild = ({str, num, oneOfType, oneOf}) => {
  return (
    <div>{oneOfType} {oneOf}</div>
  )
}

PropTypesChild.propTypes = {
    // string
    str: PropTypes.string.isRequired,
    // number
    num: PropTypes.number,
    // oneOfType
    oneOfType: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    // oneOf
    oneOf: PropTypes.oneOf(["one"]).isRequired,
    // array
    arr: PropTypes.arrayOf(PropTypes.number),
    // object
    obj: PropTypes.objectOf(PropTypes.string),
    // 

}

export default PropTypesChild
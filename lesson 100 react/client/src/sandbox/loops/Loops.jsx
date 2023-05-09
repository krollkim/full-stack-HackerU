import React from 'react'

const Loops = () => {

    const array = ["one", "two", "three"];

  return (
    <div>
      <ul>
      {array.map((item, i) => {
        console.log(array);
        return (
          <li key={i}>
            {i + 1} {item}
          </li>
        )
      })}
      </ul>
    </div>
  )
}

export default Loops
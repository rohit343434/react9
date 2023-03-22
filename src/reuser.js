import React from 'react'

const Reuser = (props) => {
  return (
    <div>
    <span>
      <h1>{props.data.name}</h1>

      </span>
    <span>
      <h1>{props.data.state }</h1>

      </span>
    <span>
      <h1>{props.data.city}</h1>

      </span>
      </div>
  )
}

export default Reuser


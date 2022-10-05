import React from 'react'

const  Button = ({count,clickHandler}) => {
  return (
    <button onClick={clickHandler}>{count} time clicked </button>
  )
}

export default Button
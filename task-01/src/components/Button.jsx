import React from 'react'

const Button = ({label, onClick}) => {
  return (
      <button onClick={(e)=> onClick(e)} className='btn btn-primary'>{ label}</button>
  )
}

export default Button
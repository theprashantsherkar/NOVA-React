import React from 'react'

function Button({label, func, type}) {
  return (
      <button onClick={func} className={`btn btn-${type}` }>
          <span>{label}</span>
     </button>
  )
}

export default Button;


//useState, props, state
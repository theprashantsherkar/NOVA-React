import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
  return (
      <div className='flex gap-5'>

          <button onClick={()=>navigate(-1)}>
              go back
          </button>
          <div>
              About
          </div>
      </div>    
  )
}

export default About
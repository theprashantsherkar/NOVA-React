import React from 'react'
import Button from './Button'

function Navbar() {
  return (
      <div className='w-full p-2 border border-black bg-slate-700 text-white'>
          this is a Navbar
          <div>
              <Button label={"temp"} type={"primary"}/>
          </div>
    </div>
  )
}

export default Navbar
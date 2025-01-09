import React, { useContext } from 'react'
import { TempContext } from '../context/Tempcontext';

function Home() {
    const {name, setName } = useContext(TempContext);
  return (
      <>
          <div>{name}</div>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
      </>
  )
}

export default Home
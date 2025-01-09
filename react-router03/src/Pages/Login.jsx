import React, { useCallback, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { TempContext } from '../context/Tempcontext';

function Login() {
    const navigate = useNavigate();
    const { name } = useContext(TempContext);
  return (
      <>
          <div>Login</div>
          <button className='border border-black p-3' onClick={() => navigate('/')}>go to home directly</button>
          <div>
              your name is: {name}
          </div>
      </>
  )
}

export default Login
import React, { useState } from 'react'
import Table from './components/Table'
import Input from './components/Input'
import Button from './components/Button'

const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [userList, setUserList] = useState([]);

  function onName(value) {
    setName(value)
  }
  function onEmail(value) {
    setEmail(value)
  }

  function onPassword(value) {
    setPassword(value)
  }

  function onSubmit() {
    const newUser = {
      name: name,
      email: email,
      password: password
    }

    setUserList([...userList, newUser])

    setName("")
    setPassword("")
    setEmail("")
  }



  return (
    <div className='w-full h-screen flex '>
      <div className='w-1/2 flex flex-col items-center justify-center gap-3 border border-black m-2 rounded-2xl'>
        <div className=' px-1 py-3 flex flex-col w-1/2 items-center justify-center gap-3 rounded-2xl'>
          <h1 className='text-2xl font-semibold'>Form</h1>
          <Input type={"text"} placeholder={"Enter your name"} value={name} onChange={onName} />
          <Input type={"email"} placeholder={"Enter your email"} value={email} onChange={onEmail} />
          <Input type={"password"} placeholder={"Enter your password"} value={password} onChange={onPassword} />
          <Button label={"Submit"} onClick={() => onSubmit()} />
        </div>
      </div>
      <div className='w-1/2 border border-black m-2 rounded-2xl'>
        <Table users={userList}/>
      </div>
    </div>
  )
}

export default App
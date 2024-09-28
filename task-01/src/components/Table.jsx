import React from 'react'

const Table = ({users}) => {
  return (
      <div className=' flex flex-col items-center justify-start h-screen mx-3 '>
          <h1 className='text-2xl my-3'>
              Users table
          </h1>
          <table className='table table-bordered table-striped table-hover'>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                  </tr>
              </thead>
              <tbody>
                  {users?.map((user) => (
                      <tr key={user} value={user}>
                          <td>{ user.name}</td>
                          <td>{ user.email}</td>
                          <td>{ user.password}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
    </div>
  )
}

export default Table
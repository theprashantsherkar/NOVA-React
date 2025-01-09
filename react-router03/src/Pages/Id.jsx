import React from 'react'
import {useParams} from 'react-router-dom'

function Id() {
    const { id } = useParams();
  return (
      <div>Id: { id}</div>
  )
}

export default Id
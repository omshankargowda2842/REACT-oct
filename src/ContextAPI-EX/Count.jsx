import React from 'react'
import { useContext,useState } from 'react'
import { store } from './App1'

const Count = () => {
    const [data,Setdata]=useContext(store)
  return (
    <div>
      {Setdata}
      Count:{data.length}
    </div>
  )
}

export default Count

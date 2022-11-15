import React from 'react'
import { useContext,useState } from 'react'
import { store } from './App1'

const Display = () => {
  const [data,Setdata]=useContext(store)
  return (
    <div>
      Display
      {
        data.map((name)=>{
          return(<p>{name.Name}</p>

          )
        })
      }
    </div>
  )
}

export default Display

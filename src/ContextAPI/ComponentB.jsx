import React from 'react'
import { useContext,useState } from 'react'
import { store } from './App1'

const ComponentB = () => {
    const [data,Setdata]=useContext(store)
   
    
  return (
    
      <div className="card">
            <div className="card-body">
            Component-B{data}

            </div>
        </div>
    
  )
}

export default ComponentB

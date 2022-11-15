import React from 'react'
import { useContext,useState } from 'react'
import { store } from './App1'

const ComponentA = () => {
    const [data,Setdata]=useContext(store)
  return (
    <div>
        <div className="card">
            <div className="card-body">
            Component-A{data}

            </div>
        </div>
     
    </div>
  )
}

export default ComponentA

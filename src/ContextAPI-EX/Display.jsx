import React from 'react'
import { useContext,useState } from 'react'
import { store } from './App1'

const Display = () => {
  const [data,Setdata]=useContext(store)
  const [name,Setname]=useState("")
  const submithandler=((e)=>{
    Setname("")
    e.target.reset()
e.preventDefault()
Setdata([...data,{Name:name}])
  })
  return (
    <div>
    { data.map((name)=>{return(<p>{name.Name}</p>)})}
      <form onSubmit={submithandler}>
      <input type="text" placeholder='Enter Name' onChange={(e)=>{Setname(e.target.value)}} />
      <input type="submit"  value="Add"/>
      </form>
    </div>
  )
}

export default Display

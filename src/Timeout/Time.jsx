import React,{ useState,useEffect } from 'react'

import "../App.css"

const Time = () => {
    const[currenttime,SetCurrenttime] =useState ()
    useEffect(()=>{
      setInterval(() => {
            SetCurrenttime(   new Date().toLocaleTimeString() )
          }, 1000);
          
       },[])
  return (
    <div>
     <h1> {currenttime}</h1>
    </div>
  )
}

export default Time

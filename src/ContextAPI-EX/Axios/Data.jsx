import React from 'react'
// import { useState,useEffect } from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import "./Data.css"

const Data = () => {
  const [array,setarray]=useState([])
  useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/photos")
.then((response)=>{
console.log(response)
setarray(response.data)
})
.catch()  },[])
  
    
  return (
    <div>
      
<pre>{JSON.stringify(array)}</pre>
<table>
  <thead>
    
  </thead>
  <tbody>
    {
      array.map((item,index)=>{
        return <tr className='main'>
          <div className="card">
            {/* <div className="card-header"><img src={item.thumbnailUrl}alt="" /></div> */}
            <span><img src={item.thumbnailUrl}alt="" /></span>
            <div className="card-body"></div>
          </div>
          
        </tr>
      })
    }
  </tbody>
</table>
    </div>
  )
}

export default Data
// Axios.get('https://jsonplaceholder.typicode.com/photos')
// .then((response)=>{
//     //console.log(response);
//     this.setState({
//         users:response.data
//     })

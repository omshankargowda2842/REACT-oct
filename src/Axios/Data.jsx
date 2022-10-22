import React from 'react'
// import { useState,useEffect } from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"

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
    <tr>
      <th>Id</th>
      <td>Title</td>
      <td>Photo</td>
    </tr>
  </thead>
  <tbody>
    {
      array.map((item,index)=>{
        return <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td><img src={item.thumbnailUrl} alt="" /></td>
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

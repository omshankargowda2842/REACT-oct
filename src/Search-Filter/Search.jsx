import React from 'react'
import { useState } from 'react'
import Data from "./India_cities.json"

const Search = () => {
    const [search,Setsearch]=useState("")
  return (
   
    <div>
      <center>
        <h4>Enter Your City Name:</h4>
    <input type="text"   onChange={(event)=>{Setsearch(event.target.value)}} />
        {
           Data.filter(city=>city.city.toLowerCase(). includes(search.toLowerCase())).map((city)=>{
              return( <div style={{"border":"1px solid black","maxWidth":"50%" ,"padding":"10px" ,"marginTop":"10px"}}>{city.city}</div>

              )
           }) 
        }                     
      </center>
    </div>
  )
}
export default Search
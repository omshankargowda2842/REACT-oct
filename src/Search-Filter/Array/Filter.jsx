import React,{useState} from 'react'


const Filter = () => {
    const names =["Omshankar lo","Ganesh si","Santhosh jo","Chandu po","Sai la","Dhamu vajiya","Kiran ka","Dhruva he","Srinu ga","Gangadhar la"]
    const [search,Setsearch]=useState("")
    return (
    <div>
      <center>
        <h4>Enter Name:</h4>
        <input type="text"  placeholder='search' onChange={(e)=>Setsearch(e.target.value)}/>
        {names.filter((name)=>name.toUpperCase().includes(search.toUpperCase())).map((name)=>{
            return(<tr>
                <td>{name}</td>
            </tr>

           
                )
        })}
      </center>
    </div>
  )
}

export default Filter

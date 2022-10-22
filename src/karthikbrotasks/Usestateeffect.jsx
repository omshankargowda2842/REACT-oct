import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./css.css"

const Usestateeffect = () => {
    let [array,setarray] =useState([])
    
    const object=[{
                           name:"Omshankar",
                           age:21,
                           from:"Andhrapradesh",
                           gender:"Male",
                           rollno:101,
                           salary:-1000
                          },
                          {
                            name:"Hemanth",
                            age:21,
                            from:"Karnataka",
                            gender:"Male",
                            rollno:102,
                            salary:-1000
                           },{
                            name:"Lakshmi",
                            age:22,
                            from:"Karnataka",
                            gender:"Female",
                            rollno:103,
                            salary:-4000
                           },
                           {
                            name:"Kavitha",
                            age:22,
                            from:"Karnataka",
                            gender:"Female",
                            rollno:104,
                            salary:23000
                           }
                        ]
                        useEffect(()=>{
                            setarray(object)
                        },[])
  return ( 
    <div className='om'>
              <pre>{JSON.stringify(array)}</pre>
      <table border="1px">
  
        <thead>
            <tr >
            <th className='om1'>Name</th>
            <th className='om1'>Age</th>
            <th className='om1'>Address</th>
            <th className='om1'>Gender</th>
            <th className='om1'>Rollno</th>
            <th className='om1'>Salary</th>
        </tr>
        </thead>
        <tbody>
            {
               array.map((items,index)=>{
                  return   <tr>
                   <td className='om2'>{items.name}</td>
                   <td className='om2'>{items.age}</td>
                   <td className='om2'>{items.from}</td>
                   <td className='om2'>{items.gender}</td>
                   <td className='om2'>{items.rollno}</td>
                   <td className='om2'>{items.salary}</td>
                  </tr>
               }) 
            }
        </tbody>
           </table>
    </div>
  )
}

export default Usestateeffect

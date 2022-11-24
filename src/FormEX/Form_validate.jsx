import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Form.css"

const Form_validate = () => {
const[ Formvalues,SetFormvalues]=useState({
                                          Name:"",
                                          Email:"",
                                          Password:""
                                        })
const [store,Setstore]=useState([]) 
const [formerrors,Setformerrors]=useState({})   
const[issubmit,Setissubmit]=useState(false) 

const updatehandler=(event)=>{
     SetFormvalues({...Formvalues,[event.target.name]:event.target.value})
}
const submithandler=(event)=>{
 event.preventDefault()
 Setissubmit(true)
 Setformerrors(Validate(Formvalues))

}


 
useEffect(()=>{
if( Object.keys(formerrors).length===0 && issubmit){
  const newstore=[...store,Formvalues]
  Setstore(newstore)
  
}
},[formerrors])
const Validate=(values)=>{
  const onlystring=/^[A-Za-z]+$/;
  const errors={}
  if(!values.Name){
  errors.Name='Name is required'
  }else if(!values.Name.match(onlystring)){
    errors.Name='Enter only alphabets'
  }
  if(!values.Password){
    errors.Password='Password is required'
  } else if(values.Password.length>10){
    errors.Password="Password should not exceed 10 Characters"
   }else if(values.Password.length<5){
     errors.Password="Password should be more than 5 characters"
 }
  return errors
  }
  return (    <div> 
      <pre>{JSON.stringify(Formvalues)}</pre>
      <form  onSubmit={submithandler}>
    <div>
     <input name='Name' type="text"  required='required' placeholder='Name' onChange={updatehandler}/>
     <p>{formerrors.Name}</p>
    </div>
    <div>
     <input  name="Email" type="email" required='required'  placeholder='Email'  onChange={updatehandler}/>
     <p>{formerrors.Email}</p>
    </div>
    <div>
     <input name='Password' type="password"  required='required' placeholder='Password'  onChange={updatehandler}/>
     <p>{formerrors.Password}</p>
    </div>
    <div>
      <button type='submit'>Submit</button>
    </div>
    </form>
    <table border='1px'> 
      <thead>
         <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
         </tr>
        </thead>
      <tbody>
        {
          store.map((person)=>{
            return ( 
              <tr>
                <td>{person.Name}</td>
                <td>{person.Email}</td>
                <td>{person.Password}</td>
              </tr>
            )

          })
        }
      </tbody>
    </table>


    </div>
  )
}

export default Form_validate

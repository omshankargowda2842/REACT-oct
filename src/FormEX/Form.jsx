import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
    const[formvalues,SetFormvalues]=useState({
        name:"",
        password:""
    })
    const [formerrors,setFormerrors]=useState({})
    const [issubmit,setIssubmit]=useState(false)
    const [store,setStore]=useState([])

    const updatehandler=(e)=>{
          SetFormvalues({...formvalues,[e.target.name]:e.target.value})
    }
   
    const submithandler=(e)=>{
        SetFormvalues("")
    e.preventDefault()
    e.target.reset()
    console.log(formvalues)
    setFormerrors(validate(formvalues))
    setIssubmit(true)
    const newstore=[...store,formvalues]
    setStore(newstore)
    }

    useEffect( ()=>{
    if(Object.keys(formerrors).length===0 && issubmit){
    console.log(formerrors);
    }
    },[])

    const validate=(values)=>{
        const errors={}
        var onlyletters = /^[A-Za-z]+$/;
        if(!values.name){
            errors.name='username is required'
        }
        else if(!values.name.match(onlyletters)){
            errors.name='enter only alphabets'
        }
        if(!values.password){
            errors.password='password is required'
        }
        else if(values.password.length<6){
            errors.password='password must ne more than 6 numbers'
        }
        else if(values.password.length>10){
            errors.password='password cannot be exceed more than 10 numbers'
        }
        return errors
    }
   
  return (
    <div className='container mt-3'>
        <div className='row'>
  <div className='col col-md-5'>
  <pre>{JSON.stringify(formvalues)}</pre>
        <form onSubmit={submithandler}>
            <div className='form-group'>
            <input type="text"  className='form-control'  name='name' placeholder='name' value={formvalues.name} onChange={updatehandler} style={{"margin-top":"10px"}}/>
            <p className='text-danger'>{formerrors.name}</p>
            </div>
           <div className='form-group'>
           <input type="number"  className='form-control' name="password" placeholder='password' value={formvalues.password} onChange={updatehandler} />
            <p className='text-danger'>{formerrors.password}</p>
           </div>
          
          <button className='btn btn-success btn-sm' onClick={(e)=>SetFormvalues(e.target.reset())}>submit</button>
        </form>
        <table border="1px">
            <thead>
            <tr>
                <th> NAME </th>
                <th> PASSWORD </th>
                </tr>
            </thead>
            <tbody>
               {
                store.map((person)=>{
                    return( <tr>
                        <td>{person.name}</td>
                        <td>{person.password}</td>
                    </tr>

                    )
                })
               }
            </tbody>
           
        </table>
        
        </div>
  </div>
</div>
     
  )
}

export default Form

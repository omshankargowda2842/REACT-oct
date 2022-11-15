import React ,{createContext,useState}from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
 export const store=createContext()
const App1 = () => {
    const[data,Setdata]=useState(0)
   
  return (
    <div>
<store.Provider value={[data,Setdata]}>
        <center>
      <ComponentA/>
      <ComponentB/>
      <button onClick={(e)=>{ Setdata(data+1)}}>increment</button>
      <button onClick={(e)=>{ Setdata(data-1)}}>decrement</button>
      </center>
      </store.Provider>
    </div>
  )
}

export default App1


import React from 'react'
import Count from './Count'
import Display from './Display'
import { createContext,useState } from 'react'
 export const store=createContext()

const App1 = () => {
    const[data,Setdata]=useState([{
                                    Name:"omshankar",
                                  },
                               {
                                Name:"kiran"
                               },
                               {
                                Name:"sai"
                               },
                               {
                                Name:"chandu"
                               },
                               {
                                Name:"chaitanya ji"
                               },
                               {
                                Name:"santosh jo"
                               }



                                ])
  return (
    <div>
     <store.Provider value={[data,Setdata]}>
     <center>
        <Count/>
        <Display/>
    </center>
     </store.Provider>

        
     
    </div>
  )
}

export default App1

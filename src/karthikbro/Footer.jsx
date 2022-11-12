import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';


const Footer = () => {
 const heading=[
          { 
             head:"Vegefoods",
             menu:"shop",
             help:"shipping information",
             haq:{
              haqitem:"203 Fake St. Mountain View, San Francisco, California, USA",
              icon:"https://toppng.com/uploads/preview/location-png-icon-location-icon-png-free-11562933803vththezlcl.png"
             }
           },

          { 
             head:"menu",
             menu:"About",
             help:"Return & Exchange",
             haq:{
              haqitem:"+2 392 3929 210",
              icon:"https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png"
             }
          },

          { 
             head:"Help",
             menu:"Journal",
             help:"Terms & Conditions",
             haq:{
              haqitem:"info@yourdomain.com",
              icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPc253vNJyaQDpFvwRvRRL_GLAHzg-g69Gvg&usqp=CAU"
             }
             
          },

          { 
             head:"Have a Question",
             menu:"Contact us",
             help:"Privacy & Policy"
            }
                     ]
  return (
   <div>
     <div className="contain">
      {
        heading.map((items)=>{
          return <div className='column '>
            <div className='gutter'>
              <h2>{items?.head}</h2>
              {
                items?.head === "Vegefoods"?<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>:""
              }
              {
                items?.head === "menu"?heading.map(menu=><p>{menu.menu}</p>):""
              }
              {
                items?.head === "Help"?heading.map(help=><p>{help.help}</p>):""
              }
              {
                items?.head === "Have a Question"?heading.map(lakshmi=><div  className='icons'><img src={lakshmi.haq?.icon} height="30px" alt="..."/><p> {lakshmi.haq?.haqitem}</p></div>):""
              }
              
            </div>
          </div>
        })
      }
      
      </div>
     <center> <p >Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p></center>
     
    </div>
  )
}

export default Footer

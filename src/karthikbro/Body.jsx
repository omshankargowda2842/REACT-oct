import React from 'react'
import "./Body.css"
import Footer from './Footer'
const Body = () => {
  return (<div className='main'>
    <div className='address'>
      <h4>Address: 198 West 21th Street, Suite 721 New York NY 10016</h4>
     <h4>Phone: <a href="tel://1234567920"> + 1235 2355 98</a></h4>
      <h4>Email:<a href="mailto:info@yoursite.com">  info@yoursite.com </a></h4>
      <h4>Website yoursite.com</h4>
    </div>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7776.298677231352!2d77.70124909999997!3d12.96229419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1668248663969!5m2!1sen!2sin" width="650" height="600"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form>
            <input  className='inputs' type="text" placeholder='Your Name' />
            <input className='inputs' type="email"  placeholder='Your Email'/>
            <input className='inputs' type="text" placeholder='Subject' />
            <textarea className='inputs' name=""   placeholder='Message' style={{"height":"200px"}} id="" cols="23" rows="5"></textarea>
            <button>Send Message</button>
        </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Body

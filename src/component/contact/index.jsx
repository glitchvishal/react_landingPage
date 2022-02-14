import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
        <h3>Contact Us</h3>
        <div className="contactInput">
            <input type="text" placeholder="Your Full Name"/>
        </div>
        <div className="contactInput">
            <input type="email" placeholder="example@gmail.com"/>
            <a href="#">Send</a>
        </div>
    </div>
  )
}

export default Contact
import React from 'react'
import './about.css'


function About({image, title, buttons}) {
  return (
    <>
        <div className="about">
            <div className="aboutImg">
                <img src = {image} alt="" />
            </div>
            <div className="aboutText">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, fugiat nesciunt magnam quisquam consequatur quos deleniti, fugit quae sint deserunt odio tempora? Libero quasi minus qui laborum saepe aperiam blanditiis.
                Quas odit amet magni doloremque illo at rerum quia maiores dolor, libero tenetur fugiat consequatur expedita ut aliquid consequuntur. Consectetur velit quibusdam voluptatem ea? Ratione nulla unde ipsum doloremque vel.</p>
                <button className="buttons" >{buttons}</button>
            </div>
            
        </div>
    </>
  )
}

export default About
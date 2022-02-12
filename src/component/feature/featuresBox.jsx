import React from 'react'
import './featureBox.css'

function Features({image, title}) {
  return (
    <>
     <div className="box">
       <div className="img">
         <img src={image}/>
       </div>
       <div className="text">
         <h2> { title } </h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis voluptates </p>
       </div>
     </div>
    </>
  )
}

export default Features;
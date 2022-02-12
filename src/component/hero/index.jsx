import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai';
import "./main.css"

const Hero = () => {
  return (
    <>
    <div className="main">
        <div className="content">
            <h1 className="name"><span>Launch Your Page</span> With Confident And Creativity</h1>
            <p className="description">lorem ipsum dolor sit amet, consectetur adip uihsui hisdguyi</p>
            <a href="#" className="btn">Download<AiOutlineArrowDown /></a>
        </div>
    </div> 
    </>
  )
}

export default Hero;
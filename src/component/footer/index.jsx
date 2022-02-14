import React from 'react'
import Social from '../social'
import Logo from '../images/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h2>Thank You!</h2>
        <div className='footerContent'>
            <div className="blockA">
                <img className='logo' src={Logo} alt="logo" />
                <p><a href="#">Home</a><span>|</span><a href="#">Blog</a><span>|</span><a href="#">Pricing</a><span>|</span><a href="#">Fqa</a><span>|</span><a href="#">Team</a></p>
                <p>copyright &copy; 2020</p>
            </div>
            <div className="blockB">
                <h5>ABOUT</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus molestias sunt consequatur vel, pariatur accusamus nihil odio ipsum eaque doloribus rerum? Repellendus molestiae, atque, sunt, ut esse nihil illo quibusdam suscipit officiis possimus incidunt minima.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam distinctio accusamus sit. Amet, odio recusandae minus id nihil maxime perferendis.
                </p>
            </div>
            <div className="blockC">
                <h5>CATEGORY</h5>
                <p>Reactjs</p>
                <p>Angular</p>
                <p>Html/Css</p>
                <p>Frontend</p>
                <p>Backend</p>
            </div>
        </div>
        <span className="span"><hr /></span>
        
        <div className="blockD">
        <div className="contactInput">
            <input type="text" placeholder="Your Message"/>
            <a href="#">Send</a>
        </div>
        <Social />
        </div>
        
    </div>
  )
}

export default Footer
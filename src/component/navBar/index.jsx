import React,{ useState, useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import './navbar.css';
import Social from '../social'
import logo from '../images/logo.png'


const Navbar = () => {

    const [Nav, setNav] = useState(false)
    const [phone, setPhone] = useState(false)


    useEffect(() => {
        window.addEventListener('scroll', () => setNav(window.scrollY >= 50))
        window.addEventListener('resize', () => setPhone(window.innerWidth < 990))
        setPhone(window.innerWidth < 990)
    }, [])

  return (
    <> 
        <nav className={ Nav ? 'nav active' : 'navbar'}>
            <img src={logo} alt="logo" />
            <ul className="navList">
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Features
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
            </ul>

            <div className="hamburger-menu">
                    <GiHamburgerMenu />
            </div>
            {/* { !phone && <Social /> } */}

        </nav>
    </>
  )
}

export default Navbar;


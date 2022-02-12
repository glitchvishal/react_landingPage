import React from 'react'
import './social.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

function Social() {
  return (
    <>
    <div className="social">
                <ul className="socialIcon">
                    <li>
                        <a href="#dfljkngijh" target="_blank"><FaFacebookSquare /></a>
                    </li>
                    <li>
                        <a href="#dsnmsdfhj" target="_blank"><FaInstagramSquare /></a>
                    </li>
                    <li>
                        <a href="#dwufhsdu" target="_blank"><FaYoutubeSquare /></a>
                    </li>
                </ul>
            </div>
    </>
  )
}

export default Social
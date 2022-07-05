import React from 'react'
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa'
import './footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">Powered by DN</div>
            <div className="footer-right">
                <a href="#" className="footer-icon">
                    <FaGithub />
                </a>
                <a href="#" className="footer-icon">
                    <FaFacebook />
                </a>
                <a href="#" className="footer-icon">
                    <FaYoutube />
                </a>
            </div>
        </div>
    )
}

export default Footer

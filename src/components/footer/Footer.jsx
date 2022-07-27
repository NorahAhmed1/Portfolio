import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>NORAH ALSALAMAH</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Certifications</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/norah-ahmed-alsalamah-8a0167209/" target="_blank"> <FaLinkedinIn /> </a>
        <a href="https://github.com/NorahAhmed1" target="_blank"> <FiGithub /> </a>
        <a href="https://twitter.com/norahahmedS" target="_blank"> <IoLogoTwitter /> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NORAH ALSALAMAH. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
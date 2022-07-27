import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/no-back.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Norah Alsalamah</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="logo">
          <img src={LOGO} alt="LOGO" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
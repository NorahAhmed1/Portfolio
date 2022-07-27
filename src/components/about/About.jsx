import React from 'react'
import './about.css'
import ME from '../../assets/logo.png'
import {TbCertificate} from 'react-icons/tb'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Education</h5>
              <small>King Saud University</small>
              <br />
              <small>Software Engineering</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Experiance</h5>
              <small>Trainee at </small>
              <br />
              <small>SAMI Advanced Electronics</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Awards</h5>
              <small>5+ Honors and Awards</small>
            </article>
          </div>

          <p>
          Efficient Software Engineer with high-analysis, communication and problem solving skills eager to bring value to a quality-focused team. Seeking an opportunity to leverage my talents as a software engineer in addition to real world, hands-on experience to further develop acquired skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
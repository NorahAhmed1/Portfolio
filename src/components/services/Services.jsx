import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'v>
      <h5>Licenses and</h5>
      <h2>Certifications</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>Technical Certifications</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing smart device applications "Appmachine"</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AutoCAD Program</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cybersecurity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>PowerPoint Essential Training (Office 365/Microsoft 365)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Word Essential Training (Office 365/Microsoft 365)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Excel Essential Training (Office 365/Microsoft 365)</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVOLOPMENT */}
        <article className='services'>
          <div className="service__head">
            <h3>Personal Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>CERTIFIED TRAINER</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Member of the Distinguished and Talented Students Program</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intellectual protection and patents</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Speech and influencing skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Innovation concepts and creativity skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Speaking Up At Work</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Speaking Confidently and Effectively</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Negotiation Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>How to Get Things Done Ahead of Deadlines</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developing Your Emotional Intelligence</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communication within Teams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Expert Tips for Answering Common Interview Questions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Decision-Making Strategies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Critical Thinking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communicating with Confidence</p>
            </li>
          </ul>
        </article>
        {/* END OF Personal Development */}
        <article className='services'>
          <div className="service__head">
            <h3>Volunteer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adminstrative commety at KSU</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Leader of Cultural and Social Club, Collage of Computer and Information Sciences</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Leader of Quality Committee in the Classical Arabic Club</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Member of the Humen Resorces team in Student Partnership Program</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Volenteer at different companies and centers</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services
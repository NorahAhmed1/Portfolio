import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Technical Skills</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>DataBase Management</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF TECHNICAL */}
        <div className="experiance__backend">
        <h3>Soft Skills</h3>
          <div className="experiance__content">
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Team Leadership</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Teamwork</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Adaptability</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Public Speaking</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Presentation Skills</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
            <article className='experiance__details'>
              <BsPatchCheckFill className='experiance__details-icon' />
              <div>
                <h4>Communication skills</h4>
                <small className='text-light'>Experianced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/wassl.png'
import IMG2 from '../../assets/lammah-b.png'
import IMG3 from '../../assets/monqeth.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Wassel | وصْل</h3>
          <small>A web application for businesses to
manage their job offers, and for job
seekers to browse available jobs and
apply.</small>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Lammah | لمّة</h3>
          <small>A cross platform mobile application
for users who wish to rent products
such as games, trampolines, and food
trucks, or even buy some food and
drinks for an occasion and have a
good time.
</small>
          <div className="portfolio__item-cta">
            <a href="https://twitter.com/Saudi_EUni/status/1526989607589580800?s=20&t=OkFh1k-n7po3ck3dNwegtw" className='btn' target='_blank'>Award</a>
            <a href="https://youtu.be/eAUsTcKYl70" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Monqeth | منقذ</h3>
          <small>A mobile application that promotes
accurate knowledge about first aid
using visual interactive technology,
specifically augmented reality (AR),
and a fun engaging user experience.
</small>
          <div className="portfolio__item-cta">
            <a href="https://twitter.com/Saudi_EUni/status/1529736793746296837?s=20&t=hGQp5f1YgHNi4PAF6jdldA" className='btn' target='_blank'>Award</a>
            <a href="https://youtu.be/04czt-gdmE4" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './testimonials.css'
import AVT from '../../assets/ksu.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>KSU Important</h5>
      <h2>Courses</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>INTRODUCTION TO PYTHON</h5>
            <small className='client__review'>
            Part of the Introduction to Software Engineering course.

            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>ARTIFICIAL INTELLIGENCE (AI)</h5>
            <small className='client__review'>
            Selected Topics in Software Engineering.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>HUMAN-COMPUTER INTERACTION</h5>
            <small className='client__review'>
            Principles of UX/UI designing and Meeting the
User's Needs.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>Web Application Development</h5>
            <small className='client__review'>
            SWE 381
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>Software Security Engineering</h5>
            <small className='client__review'>
            SWE 314
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>Software Requirements Engineering</h5>
            <small className='client__review'>
            SWE 312
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>Software Quality Assurance</h5>
            <small className='client__review'>
            SWE 333
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>Software Design and Architecture</h5>
            <small className='client__review'>
            SWE 321
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT} alt="Avatar" />
          </div>
          <h5 className='client__name'>Computer Programming -2-</h5>
            <small className='client__review'>
            CSC 113
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials
import React from 'react'
import Image from '../assets/avatar.svg'
import {FaGithub, FaYoutube,FaFacebook ,FaInstagram,FaLinkedin, FaTwitter} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'


const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <h1 
             data-aos="fade-up"
             data-aos-once="true"
             data-aos-duration="600"
            className="text-[55px] font-bold leading-[0.8] lg:text-[80px]" >ANOOP <span>SIVAKUMAR</span></h1>
            <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="700"
             className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
               <span className="mr-4 text-white">I am a</span>
               <TypeAnimation
               sequence={[
                'Developer..',
                2000,
                'Photographer..',
                2000,
                'Youtuber..',
                2000,
               ]}
               speed={50}
               className="text-accent"
               warpper='span'
               repeat={Infinity}
               />
            </div>
            <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              Hi, I Am Anoop Sivakumar, A Video Creator Here For You To Explore. I Make Informative Tech Tutorial Videos 
              On My Magic Coverzz Tech And Tips Youtube Channel . I Love Having The Opportunity To Share My Passions And Thoughts With My Viewers.
            </p>
            <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="900"
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg"> Contact Me</button>
              <a href="#" className="text-gradient btn-link">My Portfolio</a>
            </div>

            <div 
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://www.youtube.com/channel/UCOdlF0i06ZsNJqD_KfmEerw"> <FaYoutube/> </a>
              <a href="https://www.facebook.com/AnoopSivakumar10/"> <FaFacebook/> </a>
              <a href="https://www.instagram.com/AnoopSivakumar10/"> <FaInstagram/> </a>
              <a href="https://twitter.com/anoopsivakumar7"> <FaTwitter/> </a>
              <a href="https://www.linkedin.com/in/anoopsivakumar/"> <FaLinkedin/> </a>
              <a href="https://github.com/AnoopSivakumar"> <FaGithub/> </a>
            </div>
          </div>
         <div 
         data-aos="fade-down"
         data-aos-once="true"
         data-aos-duration="600"
         className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]  " >
          <img src={Image} alt="" />
         </div>

        </div>
      </div>

      </section>
  )
}

export default Banner
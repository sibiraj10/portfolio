import React from 'react'
import HeroImg from '../assets/hero.png'
import {  AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
  const config = {
    name:"Sibiraj",
    role:"Im Front-end developer",
    social:{
      github:"https://github.com/sibiraj10",
      linkedin:"http://linkedin.com/in/sibi-raj-601413309"
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 justify-center py-20 bg-primary items-center'>
        <div className='md:w-1/2'>
            <h1 className='text-white text-7xl font-hero-font'>Hi,<br/>Im {config.name}  <span className='text-black'>S</span><p className='text-3xl'>{config.role}</p></h1>
            <div className='flex space-x-2 py-4 justify-center md:justify-start'>
                <a href={config.social.github} className='hover:text-white' ><AiOutlineGithub size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} alt="" />
    </section>
  )
}

export default Hero
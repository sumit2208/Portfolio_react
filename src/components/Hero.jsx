import React from 'react'
import PIc from '../assets/sumit.png'
import { motion } from "framer-motion"
function Hero() {
    return (
        <div className='  pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5}} className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>SUMIT GUPTA</motion.h1>
                        <motion.span whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5}} className='text-4xl bg-gradient-to-r from-slate-400 via-slate-600 to-teal-950 text-transparent bg-clip-text mb-2'>Frontend Developer</motion.span>

                        <motion.p whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5}} className='font-thin mb-4'>I am a passionate frontend web developer with a strong foundation in building responsive, user-friendly websites and web applications. My expertise lies in crafting intuitive and visually appealing interfaces using modern web technologies like HTML, CSS, JavaScript, and popular frameworks such as React. I thrive on transforming ideas into seamless digital experiences, ensuring that every detail contributes to an engaging and accessible user experience. With a keen eye for design and a commitment to clean, efficient code, I am dedicated to delivering high-quality work that meets both client and user needs.</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center'>
                        <motion.img whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5}} src={PIc} alt=""  />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import projects from '../assets/Projectdata'
import { motion } from "framer-motion"


function Projects() {
  return (
    <div>
      <div className='  border-b-2 border-neutral-600 text-2xl mb-20 mt-10 flex item-center justify-center py-2 '>
        <span style={{ fontWeight: '800' }}>PROJECTS</span>
      </div>


      <div className='grid grid-cols-1 gap-20 md:grid-cols-2 mb-20'>
        {projects.map((project) => (
          <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5}}  key={project.id} className='flex flex-col 3d text-black p-6 rounded-3xl shadow bg-slate-950' style={{ color: 'white' }}>
            <div>
              <h1 style={{ color: 'white', fontWeight: '800' }}>{project.title}</h1>
              <hr />
            </div>
            <div className='flex-grow'>
              <img src={project.src} className='rounded-2xl mt-5 mb-5' alt="Coming" />
              <p className='mb-6'>{project.description}</p>
            </div>

            <a href={project.link} className='text-sky-950   shadow text-center  bg-slate-900 rounded-2xl p-3 mt-auto hover:bg-white  '>
              Live Link
            </a>


        

          </motion.div>
          
        ))}
      </div>







    </div>
  )
}

export default Projects

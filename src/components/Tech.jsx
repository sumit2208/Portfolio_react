import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { motion } from "framer-motion"

function Tech() {
  return (
    <div>
      <div className='  border-b-2 border-neutral-600 text-2xl mb-20 mt-10 flex item-center justify-center py-2 '> 
            <span style={{fontWeight:'800'}}>TECH STACK</span>
         </div>
         <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:0.5}} className='  flex flex-wrap py-5 mb-20 text-8xl justify-around gap-5 '>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <FaBootstrap className='text-purple-500'/> 
            </div>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <FaCss3 className='text-blue-600'/> 
            </div>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <FaHtml5 className='text-orange-600'/>                       
            </div>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <FaReact className='text-cyan-400'/>
            </div>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <SiJavascript className='text-yellow-400'/>
            </div>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <SiRedux className='text-cyan-500'/> 
            </div>
            <div className='p-5   rounded-3xl shadow bg-slate-950'  >

            <RiTailwindCssFill className='text-cyan-500'/> 
            </div>
         </motion.div>
    </div>
  )
}

export default Tech

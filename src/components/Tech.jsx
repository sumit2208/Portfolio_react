import React, { useState, useEffect } from 'react'
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"

function Tech() {
  const [hoveredTech, setHoveredTech] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const techStack = [
    {
      name: 'HTML5',
      icon: FaHtml5,
      color: 'text-orange-500',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      shadowColor: 'shadow-orange-500/25',
      description: 'Semantic Markup',
      level: '95%'
    },
    {
      name: 'CSS3',
      icon: FaCss3,
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      shadowColor: 'shadow-blue-500/25',
      description: 'Modern Styling',
      level: '90%'
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-400/20 to-amber-500/20',
      borderColor: 'border-yellow-400/30',
      shadowColor: 'shadow-yellow-400/25',
      description: 'ES6+ Features',
      level: '88%'
    },
    {
      name: 'React',
      icon: FaReact,
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-400/20 to-blue-500/20',
      borderColor: 'border-cyan-400/30',
      shadowColor: 'shadow-cyan-400/25',
      description: 'Component Library',
      level: '92%'
    },
    {
      name: 'Redux',
      icon: SiRedux,
      color: 'text-purple-500',
      bgGradient: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'border-purple-500/30',
      shadowColor: 'shadow-purple-500/25',
      description: 'State Management',
      level: '85%'
    },
    {
      name: 'Bootstrap',
      icon: FaBootstrap,
      color: 'text-indigo-500',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-500/30',
      shadowColor: 'shadow-indigo-500/25',
      description: 'UI Framework',
      level: '87%'
    },
    {
      name: 'Tailwind CSS',
      icon: RiTailwindCssFill,
      color: 'text-teal-400',
      bgGradient: 'from-teal-400/20 to-cyan-500/20',
      borderColor: 'border-teal-400/30',
      shadowColor: 'shadow-teal-400/25',
      description: 'Utility-First CSS',
      level: '93%'
    }
  ]

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Premium Header Section */}
      <div className="relative mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50 blur-3xl"></div>
        <div className="relative text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10"
          >
            <span className="px-8 py-3 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-widest">
              TECH STACK
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 mb-6 tracking-tight"
          >
            TECHNOLOGIES
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Cutting-edge tools and frameworks that power modern web development
          </motion.p>
        </div>
      </div>

      {/* Premium Tech Grid */}
      <div 
        className="relative"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic background effect */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        ></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto px-6 pb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {/* Main Tech Card */}
                  <div className={`
                    relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 
                    backdrop-blur-xl border ${tech.borderColor} 
                    transform transition-all duration-500 ease-out
                    hover:scale-110 hover:-translate-y-4 hover:rotate-2
                    ${hoveredTech === index ? `shadow-2xl ${tech.shadowColor}` : 'shadow-lg shadow-black/25'}
                    cursor-pointer overflow-hidden
                  `}>
                    
                    {/* Animated background gradient */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-br ${tech.bgGradient} 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl
                    `}></div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Tech Icon */}
                    <div className="relative text-center">
                      <IconComponent className={`
                        ${tech.color} text-6xl md:text-7xl mx-auto mb-4
                        transition-all duration-500 ease-out
                        group-hover:scale-110 group-hover:drop-shadow-lg
                        ${hoveredTech === index ? 'animate-pulse' : ''}
                      `} />
                      
                      {/* Tech Name */}
                      <h3 className="text-white font-bold text-lg mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {tech.name}
                      </h3>
                      
                      {/* Tech Description */}
                      <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0">
                        {tech.description}
                      </p>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="h-1 bg-gray-700 rounded-full mx-4 mb-4">
                        <div 
                          className={`h-full bg-gradient-to-r ${tech.bgGradient} rounded-full transition-all duration-1000 delay-300`}
                          style={{ width: hoveredTech === index ? tech.level : '0%' }}
                        ></div>
                      </div>
                      <div className="text-center text-xs text-gray-400 mb-2">
                        {tech.level}
                      </div>
                    </div>

                    {/* Floating particles */}
                    {hoveredTech === index && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 ${tech.color} rounded-full animate-ping`}
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                              animationDelay: `${Math.random() * 1}s`,
                              animationDuration: `${1 + Math.random()}s`
                            }}
                          ></div>
                        ))}
                      </>
                    )}
                  </div>

                  {/* Tech Label (Always Visible) */}
                  <div className="mt-6 text-center">
                    <span className="text-gray-300 font-medium text-sm tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Tech
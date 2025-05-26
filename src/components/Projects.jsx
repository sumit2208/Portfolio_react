import   { useState } from 'react'
import { motion } from "framer-motion"
import projects from "../assets/Projectdata";
import { ExternalLink, Github, Eye, Code, Zap } from 'lucide-react'

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  
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
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'from-green-500/20 to-emerald-500/20 border-green-500/30'
      case 'Beta': return 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30'
      case 'Development': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      default: return 'from-gray-500/20 to-slate-500/20 border-gray-500/30'
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
            className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10"
          >
            <span className="px-8 py-3 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-widest">
              PORTFOLIO
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 mb-6 tracking-tight"
          >
            FEATURED PROJECTS
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Showcasing innovative solutions that push the boundaries of modern web development
          </motion.p>
        </div>
      </div>

      {/* Dynamic Background */}
      <div 
        className="relative"
        onMouseMove={handleMouseMove}
      >
        <div 
          className="absolute inset-0 opacity-10 transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 60%)`
          }}
        ></div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto px-6 pb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Main Project Card */}
                <div className={`
                  relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 
                  backdrop-blur-xl border border-white/10 
                  transform transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2
                  ${hoveredProject === index ? 'shadow-2xl shadow-purple-500/25' : 'shadow-xl shadow-black/25'}
                  cursor-pointer
                `}>
                  
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6 z-10">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getStatusColor(project.status)} backdrop-blur-sm border text-xs font-bold text-white tracking-wider`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.src} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-4">
                        <a 
                          href={project.link}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.github}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="relative p-8">
                    {/* Category Tag */}
                    <div className="mb-4">
                      <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-slate-800/50 text-gray-300 rounded-full border border-slate-700/50 hover:border-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a 
                        href={project.link}
                        className="flex-1 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                      <a 
                        href={project.github}
                        className="flex items-center justify-center px-6 py-3 bg-slate-800/50 text-gray-300 font-bold rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/30 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        <Code className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Animated Glow Effect */}
                  {hoveredProject === index && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 opacity-50 animate-pulse pointer-events-none"></div>
                  )}

                  {/* Floating Particles */}
                  {hoveredProject === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping"
                          style={{
                            left: `${15 + Math.random() * 70}%`,
                            top: `${15 + Math.random() * 70}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${1.5 + Math.random()}s`
                          }}
                        ></div>
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none"></div>
    </div>
  )
}

export default Projects
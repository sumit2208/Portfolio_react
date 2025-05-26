import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { Code, Menu, X, Sparkles, Download } from 'lucide-react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    })
  }

 
  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZPGVKFkzbDXQnVvWpLNFwQlNkzRvwLsRmMgDnqgQNwhhpqnzNgTlhtXcdRCbhhNkdJbCP",
      color: "hover:text-red-400",
      bgGradient: "hover:from-red-500/20 hover:to-pink-500/20",
      label: "Email"
    },
    {
      icon: FaGithub,
      href: "https://github.com/sumit2208",
      color: "hover:text-gray-300",
      bgGradient: "hover:from-gray-500/20 hover:to-slate-500/20",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sumit-gupta-543ba1244/",
      color: "hover:text-blue-400",
      bgGradient: "hover:from-blue-500/20 hover:to-cyan-500/20",
      label: "LinkedIn"
    }
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 backdrop-blur-xl bg-slate-950/80 border-b border-white/10' 
            : 'py-6 bg-transparent'
        }`}
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic background effect */}
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)`
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            {/* Logo/Brand */}
            <motion.div 
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  Developer
                </span>
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs text-gray-400 font-medium">Portfolio</span>
                </div>
              </div>
            </motion.div>

            

            {/* Desktop Social Links & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 
                        flex items-center justify-center text-gray-400 ${social.color}
                        hover:scale-110 hover:border-purple-500/30 transition-all duration-300
                        group relative overflow-hidden
                      `}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                      whileHover={{ rotate: 5 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                      <IconComponent className="w-4 h-4 relative z-10" />
                    </motion.a>
                  )
                })}
              </div>

              {/* Download CV Button */}
              {/* <motion.button
                className="ml-4 flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              > */}
                {/* <Download href=" " className="w-4 h-4 mr-2 group-hover:animate-bounce" /> */}
                {/* <span className="text-sm">Resume</span> */}
              {/* </motion.button> */}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Decorative Line */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu Content */}
        <motion.div
          className="absolute top-20 left-4 right-4 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
          initial={{ y: -20, opacity: 0, scale: 0.95 }}
          animate={{ 
            y: isMobileMenuOpen ? 0 : -20, 
            opacity: isMobileMenuOpen ? 1 : 0,
            scale: isMobileMenuOpen ? 1 : 0.95 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6 space-y-6">
            

            {/* Mobile Social Links */}
            <div className="border-t border-slate-700/50 pt-6">
              <p className="text-sm text-gray-400 mb-4 font-medium">Connect with me</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 
                        flex items-center justify-center text-gray-400 ${social.color}
                        hover:scale-110 hover:border-purple-500/30 transition-all duration-300
                        group relative overflow-hidden
                      `}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isMobileMenuOpen ? 1 : 0, scale: isMobileMenuOpen ? 1 : 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}></div>
                      <IconComponent className="w-5 h-5 relative z-10" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <motion.button
              className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Navbar
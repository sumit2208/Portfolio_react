import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import PIc from '../assets/sumit.jpg'
import { ChevronDown, Sparkles, Code, Zap, Download, Mail, Github, Linkedin } from 'lucide-react'

function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [currentRole, setCurrentRole] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isTyping, setIsTyping] = useState(true)

    const roles = [
        "Frontend Developer", 
        "React Developer" 
    ]

    // Typewriter effect for roles
    useEffect(() => {
        let timeout
        const currentRoleText = roles[currentRole]
        
        if (isTyping) {
            if (displayText.length < currentRoleText.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRoleText.slice(0, displayText.length + 1))
                }, 100)
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000)
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRoleText.slice(0, displayText.length - 1))
                }, 50)
            } else {
                setCurrentRole((prev) => (prev + 1) % roles.length)
                setIsTyping(true)
            }
        }

        return () => clearTimeout(timeout)
    }, [displayText, isTyping, currentRole, roles])

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
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.8
            }
        }
    }

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0, rotate: -10 },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 1.2
            }
        }
    }

    

    return (
        <div 
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0">
                {/* Animated gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Mouse-following gradient */}
                <div 
                    className="absolute inset-0 opacity-30 transition-all duration-1000 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
                    }}
                ></div>

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-ping opacity-40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid lg:grid-cols-2 gap-16 items-center min-h-screen"
                >
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Greeting Badge */}
                        <motion.div
                            variants={textVariants}
                            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10"
                        >
                            <Sparkles className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
                            <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wider">
                                WELCOME TO MY PORTFOLIO
                            </span>
                        </motion.div>

                        {/* Main Title */}
                        <motion.div variants={textVariants} className="space-y-4">
                            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight leading-none">
                                SUMIT
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                                    GUPTA
                                </span>
                            </h1>
                        </motion.div>

                        {/* Dynamic Role with Typewriter Effect */}
                        <motion.div variants={textVariants} className="h-20 flex items-center">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                                    <Code className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">I'm a</p>
                                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                        {displayText}
                                        <span className="animate-pulse text-cyan-400">|</span>
                                    </h2>
                                </div>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div variants={textVariants}>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                                Passionate about crafting exceptional digital experiences through cutting-edge frontend technologies. 
                                I transform innovative ideas into stunning, responsive web applications that captivate users and 
                                drive business success. With expertise in modern frameworks and a keen eye for design, 
                                I deliver pixel-perfect solutions that exceed expectations.
                            </p>
                        </motion.div>

                        

                        {/* CTA Buttons */}
                        <motion.div variants={textVariants} className="flex flex-wrap gap-4">
                            <button className="group flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                                Download CV
                            </button>
                            <button className="group flex items-center px-8 py-4 bg-slate-800/50 text-gray-300 font-bold rounded-2xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/30 hover:text-white transition-all duration-300 hover:scale-105">
                                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                                Get In Touch
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={textVariants} className="flex space-x-4">
                            {[Github, Linkedin, Mail].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div> 

                    {/* Right Content - Profile Image */}
                    <motion.div variants={imageVariants} className="relative">
                        <div className="relative">
                            {/* Animated rings around image */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 animate-spin-slow"></div>
                            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-spin-slow-reverse"></div>
                            
                            {/* Main image container */}
                            <div className="relative p-8">
                                <div className="relative overflow-hidden rounded-full bg-gradient-to-br from-slate-800 to-slate-900 p-2">
                                    <img 
                                        src={PIc} 
                                        alt="Sumit Gupta"
                                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
                                    />
                                    
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/50 via-transparent to-cyan-500/50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            {/* Floating tech icons */}
                            {[
                                { icon: '⚛️', position: 'top-10 right-10' },
                                { icon: '🎨', position: 'bottom-10 left-10' },
                                { icon: '⚡', position: 'top-1/2 right-0' },
                                { icon: '🚀', position: 'bottom-0 right-1/3' }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${item.position} w-16 h-16 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-2xl animate-float hover:scale-110 transition-transform duration-300`}
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
            >
                <span className="text-sm mb-2 tracking-wider">SCROLL DOWN</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </motion.div>

            {/* Custom CSS for additional animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
                .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 15s linear infinite;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

export default Hero
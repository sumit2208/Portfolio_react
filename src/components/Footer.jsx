import React, { useState, useEffect } from 'react'
import PIc from '../assets/sumit.jpg'

function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
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
      name: 'GitHub',
      url: 'https://github.com/sumit2208',
      icon: '⚡',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sumit-gupta-543ba1244/',
      icon: '💼',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZPGVKFkzbDXQnVvWpLNFwQlNkzRvwLsRmMgDnqgQNwhhpqnzNgTlhtXcdRCbhhNkdJbCP',
      icon: '✉️',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="relative">
      {/* Premium Header Section */}
      <div 
        className={`relative overflow-hidden transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="relative px-8 py-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-1 mb-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/10">
              <span className="px-6 py-2 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wider">
                PERSONAL TOUCH
              </span>
            </div>
            
            <div className="relative">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-300 mb-4 tracking-tight">
                LET'S CONNECT
              </h2>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to build something extraordinary together? Let's turn your vision into reality.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Footer */}
      <footer 
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic background effect */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Section */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                  <img 
                    src={PIc} 
                    className="relative w-20 h-20 rounded-2xl object-cover border-2 border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-300" 
                    alt="Sumit Gupta" 
                  />
                </div>
                <div className="ml-6">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    Sumit Gupta
                  </h3>
                  <p className="text-purple-400 font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <span className="text-white font-bold">📱</span>
                  </div>
                  <a 
                    href="tel:9022445584" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
                  >
                    +91 9022445584
                  </a>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <a 
                    href="mailto:sg442754@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium"
                  >
                    sg442754@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-2xl bg-gradient-to-br ${social.color} opacity-90 hover:opacity-100 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                  <div className="relative text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{social.name}</h4>
                    <p className="text-white/80 text-sm">Connect with me</p>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Premium Divider */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="px-6 py-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-full border border-purple-500/30">
                <div className="flex space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/10">
              <span className="text-gray-400">©</span>
              <span className="text-gray-300 font-medium">2024 Sumit Gupta</span>
              <span className="text-gray-400">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                All Rights Reserved
              </span>
            </div>
            
            <p className="mt-6 text-gray-500 text-sm max-w-md mx-auto">
              Crafted with passion and precision. Built to inspire and innovate.
            </p>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
      </footer>
    </div>
  )
}

export default Footer
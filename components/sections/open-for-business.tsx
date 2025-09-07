"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function OpenForBusiness() {
  const { open: openContactModal } = useContactModal()
  
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Abstract gradient background */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main gradient */}
            <linearGradient id="flow-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0891B2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0E7490" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Secondary gradient */}
            <linearGradient id="flow-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00E6FB" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2DE1FC" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
            </linearGradient>
            
            {/* Radial gradient for glow effect */}
            <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00E6FB" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
            </radialGradient>
            
            {/* Blur filter */}
            <filter id="blur-filter">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
            </filter>
          </defs>
          
          {/* Animated flowing shapes */}
          <motion.path
            d="M0,540 Q480,400 960,540 T1920,540 L1920,1080 L0,1080 Z"
            fill="url(#flow-gradient-1)"
            filter="url(#blur-filter)"
            initial={{ d: "M0,540 Q480,400 960,540 T1920,540 L1920,1080 L0,1080 Z" }}
            animate={{ 
              d: [
                "M0,540 Q480,400 960,540 T1920,540 L1920,1080 L0,1080 Z",
                "M0,500 Q480,600 960,500 T1920,500 L1920,1080 L0,1080 Z",
                "M0,540 Q480,400 960,540 T1920,540 L1920,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M0,400 Q480,200 960,400 T1920,400 L1920,1080 L0,1080 Z"
            fill="url(#flow-gradient-2)"
            filter="url(#blur-filter)"
            initial={{ d: "M0,400 Q480,200 960,400 T1920,400 L1920,1080 L0,1080 Z" }}
            animate={{ 
              d: [
                "M0,400 Q480,200 960,400 T1920,400 L1920,1080 L0,1080 Z",
                "M0,350 Q480,450 960,350 T1920,350 L1920,1080 L0,1080 Z",
                "M0,400 Q480,200 960,400 T1920,400 L1920,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Floating orbs */}
          <motion.circle
            cx="200"
            cy="300"
            r="150"
            fill="url(#glow-gradient)"
            filter="url(#blur-filter)"
            animate={{
              cx: [200, 400, 200],
              cy: [300, 400, 300],
              r: [150, 200, 150]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="1700"
            cy="400"
            r="200"
            fill="url(#glow-gradient)"
            filter="url(#blur-filter)"
            animate={{
              cx: [1700, 1500, 1700],
              cy: [400, 300, 400],
              r: [200, 250, 200]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          
          {/* Abstract wave pattern */}
          <motion.path
            d="M0,700 C320,600 640,800 960,700 C1280,600 1600,800 1920,700 L1920,1080 L0,1080 Z"
            fill="url(#flow-gradient-1)"
            opacity="0.3"
            filter="url(#blur-filter)"
            animate={{
              d: [
                "M0,700 C320,600 640,800 960,700 C1280,600 1600,800 1920,700 L1920,1080 L0,1080 Z",
                "M0,750 C320,650 640,750 960,650 C1280,750 1600,650 1920,750 L1920,1080 L0,1080 Z",
                "M0,700 C320,600 640,800 960,700 C1280,600 1600,800 1920,700 L1920,1080 L0,1080 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="relative p-16 lg:p-24 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          {/* Enhanced decorative sparkles */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-10"
          >
            <Sparkles className="w-10 h-10 text-cyan-400/60" />
          </motion.div>
          
          {/* Additional decorative element */}
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-10 left-10"
          >
            <Sparkles className="w-8 h-8 text-cyan-400/40" />
          </motion.div>
          
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
              style={{ textShadow: "0 2px 20px rgba(0,230,251,0.3)" }}
            >
              Open For Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-neutral-500 mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            >
              Apply to become a provider today and align your expertise and offer to those that need it!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold text-lg px-10 py-6 h-auto shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300"
                onClick={openContactModal}
              >
                Apply Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
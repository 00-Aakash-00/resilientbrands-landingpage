"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play, ArrowRight, CheckCircle, Zap, Target, Sparkles } from "lucide-react"

const steps = [
  {
    title: "Connect",
    subtitle: "Seamless Integration",
    description: "Integrate your existing infrastructure seamlessly with zero downtime",
    details: "Our intelligent connectors work with 500+ platforms and tools, automatically detecting your current setup and establishing secure connections in under 60 seconds.",
    icon: Target,
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    stats: { time: "< 60s", platforms: "500+", uptime: "99.9%" }
  },
  {
    title: "Analyze",
    subtitle: "AI-Powered Insights",
    description: "AI-powered insights identify opportunities and risks instantly",
    details: "Advanced machine learning algorithms process millions of data points in real-time, providing actionable insights and predictive analytics that help you stay ahead of the competition.",
    icon: Zap,
    color: "#3B82F6",
    gradient: "from-blue-500/20 to-blue-600/5", 
    stats: { accuracy: "99.3%", insights: "1M+", speed: "Real-time" }
  },
  {
    title: "Optimize",
    subtitle: "One-Click Automation",
    description: "Implement recommendations with one-click automation",
    details: "Transform insights into action with our intelligent automation engine. Deploy optimizations, configure settings, and scale resources automatically based on AI recommendations.",
    icon: CheckCircle,
    color: "#10B981",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    stats: { efficiency: "+247%", automation: "100%", ROI: "850%" }
  }
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Play className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">How it works</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Simple by
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              design
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Get started in minutes, not months. Our streamlined process transforms your workflow in just three simple steps.
          </motion.p>
        </motion.div>
        
        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full hidden lg:block">
            <motion.div
              className="w-px h-full bg-gradient-to-b from-transparent via-slate-700 to-transparent relative"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              style={{ transformOrigin: "top" }}
            >
              {/* Animated pulse running down the timeline */}
              <motion.div
                className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-cyan-400 to-transparent"
                animate={{
                  y: [0, 1000, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>
          </div>
          
          <div className="space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex items-center gap-8 lg:gap-20 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Enhanced content card */}
                  <motion.div 
                    className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}
                    whileHover={{ scale: 1.02, x: isEven ? -8 : 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative p-8 lg:p-10 bg-gradient-to-b from-slate-800/60 to-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 overflow-hidden group">
                      
                      {/* Dynamic background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Floating background orb */}
                      <motion.div 
                        className={`absolute ${isEven ? '-top-8 -left-8' : '-top-8 -right-8'} w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{ 
                          background: `radial-gradient(circle, ${step.color}, transparent 70%)`
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 180, 270, 360]
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      <div className="relative z-10">
                        {/* Step number */}
                        <motion.div 
                          className={`inline-flex items-center gap-2 mb-6 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} w-full`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm"
                            style={{
                              background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                              boxShadow: `0 0 20px ${step.color}30`
                            }}
                          >
                            {index + 1}
                          </div>
                          <span className="text-neutral-400 font-medium">STEP {index + 1}</span>
                        </motion.div>

                        <motion.h3 
                          className="text-4xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-100 group-hover:bg-clip-text transition-all duration-300"
                          whileHover={{ x: isEven ? -4 : 4 }}
                        >
                          {step.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-xl font-medium mb-4 transition-colors duration-300"
                          style={{ color: step.color }}
                          whileHover={{ x: isEven ? -4 : 4 }}
                        >
                          {step.subtitle}
                        </motion.p>
                        
                        <motion.p 
                          className="text-lg text-neutral-300 mb-6"
                          whileHover={{ x: isEven ? -4 : 4 }}
                        >
                          {step.description}
                        </motion.p>
                        
                        {/* Expandable details */}
                        <motion.p 
                          className="text-neutral-400 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                          whileHover={{ x: isEven ? -4 : 4 }}
                        >
                          {step.details}
                        </motion.p>
                        
                        {/* Stats */}
                        <motion.div 
                          className={`flex items-center gap-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}
                        >
                          {Object.entries(step.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div 
                                className="text-lg font-bold"
                                style={{ color: step.color }}
                              >
                                {value}
                              </div>
                              <div className="text-xs text-neutral-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced center element */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.3, type: "spring", bounce: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                      className="relative"
                    >
                      {/* Outer ring */}
                      <motion.div
                        className="w-20 h-20 rounded-full border-2 border-slate-700/50 flex items-center justify-center"
                        style={{ borderColor: `${step.color}30` }}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        {/* Inner dot with icon */}
                        <motion.div
                          className="w-14 h-14 rounded-full flex items-center justify-center relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${step.color}40, ${step.color}20)`,
                            boxShadow: `0 0 30px ${step.color}30`
                          }}
                          whileHover={{
                            boxShadow: `0 0 40px ${step.color}50`
                          }}
                        >
                          <Icon 
                            className="w-7 h-7 z-10"
                            style={{ color: step.color }}
                          />
                          
                          {/* Pulsing background */}
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: `radial-gradient(circle, ${step.color}40, transparent 70%)`
                            }}
                            animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.5, 0.2, 0.5]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            }}
                          />
                        </motion.div>
                      </motion.div>
                      
                      {/* Connection line to next step */}
                      {index < steps.length - 1 && (
                        <motion.div
                          className="absolute top-full left-1/2 w-px h-32 hidden lg:block"
                          style={{
                            background: `linear-gradient(to bottom, ${step.color}60, transparent)`
                          }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 1, delay: 1 + index * 0.3 }}
                          viewport={{ once: true }}
                        />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              )
            })}
          </div>
          
          {/* Success indicator at the end */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            viewport={{ once: true }}
            className="flex justify-center mt-20"
          >
            <div className="relative p-8 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-emerald-500/30">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Sparkles className="w-8 h-8 text-emerald-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
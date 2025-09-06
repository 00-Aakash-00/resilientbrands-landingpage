"use client"

import { motion, useAnimation } from "framer-motion"
import { Brain, Shield, FileCheck, CheckCircle, Zap, Lock, Sparkles, ArrowRight, Star, Target } from "lucide-react"
import { useEffect } from "react"

const services = [
  {
    title: "AI Powered Brand Maturity",
    description: "Eliminating Tech Debt Without Breaking Operations",
    details: "Advanced machine learning algorithms analyze your infrastructure, identify bottlenecks, and provide actionable recommendations for optimization.",
    icon: Brain,
    color: "#06B6D4",
    gradient: "from-cyan-500/20 via-cyan-400/10 to-transparent",
    stats: { accuracy: "99.3%", improvement: "+247%", clients: "2.5k+" },
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ai-neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#0891B2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0E7490" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="ai-circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L40 20 M20 0 L20 40" stroke="#06B6D4" strokeWidth="0.2" opacity="0.15" />
            <circle cx="20" cy="20" r="1.5" fill="#06B6D4" opacity="0.3" />
          </pattern>
        </defs>
        
        <rect width="400" height="300" fill="url(#ai-circuit)" />
        
        {/* Neural Network Visualization */}
        <g transform="translate(200, 150)" opacity="0.7">
          {/* Multi-layer neural nodes */}
          {[
            { x: -120, y: 0, layer: 1 },
            { x: -60, y: -40, layer: 2 }, { x: -60, y: 0, layer: 2 }, { x: -60, y: 40, layer: 2 },
            { x: 0, y: -60, layer: 3 }, { x: 0, y: -20, layer: 3 }, { x: 0, y: 20, layer: 3 }, { x: 0, y: 60, layer: 3 },
            { x: 60, y: -40, layer: 4 }, { x: 60, y: 0, layer: 4 }, { x: 60, y: 40, layer: 4 },
            { x: 120, y: 0, layer: 5 }
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.x} cy={node.y} r={6 - node.layer * 0.5} fill="url(#ai-neural-grad)" opacity="0.8">
                <animate attributeName="r" values={`${6 - node.layer * 0.5};${7 - node.layer * 0.5};${6 - node.layer * 0.5}`} dur={`${2 + node.layer * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={node.x} cy={node.y} r={3 - node.layer * 0.2} fill="#06B6D4" opacity="0.9" />
              <circle cx={node.x} cy={node.y} r={10 - node.layer * 0.8} fill="none" stroke="#06B6D4" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 3">
                <animate attributeName="stroke-dashoffset" from="0" to="-5" dur={`${3 + node.layer * 0.5}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
          
          {/* Neural connections */}
          <g opacity="0.6">
            <path d="M-120 0 L-60 -40 L0 -60 L60 -40 L120 0" stroke="url(#ai-neural-grad)" strokeWidth="1.5" fill="none" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="0" to="-5" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M-120 0 L-60 0 L0 -20 L60 0 L120 0" stroke="url(#ai-neural-grad)" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M-120 0 L-60 40 L0 60 L60 40 L120 0" stroke="url(#ai-neural-grad)" strokeWidth="1.5" fill="none" strokeDasharray="3 2">
              <animate attributeName="stroke-dashoffset" from="0" to="-5" dur="3.5s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Data flow particles */}
          {[0, 1, 2].map((i) => (
            <circle key={`particle-${i}`} r="2" fill="#06B6D4" opacity="0.8">
              <animate attributeName="r" values="2;3;2" dur="1.5s" repeatCount="indefinite" />
              <animateMotion dur={`${4 + i}s`} repeatCount="indefinite"
                path="M-120 0 L-60 0 L0 -20 L60 0 L120 0" />
            </circle>
          ))}
        </g>
      </svg>
    )
  },
  {
    title: "Cyber Maturity for Modern Brands",
    description: "Privacy solutions to reduce your footprint",
    details: "Comprehensive security assessment with real-time threat detection, vulnerability management, and privacy-first architecture design.",
    icon: Shield,
    color: "#3B82F6",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
    stats: { threats: "10k+", response: "< 2min", uptime: "99.9%" },
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyber-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="cyber-hex" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
            <polygon points="15,1 27,7.5 27,18.5 15,25 3,18.5 3,7.5" fill="none" stroke="#3B82F6" strokeWidth="0.2" opacity="0.2" />
          </pattern>
        </defs>
        
        <rect width="400" height="300" fill="url(#cyber-hex)" />
        
        {/* Central Security Shield */}
        <g transform="translate(200, 150)" opacity="0.7">
          {/* Multi-ring security perimeter */}
          {[80, 65, 50, 35, 25].map((radius, i) => (
            <circle key={i} cx="0" cy="0" r={radius} fill="none" stroke="#3B82F6" 
                    strokeWidth={0.8 - i * 0.1} opacity={0.4 + i * 0.1} 
                    strokeDasharray={i % 2 === 0 ? "5 3" : "none"}>
              {i % 2 === 0 && (
                <animate attributeName="stroke-dashoffset" from="0" to="-8" dur={`${4 + i}s`} repeatCount="indefinite" />
              )}
              <animate attributeName="opacity" values={`${0.4 + i * 0.1};${0.6 + i * 0.1};${0.4 + i * 0.1}`} dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
            </circle>
          ))}
          
          {/* Central shield */}
          <path d="M0 -35 L0 35 Q0 45 -8 40 L-28 25 Q-35 20 -35 10 L-35 -15 Q-35 -25 -28 -30 L-8 -42 Q0 -50 0 -40 Q0 -50 8 -42 L28 -30 Q35 -25 35 -15 L35 10 Q35 20 28 25 L8 40 Q0 45 0 35 Z" 
                fill="url(#cyber-shield-grad)" opacity="0.6" />
          <path d="M0 -35 L0 35 Q0 45 -8 40 L-28 25 Q-35 20 -35 10 L-35 -15 Q-35 -25 -28 -30 L-8 -42 Q0 -50 0 -40 Q0 -50 8 -42 L28 -30 Q35 -25 35 -15 L35 10 Q35 20 28 25 L8 40 Q0 45 0 35 Z" 
                fill="none" stroke="#3B82F6" strokeWidth="1.5" opacity="0.8" />
          
          {/* Shield core */}
          <circle cx="0" cy="0" r="15" fill="#3B82F6" opacity="0.3" />
          <circle cx="0" cy="0" r="8" fill="#3B82F6" opacity="0.6">
            <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Security checkmark */}
          <path d="M-4 0 L-1 3 L6 -4" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9" />
          
          {/* Rotating security nodes */}
          <animateTransform attributeName="transform" type="rotate" 
            values="0 0 0;360 0 0" dur="12s" repeatCount="indefinite" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <circle cx="60" cy="0" r="3" fill="#3B82F6" opacity="0.7">
                <animate attributeName="r" values="3;4;3" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
              <line x1="40" y1="0" x2="57" y2="0" stroke="#3B82F6" strokeWidth="0.5" opacity="0.4" strokeDasharray="2 2">
                <animate attributeName="stroke-dashoffset" from="0" to="-4" dur="2s" repeatCount="indefinite" />
              </line>
            </g>
          ))}
        </g>
      </svg>
    )
  },
  {
    title: "Compliance Made Simple",
    description: "Built to streamline your business",
    details: "Automated compliance monitoring, documentation generation, and audit-ready reporting across all major regulatory frameworks.",
    icon: FileCheck,
    color: "#10B981",
    gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    stats: { compliance: "100%", audits: "450+", time: "-80%" },
    svg: (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="compliance-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#059669" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="compliance-grid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="25" height="25" fill="none" stroke="#10B981" strokeWidth="0.15" opacity="0.15" />
            <circle cx="12.5" cy="12.5" r="1" fill="#10B981" opacity="0.2" />
          </pattern>
        </defs>
        
        <rect width="400" height="300" fill="url(#compliance-grid)" />
        
        {/* Compliance Checklist Visualization */}
        <g transform="translate(80, 50)" opacity="0.7">
          {/* Document outline */}
          <rect x="0" y="0" width="240" height="200" rx="12" fill="url(#compliance-grad)" opacity="0.2" stroke="#10B981" strokeWidth="1" />
          <rect x="10" y="10" width="220" height="180" rx="8" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.3" />
          
          {/* Checklist items */}
          {[40, 70, 100, 130, 160].map((y, i) => (
            <g key={i}>
              {/* Checkbox */}
              <rect x="25" y={y - 8} width="16" height="16" rx="3" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.6" />
              <rect x="25" y={y - 8} width="16" height="16" rx="3" fill="#10B981" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.4;0.2" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
              </rect>
              
              {/* Checkmark animation */}
              <path d="M28 ${y} L32 ${y + 3} L37 ${y - 2}" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8">
                <animate attributeName="stroke-dasharray" from="0 12" to="12 0" dur="0.8s" begin={`${i * 0.5}s`} fill="freeze" />
              </path>
              
              {/* Text lines */}
              <rect x="50" y={y - 4} width={120 - i * 15} height="2" fill="#10B981" opacity="0.4" rx="1" />
              <rect x="50" y={y + 2} width={100 - i * 10} height="1.5" fill="#10B981" opacity="0.3" rx="0.5" />
            </g>
          ))}
          
          {/* Progress indicator */}
          <rect x="180" y="25" width="40" height="6" rx="3" fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.4" />
          <rect x="182" y="27" width="36" height="2" rx="1" fill="#10B981" opacity="0.6">
            <animate attributeName="width" values="0;36;36" dur="3s" repeatCount="indefinite" />
          </rect>
          
          {/* Audit trail dots */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={30 + i * 35} cy="190" r="2" fill="#10B981" opacity="0.5">
              <animate attributeName="r" values="2;3;2" dur="1.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      </svg>
    )
  }
]

const categories = [
  {
    title: "Compliance",
    icon: FileCheck,
    items: ["PCI DSS", "ISO 27001", "SOC 2", "HIPAA", "GDPR Ready"],
    color: "#10B981",
    description: "Comprehensive regulatory compliance coverage"
  },
  {
    title: "Adversarial & Penetration Testing",
    icon: Zap,
    items: ["Exploitation testing", "Post exploitation testing", "Milestone proof collection", "Red team exercises", "Social engineering"],
    color: "#F59E0B",
    description: "Advanced security testing methodologies"
  },
  {
    title: "Privacy Requirements",
    icon: Lock,
    items: ["GDPR", "CPPA", "DSARs and DPIAs", "Data encryption", "Privacy by design"],
    color: "#8B5CF6",
    description: "Privacy-first approach to data protection"
  }
]

export default function AIPoweredServices() {
  const controls = useAnimation()
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ rotate: 360, transition: { duration: 2 } })
      controls.start({ 
        rotate: [0, 10, -10, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      })
    }
    sequence()
  }, [controls])

  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 mb-8"
            animate={controls}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">AI-Powered Excellence</span>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-7xl font-medium tracking-tight text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Services that transform
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              challenges into advantages
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Discover cutting-edge solutions that don't just solve problems—they create competitive advantages that propel your business forward.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-20 mb-24">
          {/* Enhanced Services Cards */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-medium mb-12 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
            >
              Popular eye-opening services
            </motion.h3>
            
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40, rotateY: -20 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    x: 16, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  <div className="relative p-8 bg-gradient-to-b from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 overflow-hidden">
                    
                    {/* Dynamic gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Create responsive split layout */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      
                      {/* Left: Content (2/3 width on desktop) */}
                      <div className="md:col-span-2">
                        {/* Enhanced icon */}
                        <motion.div
                          className="relative mb-6"
                          whileHover={{ 
                            scale: 1.15,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.6 }
                          }}
                        >
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                              boxShadow: `0 0 30px ${service.color}20`
                            }}
                          >
                            <Icon 
                              className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300"
                              style={{ color: service.color }}
                            />
                          </div>
                        </motion.div>
                        
                        <div>
                          <motion.h4 
                            className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-100 group-hover:bg-clip-text transition-all duration-300"
                          >
                            {service.title}
                          </motion.h4>
                          
                          <motion.p 
                            className="text-base font-medium mb-3 transition-colors duration-300"
                            style={{ color: service.color }}
                          >
                            {service.description}
                          </motion.p>
                          
                          {/* Expandable details */}
                          <motion.p 
                            className="text-neutral-400 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                          >
                            {service.details}
                          </motion.p>
                          
                          {/* Stats row */}
                          <motion.div 
                            className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100"
                          >
                            {Object.entries(service.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div 
                                  className="text-base font-bold"
                                  style={{ color: service.color }}
                                >
                                  {value}
                                </div>
                                <div className="text-xs text-neutral-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Right: SVG Visualization (1/3 width on desktop, full width on mobile) */}
                      <motion.div 
                        className="relative h-32 md:h-40 rounded-2xl bg-gradient-to-br from-slate-800/30 to-slate-900/50 border border-slate-700/30 overflow-hidden group-hover:border-slate-600/50 transition-all duration-500"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* SVG Container with enhanced visibility */}
                        <div className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                          {service.svg}
                        </div>
                        
                        {/* Subtle overlay for depth */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    </div>
                    
                    {/* Card highlight effect */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, transparent, ${service.color}08, transparent)`
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
          
          {/* Enhanced Categories */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-medium mb-6 text-white leading-relaxed">
                Bridge critical gaps in your
                <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  organizational readiness
                </span>
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Many organizations have regulatory and readiness gaps that force their brand to underperform. Our comprehensive approach identifies and addresses these critical areas.
              </p>
            </motion.div>
            
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="group relative"
                >
                  <div className="relative p-6 bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300">
                    
                    {/* Category header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                      >
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                            boxShadow: `0 0 30px ${category.color}15`
                          }}
                        >
                          <Icon className="w-7 h-7" style={{ color: category.color }} />
                        </div>
                      </motion.div>
                      
                      <div>
                        <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors" style={{ color: category.color }}>
                          {category.title}
                        </h4>
                        <p className="text-sm text-neutral-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Category items */}
                    <div className="grid grid-cols-1 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.5 + itemIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 8, scale: 1.02 }}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/30 transition-all duration-200 group/item"
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="w-5 h-5 text-emerald-400 group-hover/item:text-emerald-300" />
                          </motion.div>
                          <span className="text-neutral-300 group-hover/item:text-white transition-colors font-medium">
                            {item}
                          </span>
                          {itemIndex < 3 && (
                            <div className="ml-auto">
                              <Star className="w-4 h-4 text-amber-400 opacity-50" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center"
        >
          {/* CTA Background */}
          <div className="relative p-12 lg:p-16 bg-gradient-to-b from-slate-800/60 to-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-700/50 overflow-hidden">
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5" />
            <motion.div 
              className="absolute top-8 right-8"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Target className="w-8 h-8 text-cyan-400/30" />
            </motion.div>
            
            <div className="relative z-10">
              <motion.p 
                className="text-xl text-neutral-400 max-w-4xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Sometimes your business maturity and performance depends on fresh eyes. Our testers and providers are among the <span className="text-cyan-400 font-semibold">best, fastest, and most goal-oriented</span> teams around.
              </motion.p>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Ask Our Experts</span>
                <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
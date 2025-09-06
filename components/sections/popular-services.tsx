"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Sparkles, Shield, FileCheck, TrendingUp, Zap, Star } from "lucide-react"

const servicesData = {
  "Brand Performance": {
    icon: Sparkles,
    color: "#06B6D4",
    services: [
      "Leads Enrichment",
      "Search Engine Optimization Audit",
      "Brand Audit",
      "Sales Audit", 
      "Sales Appointment Setting",
      "Brand Design",
      "Web Design",
      "Email Marketing",
      "Social Media Marketing",
      "Content generation"
    ]
  },
  "Security & IT": {
    icon: Shield,
    color: "#3B82F6",
    services: [
      "Penetration Testing",
      "Adversarial Tool assessment",
      "Managed Security",
      "Managed Cloud",
      "Managed Information Technology",
      "Managed Operational Technology",
      "Encryption management",
      "Network configuration and reconfiguration",
      "Firewall management"
    ]
  },
  "Compliance": {
    icon: FileCheck,
    color: "#10B981",
    services: [
      "Compliance Audit Ready Assessment",
      "Compliance Policy Generation",
      "Evidence mapping and collection",
      "Controls Automation",
      "Compliance controls testing",
      "Compliance training"
    ]
  }
}

export default function PopularServices() {
  const [activeTab, setActiveTab] = useState("Brand Performance")
  
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Popular Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Services that
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              deliver results
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions tailored for every aspect of your business, from performance optimization to security enhancement.
          </motion.p>
        </motion.div>
        
        {/* Enhanced Tab Navigation */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex p-2 bg-gradient-to-r from-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl"
          >
            {Object.entries(servicesData).map(([category, data]) => {
              const Icon = data.icon
              const isActive = activeTab === category
              
              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-8 py-4 rounded-2xl font-medium transition-all duration-300 group"
                >
                  {/* Active background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-emerald-500/30 rounded-2xl border border-cyan-500/40 shadow-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      style={{
                        boxShadow: `0 0 30px ${data.color}25`
                      }}
                    />
                  )}
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${data.color}10, transparent)`
                    }}
                  />
                  
                  {/* Content */}
                  <span className={`relative flex items-center gap-3 transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                  }`}>
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon 
                        className="w-5 h-5" 
                        style={{ color: isActive ? data.color : undefined }} 
                      />
                    </motion.div>
                    {category}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
        
        {/* Enhanced Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative p-8 lg:p-12 bg-gradient-to-b from-slate-800/60 to-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
            
            {/* Dynamic background pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, ${servicesData[activeTab].color}15 0%, transparent 50%)`
              }} />
            </div>
            
            {/* Floating icon decoration */}
            <motion.div 
              className="absolute top-8 right-8"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {(() => {
                const Icon = servicesData[activeTab].icon
                return (
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${servicesData[activeTab].color}20, ${servicesData[activeTab].color}05)`,
                      boxShadow: `0 0 30px ${servicesData[activeTab].color}20`
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: servicesData[activeTab].color }} />
                  </div>
                )
              })()}
            </motion.div>
            
            {/* Services Grid with enhanced animations */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 relative z-10">
              {servicesData[activeTab].services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -30, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ 
                    scale: 1.03, 
                    x: 8,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="relative p-4 rounded-xl bg-slate-950/90 border border-slate-800/50 hover:border-slate-700/80 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden">
                    
                    {/* Hover glow effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${servicesData[activeTab].color}08, transparent)`
                      }}
                    />
                    
                    <div className="relative flex items-center gap-3">
                      {/* Enhanced service indicator */}
                      <motion.div 
                        className="flex-shrink-0 w-3 h-3 rounded-full"
                        style={{ 
                          background: `linear-gradient(45deg, ${servicesData[activeTab].color}, ${servicesData[activeTab].color}80)`,
                          boxShadow: `0 0 12px ${servicesData[activeTab].color}40`
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      <span className="text-neutral-300 group-hover:text-white transition-colors font-medium">
                        {service}
                      </span>
                      
                      {/* Premium indicator for first few services */}
                      {index < 3 && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="ml-auto"
                        >
                          <Star className="w-4 h-4 text-amber-400" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced CTA Section */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Ready to get started?
                </h3>
                <p className="text-neutral-400">
                  Map your brand's {activeTab.toLowerCase()} journey with our expert team.
                </p>
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${servicesData[activeTab].color}30`
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-white to-neutral-100 text-black font-semibold rounded-full overflow-hidden transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${servicesData[activeTab].color}, ${servicesData[activeTab].color}CC)`
                }}
              >
                <div className="absolute inset-0 bg-white opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-black">Map my brand</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Building2, Shield } from "lucide-react"

const trustedBy = [
  {
    title: "Business Development Services",
    description: "Trusted and selected by top Fortune 500 companies.",
    detail: "Hundreds of organizations have trusted our providers to drive sales engagement.",
    icon: Building2,
    stats: "500+",
    label: "Fortune 500 Companies"
  },
  {
    title: "Technology Solutions & Service Providers",
    description: "More than 22,000 teams trust the power of tools and the expertise of our providers in every industry at every size.",
    icon: Shield,
    stats: "22k+",
    label: "Teams Worldwide"
  }
]

export default function TrustedBy() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Trusted by
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              leading teams
            </span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trustedBy.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative p-8 lg:p-10 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  {/* Stats overlay */}
                  <div className="absolute top-8 right-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-right"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        {item.stats}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {item.label}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0"
                    >
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </motion.div>
                    <div className="flex-1 pr-24">
                      <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-cyan-400/80 mb-3">
                        {item.description}
                      </p>
                      {item.detail && (
                        <p className="text-neutral-400 text-sm">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
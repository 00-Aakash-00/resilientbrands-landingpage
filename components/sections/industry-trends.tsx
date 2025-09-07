"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap, ArrowUpRight } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"

const trends = [
  {
    number: "01",
    title: "Become a top performing brand",
    description: "Eliminate the headache of finding the best tools and services to meet your need with solutions led by the professionals that manage the top performing brands.",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-500",
    stats: "85% growth rate"
  },
  {
    number: "02",
    title: "Become a Solution",
    description: "Shorten your solution maturity time by collaborating with service providers that manage the problems you solve and advance the market as a team.",
    icon: Zap,
    gradient: "from-blue-500 to-indigo-500",
    stats: "3x faster deployment"
  },
  {
    number: "03",
    title: "Become a provider",
    description: "You are an expert in your craft and want to serve, join our community and get matched to ideal partners and problems you know you can tackle.",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
    stats: "500+ partners"
  }
]

export default function IndustryTrends() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Minimal geometric accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-slate-800 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Industry Leadership</span>
          </motion.div>
          
          <motion.h2 
            className={`${instrumentSerif.className} text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Lead industry trends with the{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              latest and greatest
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-neutral-400 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Resilient brands leverage technology for the competitive edge it can provide. Join the top brands that deploy the most advanced tools tested by industry experts.
          </motion.p>
        </motion.div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {trends.map((trend, index) => {
            const Icon = trend.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full">
                  {/* Card */}
                  <div className="relative h-full p-8 bg-slate-900/30 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200">
                    {/* Top Section */}
                    <div className="flex items-start justify-between mb-6">
                      {/* Number */}
                      <span className="text-5xl font-bold text-slate-700">
                        {trend.number}
                      </span>
                      
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${trend.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-lg bg-black flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {trend.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {trend.description}
                    </p>
                    
                    {/* Bottom Section */}
                    <div className="flex items-center justify-between">
                      {/* Stats */}
                      <span className="text-xs font-medium text-cyan-400">
                        {trend.stats}
                      </span>
                      
                      {/* Link */}
                      <button className="group/btn flex items-center gap-1 text-xs text-neutral-500 hover:text-white transition-colors">
                        <span>Learn more</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                    
                    {/* Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${trend.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl`} />
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
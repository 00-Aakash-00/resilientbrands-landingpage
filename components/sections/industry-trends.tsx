"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Zap } from "lucide-react"

const trends = [
  {
    number: "01",
    title: "Become a top performing brand",
    description: "Eliminate the headache of finding the best tools and services to meet your need with solutions led by the professionals that manage the top performing brands.",
    icon: TrendingUp,
    color: "#06B6D4"
  },
  {
    number: "02",
    title: "Become a Solution",
    description: "Shorten your solution maturity time by collaborating with service providers that manage the problems you solve and advance the market as a team.",
    icon: Zap,
    color: "#3B82F6"
  },
  {
    number: "03",
    title: "Become a provider",
    description: "You are an expert in your craft and want to serve, join our community and get matched to ideal partners and problems you know you can tackle.",
    icon: Users,
    color: "#10B981"
  }
]

export default function IndustryTrends() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Lead industry trends with the
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              latest and greatest
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Resilient brands leverage technology for the competitive edge it can provide, join the top brands that are the first to deploy the most advanced tools tested by the industry experts that manage them.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend, index) => {
            const Icon = trend.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full p-8 bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  {/* Number overlay */}
                  <div className="absolute top-8 right-8 text-6xl font-bold opacity-10" style={{ color: trend.color }}>
                    {trend.number}
                  </div>
                  
                  {/* Icon with glow */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative mb-6"
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${trend.color}20, ${trend.color}10)`,
                        boxShadow: `0 0 30px ${trend.color}20`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: trend.color }} />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {trend.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {trend.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
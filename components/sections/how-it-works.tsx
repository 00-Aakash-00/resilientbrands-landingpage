"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Seamlessly integrate your infrastructure in under 60 seconds",
    icon: Zap,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-500/10 via-transparent to-blue-500/10",
    delay: 0
  },
  {
    number: "02", 
    title: "Analyze",
    description: "AI-powered insights process millions of data points in real-time",
    icon: Shield,
    gradient: "from-blue-500 to-purple-500",
    bgGradient: "from-blue-500/10 via-transparent to-purple-500/10",
    delay: 0.1
  },
  {
    number: "03",
    title: "Optimize",
    description: "Deploy automated improvements with one-click implementation",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 via-transparent to-pink-500/10",
    delay: 0.2
  }
]

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">How it works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${instrumentSerif.className} text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight`}
          >
            Simple by{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              design
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Get started in minutes, not months. Our streamlined process transforms your workflow.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative h-full">
                  {/* Card Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />
                  
                  {/* Card */}
                  <div className="relative h-full p-8 bg-gradient-to-b from-slate-900/80 to-slate-950/80 backdrop-blur-xl rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all duration-300">
                    
                    {/* Step Number */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: step.delay + 0.2 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <span className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-50`}>
                        {step.number}
                      </span>
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      initial={{ opacity: 0, rotate: -180 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: step.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-black/80 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: step.delay + 0.4 }}
                      viewport={{ once: true }}
                      className="text-2xl font-bold text-white mb-3"
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: step.delay + 0.5 }}
                      viewport={{ once: true }}
                      className="text-neutral-400 leading-relaxed mb-6"
                    >
                      {step.description}
                    </motion.p>

                    {/* Arrow Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: step.delay + 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm font-medium group/link cursor-pointer"
                    >
                      <span className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        Learn more
                      </span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover/link:translate-x-1 transition-transform" />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1" fill="currentColor" className="text-cyan-400" />
                        </pattern>
                        <rect width="100" height="100" fill={`url(#pattern-${index})`} />
                      </svg>
                    </div>
                  </div>

                  {/* Connection Line (visible on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-700 to-slate-800" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-cyan-500/20">
            <Rocket className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Ready to transform your workflow?</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
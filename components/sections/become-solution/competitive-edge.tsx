"use client"

import { motion } from "framer-motion"
import { Zap, TrendingUp, RefreshCw } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const edges = [
  {
    icon: Zap,
    title: "Faster adoption through trusted relationships",
    gradient: "from-yellow-500 to-orange-500",
    borderColor: "border-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Lower churn because clients stick with provider-led outcomes",
    gradient: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500"
  },
  {
    icon: RefreshCw,
    title: "A growth flywheel powered by aligned incentives, not just ad spend",
    gradient: "from-emerald-500 to-green-500",
    borderColor: "border-emerald-500"
  }
]

export default function CompetitiveEdge() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "py-16" : "py-24"} overflow-hidden`}>
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
        </div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-center ${isMobile ? "mb-8" : "mb-12"}`}
        >
          <h2 className={`${instrumentSerif.className} ${
            isSmallMobile ? "text-3xl" : isMobile ? "text-4xl" : "text-5xl md:text-6xl"
          } font-normal tracking-tight text-white mb-6 leading-[1.1]`}>
            The Competitive Edge
          </h2>
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 max-w-3xl mx-auto leading-relaxed`}>
            When you become a Resilient Solution, you get more than distribution — you get a network of AI enabled partners who believe in your product and are motivated to grow it.
          </p>
        </motion.div>

        {/* Edge Cards */}
        <div className={`${isMobile ? "space-y-6" : "space-y-8"} max-w-4xl mx-auto`}>
          {edges.map((edge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative bg-gradient-to-r ${edge.gradient} p-0.5 rounded-2xl`}>
                <div className="relative bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-slate-900/90 transition-colors duration-300">
                  <div className="flex items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl border-2 ${edge.borderColor} bg-transparent p-3`}>
                        <edge.icon className={`w-full h-full bg-gradient-to-br ${edge.gradient} text-transparent bg-clip-text`} />
                      </div>
                    </div>

                    {/* Text */}
                    <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-white font-medium leading-relaxed`}>
                      {edge.title}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edge.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual flourish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 blur-2xl opacity-30" />
            <div className="relative bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text">
              <svg
                className={`${isMobile ? "w-16 h-16" : "w-24 h-24"}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-400"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-400"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
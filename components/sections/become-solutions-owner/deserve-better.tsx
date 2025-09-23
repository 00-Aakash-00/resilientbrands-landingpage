"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Lightbulb } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const painPoints = [
  {
    icon: TrendingUp,
    title: "MSPs drive adoption, but don't get ANY of the upside",
    description: "Every client win creates recurring revenue… just not for us.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: DollarSign,
    title: "Vendors get the equity, we get the margin scraps",
    description: "You're locked out of the long-term wealth creation you enable.",
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Our clients see us as middlemen, not innovators",
    description: "Even though you're the ones clients actually trust and rely on to make solutions work as advertised.",
    gradient: "from-red-500 to-purple-500"
  }
]

export default function DeserveBetter() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "py-16" : "py-24"} bg-gradient-to-b from-black to-slate-950`}>
      <div className={`max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-center ${isMobile ? "mb-12" : "mb-16"}`}
        >
          <h2 className={`${instrumentSerif.className} ${
            isSmallMobile ? "text-3xl" : isMobile ? "text-4xl" : "text-5xl md:text-6xl"
          } font-normal tracking-tight text-white mb-4 leading-[1.1]`}>
            We believe{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              you deserve better
            </span>
          </h2>
        </motion.div>

        {/* Pain Points Grid */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-6" : "md:grid-cols-3 gap-8"}`}>
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card with problem indicator */}
              <div className="relative h-full bg-gradient-to-b from-slate-900/80 to-slate-800/80 rounded-2xl p-8 backdrop-blur-sm border border-red-900/30 hover:border-red-700/50 transition-all duration-300">
                {/* Warning badge */}
                <div className="absolute -top-3 -right-3">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${point.gradient} flex items-center justify-center animate-pulse`}>
                    <span className="text-white text-lg font-bold">!</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${point.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                      <point.icon className="w-8 h-8 text-red-400" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className={`${isSmallMobile ? "text-lg" : "text-xl"} font-semibold text-white mb-3`}>
                  {point.title}
                </h3>
                <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400 leading-relaxed`}>
                  {point.description}
                </p>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-20 h-px bg-gradient-to-r from-red-400 via-amber-400 to-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
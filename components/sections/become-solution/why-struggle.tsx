"use client"

import { motion } from "framer-motion"
import { Volume2, Users, BrainCircuit } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const struggles = [
  {
    icon: Volume2,
    title: "Noise beats innovation",
    description: "Marketing budgets and algorithms decide who gets noticed, not real outcomes.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Reseller fatigue",
    description: "Providers see hundreds of vendor pitches a year, most of them copy-paste and choose the cheapest solution with the most accolades.",
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    icon: BrainCircuit,
    title: "Skills gaps",
    description: "The advisors clients actually rely on don't have the expertise to quickly deploy them or feel ownership in the solutions they sell.",
    gradient: "from-purple-500 to-pink-500"
  }
]

export default function WhyStruggle() {
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
            Why Top Solutions Struggle
          </h2>
        </motion.div>

        {/* Truth Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mb-12" : "mb-16"} bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700/50`}
        >
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-center text-neutral-300 mb-6 font-medium`}>
            The truth is:
          </p>
          <div className={`space-y-4`}>
            <div className="flex items-start gap-4">
              <span className="text-red-500 mt-1">✗</span>
              <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-lg"} text-neutral-300`}>
                The best tools get buried.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500 mt-1">✗</span>
              <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-lg"} text-neutral-300`}>
                The loudest vendors with the simplest sales cycles — not the best solutions — often win.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-500 mt-1">✗</span>
              <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-lg"} text-neutral-300`}>
                And even when you find distribution, most partner programs treat you as just another SKU.
              </p>
            </div>
          </div>
          <p className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-semibold mt-8`}>
            That&apos;s the broken model Resilient Brands is here to change.
          </p>
        </motion.div>

        {/* Struggle Points Grid */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-6" : "md:grid-cols-3 gap-8"}`}>
          {struggles.map((struggle, index) => (
            <motion.div
              key={struggle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-b from-slate-900/80 to-slate-800/80 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                {/* Icon */}
                <div className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-r ${struggle.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                    <struggle.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className={`${isSmallMobile ? "text-xl" : "text-2xl"} font-semibold text-white mb-3`}>
                  {struggle.title}
                </h3>
                <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400 leading-relaxed`}>
                  {struggle.description}
                </p>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${struggle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
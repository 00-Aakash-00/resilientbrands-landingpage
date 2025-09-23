"use client"

import { motion } from "framer-motion"
import { GrainGradient } from "@paper-design/shaders-react"
import { CheckCircle2 } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const benefits = [
  {
    title: "You're not buried in catalogs",
    description: "your solution is championed by providers who have proof of client solution needs."
  },
  {
    title: "You don't fight uphill for adoption",
    description: "trusted advisors already drive the client conversations."
  },
  {
    title: "You're not chasing resellers",
    description: "you're backed by partners who win when you win."
  }
]

export default function SolutionsEmpower() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "py-16" : "py-24"} overflow-hidden`}>
      {/* Background gradient */}
      <div className="absolute inset-0">
        <GrainGradient
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(240, 10%, 3%)"
          softness={0.9}
          intensity={0.6}
          noise={0.3}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={45}
          speed={0.3}
          colors={["hsl(185, 100%, 30%)", "hsl(150, 80%, 35%)", "hsl(170, 90%, 40%)"]}
        />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mb-8" : "mb-12"}`}
        >
          <h2 className={`${instrumentSerif.className} ${
            isSmallMobile ? "text-3xl" : isMobile ? "text-4xl" : "text-5xl md:text-6xl"
          } font-normal tracking-tight text-white mb-6 leading-[1.1] text-center`}>
            Solutions Empower Service,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Not Replace It
            </span>
          </h2>
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 text-center max-w-4xl mx-auto leading-relaxed`}>
            Resilient Brands bridges the gap between solution creators and providers by making MSPs and VARs understand the client offer fit.
          </p>
        </motion.div>

        {/* Bridge Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mb-12" : "mb-16"}`}
        >
          <div className="relative">
            {/* Bridge connection line */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

            <div className={`grid ${isMobile ? "grid-cols-1 gap-8" : "grid-cols-3 gap-4"}`}>
              {/* Solution Creators */}
              <div className="relative">
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
                  <h3 className={`${isSmallMobile ? "text-lg" : "text-xl"} font-semibold text-cyan-400 mb-2`}>
                    Solution Creators
                  </h3>
                  <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-300`}>
                    Innovative products that deliver real outcomes
                  </p>
                </div>
              </div>

              {/* Bridge - Resilient Brands */}
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/50 transform scale-105">
                  <h3 className={`${isSmallMobile ? "text-lg" : "text-xl"} font-bold text-white mb-2 text-center`}>
                    Resilient Brands
                  </h3>
                  <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-200 text-center`}>
                    Bridging the gap with AI-powered matching
                  </p>
                </div>
              </div>

              {/* Providers */}
              <div className="relative">
                <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/30">
                  <h3 className={`${isSmallMobile ? "text-lg" : "text-xl"} font-semibold text-emerald-400 mb-2`}>
                    MSPs & VARs
                  </h3>
                  <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-300`}>
                    Trusted advisors with client relationships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-white font-medium mb-8`}>
            That means:
          </p>
          <div className={`space-y-6`}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <span className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-lg"} text-white font-medium`}>
                    {benefit.title}
                  </span>
                  <span className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-lg"} text-neutral-300`}>
                    {" — "}{benefit.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
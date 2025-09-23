"use client"

import { motion } from "framer-motion"
import { GrainGradient } from "@paper-design/shaders-react"
import { Zap, Handshake } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

export default function CompetitiveEdge() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "py-16" : "py-24"} overflow-hidden`}>
      {/* Background gradient */}
      <div className="absolute inset-0">
        <GrainGradient
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(240, 10%, 3%)"
          softness={0.85}
          intensity={0.7}
          noise={0.4}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1.1}
          rotation={180}
          speed={0.4}
          colors={["hsl(45, 100%, 45%)", "hsl(185, 90%, 45%)", "hsl(35, 90%, 50%)"]}
        />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}>
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
          } font-normal tracking-tight text-white mb-8 leading-[1.1]`}>
            The Competitive Edge
          </h2>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 blur-3xl" />

            {/* Main card */}
            <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-3xl p-10 border border-amber-500/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-8"
              >
                <Zap className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className={`${isSmallMobile ? "text-xl" : isMobile ? "text-2xl" : "text-3xl"} font-semibold text-white mb-4`}>
                    We start where the skills gaps are first addressed:{" "}
                    <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">
                      MSPs and VARs.
                    </span>
                  </h3>
                  <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 leading-relaxed`}>
                    They are the frontline advisors shaping technology decisions for businesses worldwide. By giving them ownership, we unlock easier adoption, lower issues, and a growth flywheel built on expertise.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-t border-amber-500/20 pt-8"
              >
                <div className="flex items-start gap-4">
                  <Handshake className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`${isSmallMobile ? "text-xl" : isMobile ? "text-2xl" : "text-3xl"} font-semibold text-white mb-4`}>
                      Everyone Deserves to work with{" "}
                      <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
                        partners aligned in values
                      </span>
                    </h3>
                    <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 mb-4 leading-relaxed`}>
                      You&apos;ve waited long enough to stop selling other people&apos;s futures. With Resilient Brands, you finally get to own the upside you create.
                    </p>
                    <p className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text font-semibold`}>
                      As a solutions owner, you get to be part of this shift.
                    </p>
                    <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-200 mt-2`}>
                      You&apos;re not just funding products. You&apos;re fueling a movement of providers becoming owners.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Visual accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-cyan-400 blur-2xl opacity-30" />
            <div className="relative w-32 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-cyan-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
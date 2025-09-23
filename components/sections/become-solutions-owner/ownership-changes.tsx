"use client"

import { motion } from "framer-motion"
import { GrainGradient } from "@paper-design/shaders-react"
import { CheckCircle2 } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const changes = [
  {
    title: "You're not resellers",
    description: "We're equity partners."
  },
  {
    title: "You don't just make margin",
    description: "We share in the growth."
  },
  {
    title: "You're not just another contract",
    description: "You're solution builders building a better market through the solutions you believe in."
  }
]

export default function OwnershipChanges() {
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
          rotation={90}
          speed={0.3}
          colors={["hsl(45, 100%, 40%)", "hsl(35, 100%, 45%)", "hsl(185, 90%, 40%)"]}
        />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"}`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mb-12" : "mb-16"}`}
        >
          <h2 className={`${instrumentSerif.className} ${
            isSmallMobile ? "text-3xl" : isMobile ? "text-4xl" : "text-5xl md:text-6xl"
          } font-normal tracking-tight text-white mb-6 leading-[1.1] text-center`}>
            Solutions Ownership{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              changes everything
            </span>
          </h2>
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 text-center max-w-4xl mx-auto leading-relaxed mb-4`}>
            Resilient Brands know as well as anyone the best solutions don&apos;t always win, often limited by the owners that believe in solutions and limited exposure in the algorithm led market.
          </p>
          <p className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-white font-medium text-center`}>
            That means:
          </p>
        </motion.div>

        {/* Changes List with special visual treatment */}
        <div className={`max-w-4xl mx-auto space-y-8`}>
          {changes.map((change, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 blur-2xl group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all duration-500" />

                {/* Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform group-hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <span className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-white font-semibold`}>
                        {change.title}
                      </span>
                      <span className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text font-bold`}>
                        {" — "}{change.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual emphasis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 blur-2xl opacity-30" />
            <svg
              className={`${isMobile ? "w-20 h-20" : "w-28 h-28"} relative`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M12 2L2 7V12C2 16.5 4.23 20.68 12 22C19.77 20.68 22 16.5 22 12V7L12 2Z"
                stroke="url(#ownership-changes-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="ownership-changes-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Shield, Users, Target } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const reasons = [
  {
    icon: Shield,
    title: "Providers hold the client trust",
    description: "They're already the first call when clients need answers.",
    color: "cyan"
  },
  {
    icon: Users,
    title: "Ownership creates alignment",
    description: "When MSPs/VARs share in growth, they're invested in making your solution succeed.",
    color: "emerald"
  },
  {
    icon: Target,
    title: "The ecosystem corrects itself",
    description: "The right tools win because they're championed by people who know what actually works.",
    color: "purple"
  }
]

export default function ProvidersPartners() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "py-16" : "py-24"} bg-gradient-to-b from-slate-950 to-black`}>
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
            Why Providers Are Your{" "}
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent py-1">
              Most Important Partners
            </span>
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-8" : "md:grid-cols-3 gap-8"}`}>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full">
                {/* Card */}
                <div className="relative h-full bg-gradient-to-b from-slate-900/90 to-slate-800/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  {/* Floating icon effect */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                      delay: index * 0.3,
                    }}
                    className="mb-6"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${
                      reason.color === "cyan"
                        ? "from-cyan-500/20 to-cyan-600/20"
                        : reason.color === "emerald"
                        ? "from-emerald-500/20 to-emerald-600/20"
                        : "from-purple-500/20 to-purple-600/20"
                    } backdrop-blur-sm flex items-center justify-center border ${
                      reason.color === "cyan"
                        ? "border-cyan-500/30"
                        : reason.color === "emerald"
                        ? "border-emerald-500/30"
                        : "border-purple-500/30"
                    }`}>
                      <reason.icon className={`w-10 h-10 ${
                        reason.color === "cyan"
                          ? "text-cyan-400"
                          : reason.color === "emerald"
                          ? "text-emerald-400"
                          : "text-purple-400"
                      }`} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className={`${isSmallMobile ? "text-xl" : "text-2xl"} font-semibold text-white mb-4`}>
                    {reason.title}
                  </h3>
                  <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400 leading-relaxed`}>
                    {reason.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${
                    reason.color === "cyan"
                      ? "from-cyan-500 to-cyan-400"
                      : reason.color === "emerald"
                      ? "from-emerald-500 to-emerald-400"
                      : "from-purple-500 to-purple-400"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${isSmallMobile ? "text-xs" : "text-sm"} text-neutral-500 text-center mt-8 italic`}
        >
          (Optional ownership arrangement available for qualified partners)
        </motion.p>
      </div>
    </section>
  )
}
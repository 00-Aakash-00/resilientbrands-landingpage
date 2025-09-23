"use client"

import { motion } from "framer-motion"
import { Scissors, Shield, Heart } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const benefits = [
  {
    icon: Scissors,
    title: "Cut through the noise",
    description: "Be the first to connect clients to the most advanced solutions that actually solve their problems.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Protect budgets",
    description: "Right-size spend so clients only pay for the tools they truly need.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Heart,
    title: "Build loyalty",
    description: "Position yourself as the partner who vets, filters, and delivers what really matters.",
    gradient: "from-emerald-500 to-teal-500"
  }
]

export default function RightSizeMaturity() {
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
          } font-normal tracking-tight text-white mb-6 leading-[1.1]`}>
            Helping Clients{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Right-Size Their Maturity
            </span>
          </h2>
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 max-w-3xl mx-auto leading-relaxed`}>
            Clients don&apos;t just need more technology — they need the right-sized solutions to match their stage of growth. With Resilient Brands, you can:
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-6" : "md:grid-cols-3 gap-8"}`}>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className={`relative h-full bg-gradient-to-br ${benefit.gradient} p-0.5 rounded-2xl`}>
                <div className="relative h-full bg-slate-900/95 rounded-2xl p-8 backdrop-blur-sm hover:bg-slate-900/90 transition-all duration-300">
                  {/* Icon with animated background */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mb-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                        <benefit.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className={`${isSmallMobile ? "text-xl" : "text-2xl"} font-semibold text-white mb-3`}>
                    {benefit.title}
                  </h3>
                  <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400 leading-relaxed`}>
                    {benefit.description}
                  </p>

                  {/* Animated line at bottom */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse animation-delay-2000" />
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse animation-delay-4000" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
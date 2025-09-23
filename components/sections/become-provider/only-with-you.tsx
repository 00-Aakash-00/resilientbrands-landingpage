"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Users, Network } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const features = [
  {
    icon: CheckCircle2,
    title: "Pre-vetted, advanced solutions",
    description: "that match your clients' needs and tested by you.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Ownership-driven partnerships",
    description: "that align your incentives with client outcomes.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Network,
    title: "A network effect",
    description: "where every vetted solution strengthens your ability to help clients win.",
    gradient: "from-emerald-500 to-green-500"
  }
]

export default function OnlyWithYou() {
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
          } font-normal tracking-tight text-white mb-6 leading-[1.1]`}>
            Only With You, Can Clients{" "}
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent py-1">
              Manage A Brand Before Others Define It
            </span>
          </h2>
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 max-w-3xl mx-auto leading-relaxed`}>
            Becoming a Resilient Provider means you get access to:
          </p>
        </motion.div>

        {/* Features with special visual treatment */}
        <div className={`max-w-5xl mx-auto ${isMobile ? "space-y-6" : "space-y-8"}`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-800/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`flex ${isMobile ? "flex-col gap-4" : "items-center gap-6"}`}>
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4`}>
                        <feature.icon className="w-full h-full text-white" />
                      </div>
                    </motion.div>

                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className={`${isSmallMobile ? "text-xl" : isMobile ? "text-2xl" : "text-2xl"} font-semibold text-white mb-2`}>
                        {feature.title}
                      </h3>
                      <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-lg"} text-neutral-400`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient}`}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="flex items-center gap-4">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="w-3 h-3 rounded-full bg-purple-400" />
            <div className="w-3 h-3 rounded-full bg-cyan-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-cyan-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
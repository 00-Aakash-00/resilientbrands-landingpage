"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Target } from "lucide-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

const winScenarios = [
  {
    icon: Users,
    title: "Providers are solutions Enabled not just another expense",
    description: "adoption skyrockets because our incentives are finally aligned.",
    color: "amber"
  },
  {
    icon: TrendingUp,
    title: "Business maturity is based on you not the algorithms",
    description: "no one team can do it all, now everyone owns a piece of the solutions they believe in built for them and not a statistic.",
    color: "yellow"
  },
  {
    icon: Target,
    title: "The ecosystem corrects itself",
    description: "every client, MSP and VAR that becomes an owner is ensuring the best solution for the job wins and not the solution with a rubber stamp.",
    color: "cyan"
  }
]

export default function TeamWins() {
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
            The team only wins when{" "}
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent py-1">
              the players don&apos;t lose!
            </span>
          </h2>
          <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 max-w-3xl mx-auto leading-relaxed`}>
            When you enable Resilient Brands, you&apos;re not backing another vendor fighting for market share. You&apos;re fueling a platform where:
          </p>
        </motion.div>

        {/* Win Scenarios Grid */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-8" : "md:grid-cols-3 gap-8"}`}>
          {winScenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full">
                {/* Card with team sport theme */}
                <motion.div
                  whileHover={{ y: -5, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full transform-gpu"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    scenario.color === "amber"
                      ? "from-amber-500/20 to-amber-600/20"
                      : scenario.color === "yellow"
                      ? "from-yellow-500/20 to-yellow-600/20"
                      : "from-cyan-500/20 to-cyan-600/20"
                  } blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />

                  <div className="relative h-full bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-700/30 hover:border-amber-500/50 transition-all duration-300">
                    {/* Trophy icon effect */}
                    <motion.div
                      animate={{
                        rotate: [0, -5, 5, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: index * 0.5,
                      }}
                    >
                      <div className={`w-16 h-16 rounded-xl ${
                        scenario.color === "amber"
                          ? "bg-gradient-to-br from-amber-400 to-amber-600"
                          : scenario.color === "yellow"
                          ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                          : "bg-gradient-to-br from-cyan-400 to-cyan-600"
                      } p-3 mb-6`}>
                        <scenario.icon className="w-full h-full text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className={`${isSmallMobile ? "text-lg" : "text-xl"} font-semibold text-white mb-3`}>
                      {scenario.title}
                    </h3>
                    <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400 leading-relaxed`}>
                      {" — "}{scenario.description}
                    </p>

                    {/* Winner badge */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center">
                        <span className="text-xs font-bold text-black">★</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team spirit visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
        >
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.1,
                }}
                className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import Aurora from "@/components/Aurora"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

export default function BecomeProviderHero() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "min-h-[75vh] mt-2" : "min-h-screen"} w-full text-white overflow-hidden bg-black`}>
      {/* Container for the centered background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative ${isMobile ? "w-[95%] h-[90%] mt-12" : "w-[95%] h-[87%] mt-20"} max-w-full ${isMobile ? "rounded-xl" : "rounded-3xl"} overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
        >
          {/* Aurora background - Using purple/indigo/cyan for providers */}
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={[
                "#8B5CF6", // Purple
                "#00E6FB", // Cyan
                "#6366F1", // Indigo
              ]}
              amplitude={1.6}
              blend={0.6}
              speed={1}
            />
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <div
        className={`relative z-20 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6"} h-full flex flex-col justify-center`}
      >
        <div className={`${isMobile ? "mt-24 px-2" : "mt-32"}`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-block text-purple-400 ${isSmallMobile ? "text-sm" : isMobile ? "text-base" : "text-lg"} font-medium mb-6`}
          >
            Become a Provider
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${instrumentSerif.className} ${
              isSmallMobile
                ? "text-3xl leading-tight"
                : isMobile
                  ? "text-4xl leading-tight"
                  : "text-5xl md:text-6xl lg:text-7xl"
            } font-normal tracking-tight leading-[1.1] ${isMobile ? "mb-6" : "mb-8"}`}
          >
            <span className="block text-white">
              Clients want security and growth —
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mt-2">
              but they&apos;re overwhelmed by vendors
            </span>
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              they can&apos;t fully vet.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 ${isMobile ? "mb-8 max-w-full" : "mb-10 max-w-3xl"} leading-relaxed`}
          >
            As a Managed Service Provider, your clients look to you for clarity. You&apos;re the one they trust to protect their business, guide their maturity, and recommend solutions that actually work.
          </motion.p>

          {/* Challenge section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${isMobile ? "mb-8" : "mb-10"}`}
          >
            <p className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 mb-4 font-medium`}>
              But here&apos;s the challenge:
            </p>
            <div className="space-y-3 ml-4">
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400`}>
                  Clients are flooded with pitches from vendors they don&apos;t know.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400`}>
                  Budgets get wasted on tools that don&apos;t fit their real needs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <p className={`${isSmallMobile ? "text-sm" : "text-base"} text-neutral-400`}>
                  Even the most advanced solutions often get ignored because clients can&apos;t separate marketing from reality.
                </p>
              </div>
            </div>
            <p className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold mt-6`}>
              That&apos;s some of the many reasons you are the hero in this story.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
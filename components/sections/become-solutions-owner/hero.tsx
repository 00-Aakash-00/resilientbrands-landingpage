"use client"

import { motion } from "framer-motion"
import Aurora from "@/components/Aurora"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

export default function SolutionsOwnerHero() {
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "min-h-[75vh] mt-2" : "min-h-screen"} w-full text-white overflow-hidden bg-black`}>
      {/* Container for the centered background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative ${isMobile ? "w-[95%] h-[90%] mt-12" : "w-[95%] h-[87%] mt-20"} max-w-full ${isMobile ? "rounded-xl" : "rounded-3xl"} overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
        >
          {/* Aurora background - Using gold/amber gradients for ownership theme */}
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={[
                "#FCD34D", // Amber
                "#00E6FB", // Cyan
                "#F59E0B", // Golden
              ]}
              amplitude={1.8}
              blend={0.3}
              speed={1}
            />
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 pointer-events-none z-10" />
        </div>
      </div>

      <div
        className={`relative z-20 max-w-7xl mx-auto ${isMobile ? "px-4" : "px-4 sm:px-6"} h-full pointer-events-none`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className={`text-center ${isMobile ? "mt-32 px-2" : "mt-72"} pointer-events-auto`}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-block text-amber-400 ${isSmallMobile ? "text-sm" : isMobile ? "text-base" : "text-lg"} font-medium mb-6`}
          >
            Become A Solutions Owner
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
              We make solutions work for clients —
            </span>
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mt-2">
              but the real upside always flows
            </span>
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              back to someone else.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"} text-neutral-300 ${isMobile ? "mb-6 max-w-full" : "mb-8 max-w-3xl mx-auto"} leading-relaxed`}
          >
            As a Managed Service Provider, you bring trust, relationships, and expertise to every client conversation providing the outcomes the solutions promise. But here&apos;s the truth: you rarely if ever own the tools you bring to market. You do the heavy lifting, build the client trust, but the real value flows back to the vendors as they rely on you for their growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"} text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text font-semibold ${isMobile ? "mb-8" : "mb-10"}`}
          >
            That&apos;s the broken model Resilient Brands is changing.
          </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
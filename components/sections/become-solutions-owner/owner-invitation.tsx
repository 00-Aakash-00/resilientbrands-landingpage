"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"
import { GrainGradient } from "@paper-design/shaders-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

export default function OwnerInvitation() {
  const { open: openContactModal } = useContactModal()
  const { isMobile, isSmallMobile } = useScreenSize()

  return (
    <section className={`relative ${isMobile ? "py-20" : "py-32"} overflow-hidden`}>
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <GrainGradient
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          softness={0.85}
          intensity={0.8}
          noise={0.5}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1.3}
          rotation={0}
          speed={0.6}
          colors={["hsl(45, 100%, 50%)", "hsl(35, 95%, 55%)", "hsl(185, 85%, 50%)"]}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className={`relative ${isMobile ? "p-8" : "p-16 lg:p-24"}`}>
          {/* Decorative elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="absolute top-8 right-8"
          >
            <TrendingUp className="w-8 h-8 text-amber-400/30" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="absolute bottom-8 left-8"
          >
            <Sparkles className="w-6 h-6 text-yellow-400/30" />
          </motion.div>

          <div className="text-center">
            {/* CTA Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${isMobile ? "mb-8" : "mb-10"}`}
            >
              <ArrowRight className={`${isMobile ? "w-8 h-8" : "w-12 h-12"} text-amber-400 mx-auto mb-4`} />
              <p className={`${
                isSmallMobile ? "text-xl" : isMobile ? "text-2xl" : "text-3xl"
              } text-white font-bold`}>
                Help shape the future today.
              </p>
            </motion.div>

            {/* Main CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                className={`bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold ${
                  isMobile ? "text-base px-8 py-3" : "text-lg px-12 py-4"
                } h-auto transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25`}
                onClick={openContactModal}
              >
                Contact Form CTA
              </Button>
            </motion.div>

            {/* Don't miss out section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`${isMobile ? "mt-16" : "mt-20"} ${isMobile ? "pt-8" : "pt-12"} border-t border-amber-500/30`}
            >
              <h3 className={`${instrumentSerif.className} ${
                isSmallMobile ? "text-3xl" : isMobile ? "text-4xl" : "text-5xl md:text-6xl"
              } font-normal tracking-tight text-white mb-6 leading-[1.1]`}>
                Don&apos;t miss out on{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  more upside!
                </span>
              </h3>

              <p className={`${
                isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"
              } text-neutral-200 font-medium`}>
                Transform the industry with us and help make sure{" "}
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text font-bold">
                  better solutions can win!
                </span>
              </p>
            </motion.div>

            {/* Visual flourish */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400 blur-lg opacity-50" />
                  <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-400" />
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-yellow-500/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
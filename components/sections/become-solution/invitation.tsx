"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"
import { GrainGradient } from "@paper-design/shaders-react"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

export default function TheInvitation() {
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
          intensity={0.75}
          noise={0.45}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1.2}
          rotation={0}
          speed={0.5}
          colors={["hsl(185, 100%, 45%)", "hsl(150, 90%, 50%)", "hsl(170, 95%, 55%)"]}
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
            <Sparkles className="w-8 h-8 text-cyan-400/30" />
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
            <Sparkles className="w-6 h-6 text-emerald-400/30" />
          </motion.div>

          <div className="text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${instrumentSerif.className} ${
                isSmallMobile ? "text-3xl" : isMobile ? "text-4xl" : "text-5xl md:text-6xl lg:text-7xl"
              } font-normal tracking-tight text-white mb-6 leading-[1.1]`}
            >
              The Invitation
            </motion.h2>

            {/* Main message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className={`${
                isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"
              } text-neutral-200 mb-10 max-w-3xl mx-auto font-normal leading-relaxed`}
            >
              If your solution deserves better partners, it&apos;s time to join the{" "}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-semibold">
                Resilient Brands
              </span>{" "}
              ecosystem.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                className={`bg-white hover:bg-white/90 text-black font-bold ${
                  isMobile ? "text-base px-8 py-3" : "text-lg px-12 py-4"
                } h-auto transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25`}
                onClick={openContactModal}
              >
                Join Resilient Brands Today
                <ArrowRight className={`${isMobile ? "ml-2 h-5 w-5" : "ml-3 h-6 w-6"}`} />
              </Button>

              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
                <ArrowRight className="w-4 h-4 text-cyan-400" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-500/50" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  )
}
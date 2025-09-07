"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"
import { GrainGradient } from "@paper-design/shaders-react"
import { instrumentSerif } from "@/lib/fonts"

export default function OpenForBusiness() {
  const { open: openContactModal } = useContactModal()
  
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* GrainGradient Background */}
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
          colors={["hsl(185, 80%, 50%)", "hsl(190, 70%, 45%)", "hsl(195, 90%, 55%)"]}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto z-10"
      >
        <div className="relative p-16 lg:p-24">
          
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${instrumentSerif.className} text-white text-center text-balance font-normal tracking-tight text-4xl md:text-5xl lg:text-7xl mb-4 leading-[1.1]`}
            >
              Open For Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-neutral-300 mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Apply to become a provider today and align your expertise and offer to those that need it!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-black font-semibold text-lg px-10 py-6 h-auto transform hover:scale-105 transition-all duration-300"
                onClick={openContactModal}
              >
                Apply Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
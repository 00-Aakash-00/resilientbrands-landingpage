"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function OpenForBusiness() {
  const { open: openContactModal } = useContactModal()
  
  return (
    <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto"
      >
        <div className="relative p-16 lg:p-24 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-black/80 backdrop-blur-xl rounded-3xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          {/* Enhanced decorative sparkles */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-10 right-10"
          >
            <Sparkles className="w-10 h-10 text-cyan-400/60" />
          </motion.div>
          
          {/* Additional decorative element */}
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-10 left-10"
          >
            <Sparkles className="w-8 h-8 text-cyan-400/40" />
          </motion.div>
          
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]"
              style={{ textShadow: "0 2px 20px rgba(0,230,251,0.3)" }}
            >
              Open For Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-neutral-500 mb-12 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
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
                className="bg-white hover:bg-white/90 text-black font-semibold text-lg px-10 py-6 h-auto shadow-2xl shadow-cyan-500/20 transform hover:scale-105 transition-all duration-300"
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
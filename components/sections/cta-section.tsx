"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"
import { instrumentSerif } from "@/lib/fonts"
import { useScreenSize } from "@/hooks/use-mobile"

export default function CtaSection() {
  const { open: openContactModal } = useContactModal()
  const { isMobile, isSmallMobile } = useScreenSize()
  return (
    <section id="cta" className={`relative ${isMobile ? 'py-16' : 'py-24 md:py-32'} bg-[url('/cta-background-car.jpg')] bg-cover bg-center`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
      <div className={`relative z-10 container mx-auto text-center text-white ${isMobile ? 'px-4' : ''}`}>
        <h2
          className={`${instrumentSerif.className} ${isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-normal tracking-tight`}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Ready to Validate Your Big Idea?
        </h2>
        <p
          className={`${isMobile ? 'mt-3' : 'mt-4'} ${isSmallMobile ? 'text-sm' : isMobile ? 'text-base' : 'text-lg md:text-xl'} max-w-2xl mx-auto text-white/90`}
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          Stop guessing. Start building with data-driven confidence. Get your AI-powered research report today.
        </p>
        <Button
          size={isMobile ? "default" : "lg"}
          className={`${isMobile ? 'mt-6' : 'mt-8'} bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-black/30 transform hover:scale-105 transition-transform duration-300`}
          onClick={openContactModal}
        >
          Generate My Report <ArrowRight className={`${isMobile ? 'ml-1 h-4 w-4' : 'ml-2 h-5 w-5'}`} />
        </Button>
      </div>
    </section>
  )
}

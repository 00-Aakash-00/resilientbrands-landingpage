"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContactModal } from "@/hooks/use-contact-modal";
import GrainGradientLite from "@/components/GrainGradientLite";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";
import { GrainGradient } from "@paper-design/shaders-react";

export default function ProviderInvitation() {
  const { open: openContactModal } = useContactModal();
  const { isMobile, isSmallMobile } = useScreenSize();

  return (
    <section
      className={`relative ${isMobile ? "py-20" : "py-32"} overflow-hidden`}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <GrainGradient
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          softness={0.76}
          intensity={0.45}
          noise={0}
          shape="corners"
          offsetX={0}
          offsetY={0}
          scale={1}
          rotation={0}
          speed={1}
          colors={[
            "hsl(193, 85%, 66%)",
            "hsl(196, 100%, 83%)",
            "hsl(195, 100%, 50%)",
          ]}
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

          <div className="text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${instrumentSerif.className} ${
                isSmallMobile
                  ? "text-3xl"
                  : isMobile
                  ? "text-4xl"
                  : "text-5xl md:text-6xl lg:text-7xl"
              } font-normal tracking-tight text-white mb-8 leading-[1.1]`}
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
                isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"
              } text-neutral-200 mb-6 max-w-3xl mx-auto leading-relaxed`}
            >
              Your clients depend on you to guide their growth and protect their
              future. Don&apos;t let them get lost in vendor noise or settle for
              the wrong tools.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`${
                isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"
              } text-neutral-100 mb-10 max-w-3xl mx-auto font-medium leading-relaxed`}
            >
              With{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-semibold">
                Resilient Brands
              </span>
              , you can be the first to deliver the solutions that matter — and
              continue to be the partner they&apos;ll never second-guess.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                className={`bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold ${
                  isMobile ? "text-base px-8 py-3" : "text-lg px-12 py-4"
                } h-auto transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25`}
                onClick={openContactModal}
              >
                Become a Provider Today
                <ArrowRight
                  className={`${isMobile ? "ml-2 h-5 w-5" : "ml-3 h-6 w-6"}`}
                />
              </Button>

              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
                <ArrowRight className="w-4 h-4 text-purple-400" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

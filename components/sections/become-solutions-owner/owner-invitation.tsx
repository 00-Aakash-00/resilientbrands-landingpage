"use client";

import { motion } from "framer-motion";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";
import { GrainGradient } from "@paper-design/shaders-react";

export default function OwnerInvitation() {
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
            {/* Don't miss out section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`${isMobile ? "mt-16" : "mt-20"} ${
                isMobile ? "pt-8" : "pt-12"
              } border-t border-amber-500/30`}
            >
              <h3
                className={`${instrumentSerif.className} ${
                  isSmallMobile
                    ? "text-3xl"
                    : isMobile
                    ? "text-4xl"
                    : "text-5xl md:text-6xl"
                } font-normal tracking-tight text-white mb-6 leading-[1.1]`}
              >
                Don&apos;t miss out on{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  more upside!
                </span>
              </h3>

              <p
                className={`${
                  isSmallMobile ? "text-lg" : isMobile ? "text-xl" : "text-2xl"
                } text-neutral-200 font-medium`}
              >
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
  );
}

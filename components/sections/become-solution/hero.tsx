"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/hooks/use-contact-modal";
import Aurora from "@/components/Aurora";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

export default function BecomeSolutionHero() {
  const { open: openContactModal } = useContactModal();
  const { isMobile, isSmallMobile } = useScreenSize();

  return (
    <section
      className={`relative ${
        isMobile ? "min-h-[75vh] mt-2" : "min-h-screen"
      } w-full text-white overflow-hidden bg-black`}
    >
      {/* Container for the centered background effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`relative ${
            isMobile ? "w-[95%] h-[90%] mt-12" : "w-[95%] h-[87%] mt-20"
          } max-w-full ${
            isMobile ? "rounded-xl" : "rounded-3xl"
          } overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900`}
        >
          {/* Aurora background */}
          <div className="absolute inset-0 z-0">
            <Aurora
              colorStops={[
                "#10B981", // Emerald
                "#00E6FB", // Cyan
                "#2DE1FC", // Light cyan
              ]}
              amplitude={1.6}
              blend={0.3}
              speed={1}
            />
          </div>

          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 pointer-events-none z-10" />
        </div>
      </div>

      <div
        className={`relative z-20 max-w-7xl mx-auto ${
          isMobile ? "px-4" : "px-4 sm:px-6"
        } h-full pointer-events-none`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div
            className={`text-center ${
              isMobile ? "mt-32 px-2" : "mt-72"
            } pointer-events-auto`}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-block text-cyan-400 ${
                isSmallMobile ? "text-sm" : isMobile ? "text-base" : "text-lg"
              } font-medium mb-6`}
            >
              Become a Solution
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
              } font-normal tracking-tight leading-[1.1] ${
                isMobile ? "mb-6" : "mb-8"
              }`}
            >
              <span className="block text-white">
                The most advanced products
              </span>
              <span className="block text-white mt-2">
                don&apos;t always win —
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                the easiest to work with
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                products usually do.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${
                isSmallMobile ? "text-base" : isMobile ? "text-lg" : "text-xl"
              } text-neutral-300 ${
                isMobile ? "mb-8 max-w-full" : "mb-10 max-w-3xl mx-auto"
              } leading-relaxed`}
            >
              You&apos;ve built a solution that delivers real outcomes — often
              more advanced than anything on the market. But breaking through
              crowded, algorithm-driven channels is harder than ever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size={isMobile ? "default" : "lg"}
                className={`bg-white hover:bg-gray-100 text-black font-semibold ${
                  isMobile ? "text-base px-6 py-2" : "text-lg px-8 py-3"
                } h-auto transform hover:scale-105 transition-all duration-300 shadow-lg`}
                onClick={openContactModal}
              >
                Join Resilient Brands Today
                <ArrowRight
                  className={`${isMobile ? "ml-2 h-4 w-4" : "ml-3 h-5 w-5"}`}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

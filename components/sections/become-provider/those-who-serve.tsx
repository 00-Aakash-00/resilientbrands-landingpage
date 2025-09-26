"use client";

import { motion } from "framer-motion";
import { Handshake, Brain, Shield } from "lucide-react";
import { instrumentSerif } from "@/lib/fonts";
import { useScreenSize } from "@/hooks/use-mobile";

const outcomes = [
  {
    icon: Handshake,
    title: "Trust beats sales pressure",
    description:
      "Clients want to know their solutions are chosen by an advisor, not an algorithm.",
    color: "purple",
  },
  {
    icon: Brain,
    title: "Expertise fills the gaps",
    description:
      "You bring confidence to areas outside the client's wheelhouse.",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "Security is on the line",
    description:
      "The wrong solution doesn't just waste money — it leaves clients exposed.",
    color: "emerald",
  },
];

export default function ThoseWhoServe() {
  const { isMobile, isSmallMobile } = useScreenSize();

  return (
    <section
      className={`relative ${isMobile ? "py-16" : "py-24"} overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      <div
        className={`relative z-10 max-w-7xl mx-auto ${
          isMobile ? "px-4" : "px-4 sm:px-6 lg:px-8"
        }`}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-center ${isMobile ? "mb-12" : "mb-16"}`}
        >
          <h2
            className={`${instrumentSerif.className} ${
              isSmallMobile
                ? "text-3xl"
                : isMobile
                ? "text-4xl"
                : "text-5xl md:text-6xl"
            } font-normal tracking-tight text-white mb-4 leading-[1.1]`}
          >
            Those Who Serve{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Create Outcomes
            </span>
          </h2>
        </motion.div>

        {/* Outcomes Grid with special layout */}
        <div className={`max-w-5xl mx-auto`}>
          <div
            className={`grid ${
              isMobile ? "grid-cols-1 gap-8" : "md:grid-cols-3 gap-8"
            }`}
          >
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative">
                  {/* Floating card effect */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        outcome.color === "purple"
                          ? "from-purple-500/20 to-purple-600/20"
                          : outcome.color === "cyan"
                          ? "from-cyan-500/20 to-cyan-600/20"
                          : "from-emerald-500/20 to-emerald-600/20"
                      } blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300`}
                    />

                    <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "loop",
                          delay: index * 0.5,
                        }}
                      >
                        <div
                          className={`w-14 h-14 rounded-xl ${
                            outcome.color === "purple"
                              ? "bg-purple-500/20 border-purple-500/30"
                              : outcome.color === "cyan"
                              ? "bg-cyan-500/20 border-cyan-500/30"
                              : "bg-emerald-500/20 border-emerald-500/30"
                          } border backdrop-blur-sm flex items-center justify-center mb-6`}
                        >
                          <outcome.icon
                            className={`w-7 h-7 ${
                              outcome.color === "purple"
                                ? "text-purple-400"
                                : outcome.color === "cyan"
                                ? "text-cyan-400"
                                : "text-emerald-400"
                            }`}
                          />
                        </div>
                      </motion.div>

                      {/* Content */}
                      <h3
                        className={`${
                          isSmallMobile ? "text-xl" : "text-2xl"
                        } font-semibold text-white mb-3`}
                      >
                        {outcome.title}
                      </h3>
                      <p
                        className={`${
                          isSmallMobile ? "text-sm" : "text-base"
                        } text-neutral-400 leading-relaxed`}
                      >
                        {outcome.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central connecting element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className={`${isMobile ? "mt-12" : "mt-16"} flex justify-center`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 blur-3xl opacity-30" />
              <div className="relative w-32 h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

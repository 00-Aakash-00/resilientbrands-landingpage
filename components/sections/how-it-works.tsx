"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Rocket, ChevronRight } from "lucide-react";
import { instrumentSerif } from "@/lib/fonts";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Seamlessly integrate your infrastructure in under 60 seconds",
    details:
      "Our intelligent connectors work with 500+ platforms, automatically detecting your setup.",
    icon: Zap,
    metrics: ["< 60s setup", "500+ integrations", "Zero downtime"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "AI-powered insights process millions of data points in real-time",
    details:
      "Advanced machine learning algorithms provide actionable insights and predictive analytics.",
    icon: Shield,
    metrics: ["99.3% accuracy", "Real-time processing", "1M+ data points"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    number: "03",
    title: "Optimize",
    description: "Deploy automated improvements with one-click implementation",
    details:
      "Transform insights into action with our intelligent automation engine.",
    icon: Rocket,
    metrics: ["247% efficiency", "100% automated", "850% ROI"],
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative pt-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Minimal geometric pattern */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-5">
            <pattern
              id="grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              How it works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${instrumentSerif.className} text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight`}
          >
            Simple by{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              design
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
          >
            Get started in minutes, not months. Our streamlined process
            transforms your workflow.
          </motion.p>
        </motion.div>

        {/* Steps Container */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-200">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-2">
                      <div className="flex lg:flex-col items-center gap-4">
                        <span className="text-5xl font-bold text-slate-700">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-lg bg-transparent border border-white/50 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-neutral-300 mb-3">
                        {step.description}
                      </p>
                      <p className="text-sm text-neutral-500">{step.details}</p>
                    </div>

                    {/* Metrics */}
                    <div className="lg:col-span-3">
                      <div className="flex lg:flex-col gap-3">
                        {step.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <ChevronRight className="w-3 h-3 text-cyan-400" />
                            <span className="text-neutral-400">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-800 rounded-b-2xl overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${step.gradient}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5 + index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3">
            <button className="group px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 flex items-center gap-2">
              <span>Start your journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

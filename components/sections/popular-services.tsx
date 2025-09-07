"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  FileCheck,
  ChevronRight,
} from "lucide-react";
import { instrumentSerif } from "@/lib/fonts";

const servicesData = {
  "Brand Performance": {
    icon: TrendingUp,
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-500",
    services: [
      "Leads Enrichment",
      "Search Engine Optimization Audit",
      "Brand Audit",
      "Sales Audit",
      "Sales Appointment Setting",
      "Brand Design",
      "Web Design",
      "Email Marketing",
      "Social Media Marketing",
      "Content generation",
    ],
  },
  "Security & IT": {
    icon: Shield,
    color: "#3B82F6",
    gradient: "from-blue-500 to-indigo-500",
    services: [
      "Penetration Testing",
      "Adversarial Tool assessment",
      "Managed Security",
      "Managed Cloud",
      "Managed Information Technology",
      "Managed Operational Technology",
      "Encryption management",
      "Network configuration and reconfiguration",
      "Firewall management",
    ],
  },
  Compliance: {
    icon: FileCheck,
    color: "#10B981",
    gradient: "from-emerald-500 to-green-500",
    services: [
      "Compliance Audit Ready Assessment",
      "Compliance Policy Generation",
      "Evidence mapping and collection",
      "Controls Automation",
      "Compliance controls testing",
      "Compliance training",
    ],
  },
};

export default function PopularServices() {
  const [activeTab, setActiveTab] = useState("Brand Performance");

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Simple geometric background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-5">
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <rect x="200" y="0" width="100" height="100" fill="white" />
            <rect x="100" y="100" width="100" height="100" fill="white" />
            <rect x="300" y="100" width="100" height="100" fill="white" />
            <rect x="0" y="200" width="100" height="100" fill="white" />
            <rect x="200" y="200" width="100" height="100" fill="white" />
            <rect x="100" y="300" width="100" height="100" fill="white" />
            <rect x="300" y="300" width="100" height="100" fill="white" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              Popular Services
            </span>
          </motion.div>

          <motion.h2
            className={`${instrumentSerif.className} text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Services that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              deliver results
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive solutions tailored for every aspect of your business
            growth
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 bg-slate-900 rounded-lg border border-slate-800">
            {Object.entries(servicesData).map(([category, data]) => {
              const Icon = data.icon;
              const isActive = activeTab === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`
                    relative px-6 py-3 rounded-md font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-slate-800 text-white"
                        : "text-neutral-400 hover:text-white"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            {/* Category Header Card - More prominent and aesthetic */}
            <div className="mb-12 relative">
              <div className="relative p-10 bg-slate-900/30 rounded-2xl border border-slate-800 overflow-hidden">
                {/* Accent gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${servicesData[activeTab].gradient}`}
                />

                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute -right-10 -top-10 w-40 h-40">
                    {(() => {
                      const Icon = servicesData[activeTab].icon;
                      return <Icon className="w-full h-full" />;
                    })()}
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-transparent border border-white/50 flex items-center justify-center">
                      {(() => {
                        const Icon = servicesData[activeTab].icon;
                        return <Icon className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">
                        {activeTab}
                      </h3>
                      <p className="text-neutral-400">
                        <span className="text-2xl font-bold text-white">
                          {servicesData[activeTab].services.length}
                        </span>
                        <span className="ml-2">specialized services</span>
                      </p>
                    </div>
                  </div>

                  {/* Stats badge */}
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${servicesData[activeTab].gradient} animate-pulse`}
                    />
                    <span className="text-sm font-medium text-neutral-300">
                      Available Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid - More aesthetic cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {servicesData[activeTab].services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group"
                >
                  <div className="relative h-full p-6 bg-slate-900/30 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:bg-slate-900/50">
                    {/* Service number */}
                    <div className="absolute top-6 right-6 text-3xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Icon container */}
                      <div className="w-10 h-10 rounded-lg bg-transparent border border-white/50 flex-shrink-0 flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 text-white" />
                      </div>

                      {/* Service content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                          {service}
                        </h4>
                        <p className="text-sm text-neutral-500">
                          Professional implementation with proven results
                        </p>
                      </div>
                    </div>

                    {/* Hover accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${servicesData[activeTab].gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section - More aesthetic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="relative p-10 bg-gradient-to-br from-slate-900/50 to-slate-900/30 rounded-2xl border border-slate-800">
                {/* Background accent */}
                <div
                  className={`absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br ${servicesData[activeTab].gradient} opacity-5 blur-3xl`}
                />

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Ready to transform your {activeTab.toLowerCase()}?
                    </h3>
                    <p className="text-lg text-neutral-400">
                      Get started with our expert team and cutting-edge
                      solutions
                    </p>
                  </div>

                  <button className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-white/90 transition-all duration-200 shadow-2xl">
                    <span>Map my brand</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

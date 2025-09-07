"use client"

import { motion } from "framer-motion"
import { Building2, Shield } from "lucide-react"
import { useScreenSize } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

const trustedBy = [
  {
    title: "Business Development Services",
    description: "Trusted and selected by top Fortune 500 companies.",
    detail: "Hundreds of organizations have trusted our providers to drive sales engagement.",
    icon: Building2,
    stats: "500+",
    label: "Fortune 500 Companies"
  },
  {
    title: "Technology Solutions & Service Providers",
    description: "More than 22,000 teams trust the power of tools and the expertise of our providers in every industry at every size.",
    icon: Shield,
    stats: "22k+",
    label: "Teams Worldwide"
  }
]

export default function TrustedBy() {
  const { isMobile, isSmallMobile } = useScreenSize()
  
  return (
    <section className={cn("relative bg-black overflow-hidden", isMobile ? "py-16 px-4" : "py-32 px-4 sm:px-6 lg:px-8")}>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={cn("text-center", isMobile ? "mb-10" : "mb-16")}
        >
          <h2 className={cn("font-bold tracking-tight text-white mb-4 leading-[1.1]", isSmallMobile ? "text-2xl" : isMobile ? "text-3xl" : "text-4xl md:text-5xl lg:text-6xl")}>
            Trusted by
            <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent py-1">
              leading teams
            </span>
          </h2>
        </motion.div>
        
        <div className={cn("grid md:grid-cols-2", isMobile ? "gap-4" : "gap-8")}>
          {trustedBy.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className={cn("relative bg-gradient-to-b from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300", isMobile ? "p-6" : "p-8 lg:p-10")}>
                  {/* Stats overlay */}
                  <div className={cn("absolute", isMobile ? "top-4 right-4" : "top-8 right-8")}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-right"
                    >
                      <div className={cn("font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent", isMobile ? "text-2xl" : "text-3xl")}>
                        {item.stats}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {item.label}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={cn("rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0", isMobile ? "w-10 h-10" : "w-14 h-14")}
                    >
                      <Icon className={cn("text-cyan-400", isMobile ? "w-5 h-5" : "w-7 h-7")} />
                    </motion.div>
                    <div className={cn("flex-1", isMobile ? "pr-12" : "pr-24")}>
                      <h3 className={cn("font-medium text-white mb-3 group-hover:text-cyan-400 transition-colors", isMobile ? "text-lg" : "text-2xl")}>
                        {item.title}
                      </h3>
                      <p className={cn("text-cyan-400/80 mb-3", isMobile && "text-sm")}>
                        {item.description}
                      </p>
                      {item.detail && (
                        <p className={cn("text-neutral-400", isMobile ? "text-xs" : "text-sm")}>
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
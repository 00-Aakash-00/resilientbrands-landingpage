"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock9, BrainCircuit, Layers, EyeOff, TrendingUp, ClipboardCheck, DatabaseZap, FileText } from "lucide-react"

const withResilientBrandsData = [
  {
    icon: <TrendingUp className="w-9 h-9" />,
    title: "Done in 10 minutes",
    description: "Get comprehensive market research reports in record time.",
  },
  {
    icon: <ClipboardCheck className="w-9 h-9" />,
    title: "Follows tried + true process",
    description: "Leverages proven methodologies used by top VCs and startups.",
  },
  {
    icon: <DatabaseZap className="w-9 h-9" />,
    title: "Scrapes all data",
    description: "Our AI ensures you don't miss a single competitor or market trend.",
  },
  {
    icon: <FileText className="w-9 h-9" />,
    title: "Beautiful report",
    description: "Investor-ready reports that clearly communicate your market position.",
  },
]

const withoutResilientBrandsData = [
  {
    icon: <Clock9 className="w-9 h-9" />,
    title: "90+ hours of market research",
    description: "Manual research is slow, tedious, and prone to burnout.",
  },
  {
    icon: <BrainCircuit className="w-9 h-9" />,
    title: "Wasted time learning",
    description: "The learning curve for proper market research is steep.",
  },
  {
    icon: <Layers className="w-9 h-9" />,
    title: "Hours compiling data",
    description: "Manually gathering and organizing data is a massive time sink.",
  },
  {
    icon: <EyeOff className="w-9 h-9" />,
    title: "Possibly missing competitors",
    description: "Manual searches can easily overlook key players in the market.",
  },
]

const contentVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] } },
}

export default function ComparisonSection() {
  const [useTool, setUseTool] = useState(true)
  return (
    <section id="why-us" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight flex flex-col items-center space-y-2">
            <span>When you</span>
            <div className="flex items-center flex-wrap justify-center">
              <div className="inline-flex items-center align-middle h-16">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={useTool ? "use" : "dont"}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-block font-semibold ${useTool ? "text-primary" : "text-muted"}`}
                  >
                    {useTool ? "use" : "don't use"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="inline-flex items-center align-middle mx-4 relative">
                <div
                  onClick={() => setUseTool(!useTool)}
                  className={`w-16 h-9 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
                    useTool ? "bg-primary" : "bg-muted/40"
                  }`}
                >
                  <motion.div
                    className="w-7 h-7 bg-white rounded-full shadow-md"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{ marginLeft: useTool ? "auto" : "0", marginRight: useTool ? "0" : "auto" }}
                  />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 flex flex-col items-center text-highlight">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15C15.3333 13.6667 11.2 11.2 12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path d="M12 6L8 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 6L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="font-semibold text-sm">Click Me</span>
                </div>
              </div>
              <span className="text-primary">Resilient Brands</span>
            </div>
          </h2>
          <motion.div
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          >
            {[0, 1, 2, 3].map((index) => {
              const item = useTool ? withResilientBrandsData[index] : withoutResilientBrandsData[index]
              return (
                <div
                  key={index}
                  className={`bg-card p-6 rounded-2xl shadow-lg text-left overflow-hidden border-2 transition-all duration-300 ${
                    useTool ? "border-primary/50" : "border-transparent"
                  } hover:shadow-xl hover:-translate-y-1 h-56`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.title}
                      variants={contentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="flex flex-col items-start"
                    >
                      <div className={`h-12 flex items-center ${useTool ? "text-primary" : "text-muted"}`}>
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-lg mt-4 text-foreground">{item.title}</h3>
                      <p className="text-muted">{item.description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

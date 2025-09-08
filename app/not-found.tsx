"use client"

import Link from "next/link"
import FuzzyText from "@/components/ui/fuzzy-text"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

const SubtleBlob = ({ className, ...props }: { className?: string; [key: string]: unknown }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl ${className}`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
    {...props}
  />
)

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f8f9fa] p-4">
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <SubtleBlob
          className="h-[500px] w-[500px] bg-teal-500/5"
          style={{ top: "0%", left: "10%" }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <SubtleBlob
          className="h-[400px] w-[400px] bg-teal-500/5"
          style={{ bottom: "5%", right: "15%" }}
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Prominent Fuzzy 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <FuzzyText
            fontSize={200}
            fontWeight={900}
            color="#2E8A84"
            baseIntensity={0.1}
            hoverIntensity={0.3}
          >
            404
          </FuzzyText>
        </motion.div>

        {/* Content Card, positioned below without overlap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: 0.4,
          }}
          className="relative w-full max-w-md rounded-2xl bg-white/70 p-8 text-center shadow-xl shadow-slate-200/50 backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Page Not Found</h1>
          <p className="mt-3 text-slate-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button
                size="lg"
                className="w-full bg-[#2E8A84] text-white shadow-md shadow-teal-500/20 transition-all hover:bg-[#25736e] hover:shadow-lg hover:shadow-teal-500/30 sm:w-auto"
              >
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => window.history.back()}
              className="group text-slate-600 transition-colors hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Support Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 z-20"
      >
        <a
          href="mailto:support@resilientbrands.ai"
          className="text-sm text-slate-500 transition-colors hover:text-[#2E8A84]"
        >
          support
        </a>
      </motion.div>
    </main>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github, ArrowUp } from "lucide-react"

const footerLinks = {
  ourNetwork: [
    { name: "Solutions", href: "#services" },
    { name: "How it Works", href: "#connect-analyze-optimize" },
    { name: "Get Started", href: "#map-my-brand" },
  ],
  company: [
    { name: "Solutions", href: "https://www.resilientbrands.ai/become-solution" },
    { name: "Providers", href: "https://www.resilientbrands.ai/become-provider" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
}

const socialLinks = [
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { name: "GitHub", icon: <Github className="h-5 w-5" />, href: "#" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-slate-800/50">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-black to-black" />
      
      {/* Floating back to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500/10 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-cyan-400" />
      </motion.button>
      
      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <Link href="/" className="mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Resilient Brands Logo"
                  width={80}
                  height={80}
                  className="brightness-0 invert group-hover:brightness-200 transition-all duration-300"
                  style={{ width: 80, height: "auto" }}
                />
              </motion.div>
            </Link>
            <p className="text-neutral-400 max-w-xs mb-8 leading-relaxed">
              Where technology and services align.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-neutral-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    {social.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="lg:col-span-1"></div>

          {/* Links grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-medium text-white mb-4">
                  {category === 'ourNetwork' ? 'Our Network' : category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800/50 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500 text-center md:text-left">
              © 2025 Resilient Brands. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600 text-center md:text-right max-w-lg">
              Reviews expire at 12 months · Badges require platform engagement & verified reviews.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

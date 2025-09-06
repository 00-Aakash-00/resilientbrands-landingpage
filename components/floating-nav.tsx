"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/hooks/use-contact-modal";

const navLinks = [
  { name: "Pricing", href: "#pricing" },
  { name: "Features", href: "#features" },
  { name: "Enterprise", href: "#enterprise" },
  { name: "Blog", href: "#blog" },
];

export default function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open: openContactModal } = useContactModal();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[95%]">
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-8 lg:px-10">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Logo on the left */}
            <div className="flex items-center">
              <Link
                href="#"
                aria-label="Homepage"
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  alt="Resilient Brands Logo"
                  width={80}
                  height={80}
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            {/* Center navigation */}
            <div className="hidden lg:flex items-center justify-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white text-base font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center justify-end gap-6">
              <Link
                href="#signin"
                className="hidden md:block text-white/80 hover:text-white text-base font-medium transition-colors"
              >
                Log in
              </Link>
              <Button
                className="hidden md:inline-flex bg-white text-black hover:bg-white/90 text-base font-semibold px-6 py-3 h-11"
                onClick={openContactModal}
              >
                Sign Up
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg lg:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-black/95 pt-20 pb-8 px-6"
            >
              <nav className="flex flex-col items-center gap-6 text-lg font-medium text-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary-foreground/80 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 w-full mt-6">
                  <Link
                    href="#signin"
                    className="text-center text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Button
                    size="lg"
                    className="w-full bg-white text-black hover:bg-white/90"
                    onClick={() => {
                      setIsMenuOpen(false);
                      openContactModal();
                    }}
                  >
                    Sign Up
                  </Button>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

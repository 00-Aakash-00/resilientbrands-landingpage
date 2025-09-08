"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useContactModal } from "@/hooks/use-contact-modal";
import { useScreenSize } from "@/hooks/use-mobile";

const navLinks = [
  { name: "Become a Solution", href: "#become-solution" },
  { name: "Become a Provider", href: "#become-provider" },
  { name: "Become a Solutions Partner", href: "#become-partner" },
  { name: "Services Guide", href: "#services-guide" },
];

export default function FloatingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open: openContactModal } = useContactModal();
  const { isMobile, isSmallMobile } = useScreenSize();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed ${isMobile ? 'top-2' : 'top-4'} left-1/2 -translate-x-1/2 z-50 ${isMobile ? 'w-[calc(100%-1rem)]' : 'w-[calc(100%-2rem)]'} ${isMobile ? 'max-w-[calc(100%-1rem)]' : 'max-w-[95%]'}`}>
        <div className={`bg-black/80 backdrop-blur-xl ${isMobile ? 'rounded-lg px-3' : 'rounded-2xl px-8 lg:px-10'}`}>
          <div className={`${isMobile ? 'flex items-center justify-between' : 'grid grid-cols-3 items-center'} ${isMobile ? 'h-12' : 'h-20'}`}>
            {/* Logo on the left */}
            <div className={`flex items-center ${isMobile ? 'flex-1' : ''}`}>
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
                  className={`${isMobile ? 'h-8' : 'h-14'} w-auto`}
                />
              </Link>
            </div>

            {/* Center navigation */}
            <div className={`hidden xl:flex items-center justify-center gap-6`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-white/80 hover:text-white text-sm font-medium transition-colors whitespace-nowrap`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right side actions */}
            <div className={`flex items-center justify-end ${isMobile ? 'gap-2' : 'gap-6'}`}>
              <Link
                href="#signin"
                className={`hidden xl:block text-white/80 hover:text-white text-sm font-medium transition-colors`}
              >
                Log in
              </Link>
              <Button
                className={`hidden xl:inline-flex bg-white text-black hover:bg-white/90 text-sm font-semibold px-4 py-2 h-9`}
                onClick={openContactModal}
              >
                Start Now!
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`xl:hidden text-white hover:bg-white/10 ${isMobile ? 'h-8 w-8' : ''}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
                ) : (
                  <Menu className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'}`} />
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
              className={`bg-black/95 ${isMobile ? 'pt-16 pb-6 px-4' : 'pt-20 pb-8 px-6'}`}
            >
              <nav className={`flex flex-col items-center ${isMobile ? 'gap-4' : 'gap-6'} ${isSmallMobile ? 'text-base' : 'text-lg'} font-medium text-white`}>
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
                <div className={`flex flex-col ${isMobile ? 'gap-3' : 'gap-4'} w-full ${isMobile ? 'mt-4' : 'mt-6'}`}>
                  <Link
                    href="#signin"
                    className="text-center text-white/80 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Button
                    size={isMobile ? 'default' : 'lg'}
                    className={`w-full bg-white text-black hover:bg-white/90 ${isSmallMobile ? 'text-sm' : 'text-base'}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      openContactModal();
                    }}
                  >
                    Start Now!
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

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Github } from "lucide-react"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Get Started", href: "#cta" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
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
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 -z-0 -translate-y-1/2 transform-gpu overflow-hidden opacity-20 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -translate-x-1/2 aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Large Logo and Socials */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Link href="#" className="flex flex-col items-center lg:items-start gap-4 mb-6 text-left">
              <Image
                src="/logo.png"
                alt="Resilient Brands Logo"
                width={150}
                height={150}
                className="invert brightness-0"
              />
              
            </Link>
            <p className="text-sm text-background/60 max-w-xs mb-6">
              AI-powered research to validate your idea so you can build with confidence.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-background/60 hover:text-background transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="lg:col-span-1"></div>

          {/* Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-background/90 mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-background/90 mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-background/90 mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-sm text-background/50">
            © 2025 Resilient Brands · Reviews expire at 12 months · Badges require platform engagement & verified reviews.
          </p>
        </div>
      </div>
    </footer>
  )
}

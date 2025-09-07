import { Quote } from "lucide-react"
import { useScreenSize } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

export default function TestimonialSection() {
  const { isMobile, isSmallMobile } = useScreenSize()
  return (
    <section className={cn("relative bg-gradient-to-br from-primary to-[#257570] text-primary-foreground overflow-hidden", isMobile ? "py-12" : "py-20 md:py-28")}>
      <Quote className="hidden md:block absolute -top-8 -left-8 w-64 h-64 text-white/10" />
      <div className={cn("relative z-10 container mx-auto max-w-3xl text-center", isMobile && "px-4")}>
        <blockquote className={cn("font-medium italic", isSmallMobile ? "text-xl" : isMobile ? "text-2xl" : "text-3xl md:text-4xl")}>
          “My first few years as an entrepreneur, I spent countless hours and $100K on ideas that I hadn’t validated
          first. Then they would fail because we found out the hard way.”
        </blockquote>
        <cite className={cn("block font-semibold text-primary-foreground/80", isMobile ? "mt-6 text-base" : "mt-8 text-lg")}>
          — Chris, Serial Entrepreneur
        </cite>
      </div>
    </section>
  )
}

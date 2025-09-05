import { Quote } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary to-[#257570] text-primary-foreground overflow-hidden">
      <Quote className="hidden md:block absolute -top-8 -left-8 w-64 h-64 text-white/10" />
      <div className="relative z-10 container mx-auto max-w-3xl text-center">
        <blockquote className="text-3xl md:text-4xl font-medium italic">
          “My first few years as an entrepreneur, I spent countless hours and $100K on ideas that I hadn’t validated
          first. Then they would fail because we found out the hard way.”
        </blockquote>
        <cite className="mt-8 block font-semibold text-lg text-primary-foreground/80">
          — Chris, Serial Entrepreneur
        </cite>
      </div>
    </section>
  )
}

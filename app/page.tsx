import FloatingNav from "@/components/floating-nav"
import ComparisonSection from "@/components/sections/comparison-section"
import TestimonialSection from "@/components/sections/testimonial-section"
import FeaturesSection from "@/components/sections/features-section"
import ServicesSection from "@/components/sections/services-section"
import PricingSection from "@/components/sections/pricing-section"
import CtaSection from "@/components/sections/cta-section"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"

export default function ResilientBrandsLandingPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <FloatingNav />
      <main>
        <HeroSection />
        <ServicesSection />
        <ComparisonSection />
        <TestimonialSection />
        <FeaturesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

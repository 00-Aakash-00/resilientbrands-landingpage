import FloatingNav from "@/components/floating-nav"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import TechSolutionsGrid from "@/components/sections/tech-solutions-grid"
import BrandManagement from "@/components/sections/brand-management"
import AIPoweredServices from "@/components/sections/ai-powered-services"
import HowItWorks from "@/components/sections/how-it-works"
import PopularServices from "@/components/sections/popular-services"
import IndustryTrends from "@/components/sections/industry-trends"
import OpenForBusiness from "@/components/sections/open-for-business"
import TrustedBy from "@/components/sections/trusted-by"

export default function ResilientBrandsLandingPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <FloatingNav />
      <main>
        <HeroSection />
        <TechSolutionsGrid />
        <BrandManagement />
        <AIPoweredServices />
        <HowItWorks />
        <PopularServices />
        <IndustryTrends />
        <OpenForBusiness />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  )
}

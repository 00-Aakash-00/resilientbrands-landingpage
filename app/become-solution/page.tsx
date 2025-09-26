import FloatingNav from "@/components/floating-nav"
import Footer from "@/components/footer"
import BecomeSolutionHero from "@/components/sections/become-solution/hero"
import WhyStruggle from "@/components/sections/become-solution/why-struggle"
import SolutionsEmpower from "@/components/sections/become-solution/solutions-empower"
import ProvidersPartners from "@/components/sections/become-solution/providers-partners"
import CompetitiveEdge from "@/components/sections/become-solution/competitive-edge"
import TheInvitation from "@/components/sections/become-solution/invitation"

export default function BecomeSolutionPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <FloatingNav />
      <main id="main-content" role="main">
        <BecomeSolutionHero />
        <WhyStruggle />
        <SolutionsEmpower />
        <ProvidersPartners />
        <CompetitiveEdge />
        <TheInvitation />
      </main>
      <Footer />
    </div>
  )
}
import FloatingNav from "@/components/floating-nav"
import Footer from "@/components/footer"
import SolutionsOwnerHero from "@/components/sections/become-solutions-owner/hero"
import DeserveBetter from "@/components/sections/become-solutions-owner/deserve-better"
import OwnershipChanges from "@/components/sections/become-solutions-owner/ownership-changes"
import TeamWins from "@/components/sections/become-solutions-owner/team-wins"
import CompetitiveEdge from "@/components/sections/become-solutions-owner/competitive-edge"
import OwnerInvitation from "@/components/sections/become-solutions-owner/owner-invitation"

export default function BecomeSolutionsOwnerPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <FloatingNav />
      <main id="main-content">
        <SolutionsOwnerHero />
        <DeserveBetter />
        <OwnershipChanges />
        <TeamWins />
        <CompetitiveEdge />
        <OwnerInvitation />
      </main>
      <Footer />
    </div>
  )
}
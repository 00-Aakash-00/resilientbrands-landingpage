import FloatingNav from "@/components/floating-nav"
import Footer from "@/components/footer"
import BecomeProviderHero from "@/components/sections/become-provider/hero"
import RightSizeMaturity from "@/components/sections/become-provider/right-size-maturity"
import ThoseWhoServe from "@/components/sections/become-provider/those-who-serve"
import OnlyWithYou from "@/components/sections/become-provider/only-with-you"
import ProviderInvitation from "@/components/sections/become-provider/provider-invitation"

export default function BecomeProviderPage() {
  return (
    <div className="bg-background text-foreground font-sans">
      <FloatingNav />
      <main id="main-content">
        <BecomeProviderHero />
        <RightSizeMaturity />
        <ThoseWhoServe />
        <OnlyWithYou />
        <ProviderInvitation />
      </main>
      <Footer />
    </div>
  )
}
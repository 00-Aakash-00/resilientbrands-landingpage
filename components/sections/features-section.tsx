import { useScreenSize } from "@/hooks/use-mobile"

const features = [
  {
    num: "01",
    title: "Market Size (TAM, SAM, & SOM)",
    description:
      "Get a clear picture of your market opportunity. We break down your Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM)—so you know how big the opportunity really is and what slice of the pie you can realistically win.",
  },
  {
    num: "02",
    title: "Competitor List",
    description:
      "See exactly who you’re up against. We surface the top players in your space, including direct and indirect competitors. You’ll know who’s already serving your audience—and what gaps you can fill.",
  },
  {
    num: "03",
    title: "Competitor Color Analysis",
    description:
      "Build a brand that actually stands out. We analyze the brand colors used by your competitors so you can avoid blending in. Whether you’re building a premium, playful, or disruptive brand—this helps you launch with a visual identity that’s different by design.",
  },
  {
    num: "04",
    title: "SWOT Analysis",
    description:
      "Understand your edge—and your blind spots. We highlight your idea’s Strengths, Weaknesses, Opportunities, and Threats, so you can plan strategically and pitch with confidence.",
  },
  {
    num: "05",
    title: "Business Plan 1-Pager",
    description:
      "Your entire business, on one page. Get a beautifully designed summary of your business model, value prop, target audience, and key metrics—perfect for pitching investors, advisors, or co-founders.",
  },
]

export default function FeaturesSection() {
  const { isMobile, isSmallMobile } = useScreenSize()
  return (
    <section id="features" className={`relative ${isMobile ? 'py-12' : 'py-16 md:py-24'} bg-secondary overflow-hidden`}>
      <div
        className={`absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden ${isMobile ? 'opacity-10' : 'opacity-20'} blur-3xl`}
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
      <div className={`container mx-auto ${isMobile ? 'px-4' : ''}`}>
        <div className={`text-center ${isMobile ? 'mb-8' : 'mb-12'}`}>
          <h2 className={`${isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-3xl md:text-4xl'} font-bold`}>Investor-ready research in 10 minutes.</h2>
          <p className={`${isMobile ? 'mt-3' : 'mt-4'} ${isSmallMobile ? 'text-sm' : isMobile ? 'text-base' : 'text-lg'} text-muted-foreground`}>Every beautifully designed report includes:</p>
        </div>
        <div className={`max-w-4xl mx-auto grid md:grid-cols-1 ${isMobile ? 'gap-8' : 'gap-12'}`}>
          {features.map((feature, index) => (
            <div key={index} className={`flex items-start ${isMobile ? 'gap-4' : 'gap-6'}`}>
              <div className={`${isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold text-primary opacity-40`}>{feature.num}</div>
              <div className="pt-1">
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-foreground`}>{feature.title}</h3>
                <p className={`mt-2 text-muted ${isSmallMobile ? 'text-sm' : ''}`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

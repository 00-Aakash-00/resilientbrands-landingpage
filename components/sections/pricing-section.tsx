"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"
import { useContactModal } from "@/hooks/use-contact-modal"
import { useScreenSize } from "@/hooks/use-mobile"

const pricingPlans = [
  {
    title: "Entrepreneur",
    description: "For first-time founders validating their next big idea.",
    price: "$95",
    value: "($1,500 value)",
    features: [
      "1 custom market research report",
      "Market size overview (TAM, SAM, SOM)",
      "Top 5 competitors",
      "Basic SWOT summary",
    ],
    buttonText: "Get Started",
    isFeatured: false,
  },
  {
    title: "Serial Entrepreneur",
    description: "For experienced founders validating their next big idea.",
    price: "$159",
    billing: "/ year",
    features: [
      "Everything in Entrepreneur, plus:",
      "Competitor color analysis",
      "Full SWOT analysis",
      "1-page business plan (editable & pitchable)",
      "Brand positioning tips",
      "Priority delivery in under 10 minutes",
    ],
    buttonText: "Choose Plan",
    isFeatured: true,
  },
  {
    title: "Professional",
    description: "For founders pitching investors and building to scale.",
    price: "$499",
    features: [
      "Everything in Serial Entrepreneur, plus:",
      "1-hour consultation with a business strategist & notes tailored to you",
    ],
    buttonText: "Contact Us",
    isFeatured: false,
  },
]

export default function PricingSection() {
  const { open: openContactModal } = useContactModal()
  const { isMobile, isSmallMobile } = useScreenSize()
  
  return (
    <section id="pricing" className={cn("bg-secondary", isMobile ? "py-8" : "py-16 md:py-24")}>
      <div className={cn("container mx-auto", isMobile && "px-4")}>
        <div className={cn("text-center", isMobile ? "mb-8" : "mb-12 md:mb-16")}>
          <h2 className={cn("font-bold tracking-tight", isSmallMobile ? "text-2xl" : isMobile ? "text-3xl" : "text-3xl md:text-5xl")}>Simple, Transparent Pricing</h2>
          <p className={cn("mt-4 text-muted-foreground max-w-2xl mx-auto", isMobile ? "text-base px-4" : "text-lg")}>
            Choose the plan that&apos;s right for you. No subscriptions, no hidden fees.
          </p>
        </div>
        <div className={cn("grid grid-cols-1 lg:grid-cols-3 items-stretch max-w-6xl mx-auto", isMobile ? "gap-4" : "gap-8")}>
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative transition-all duration-300 ease-in-out",
                plan.isFeatured ? "lg:scale-105 z-10" : "lg:hover:scale-105",
              )}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <Card
                className={cn(
                  "w-full h-full flex flex-col overflow-hidden",
                  plan.isFeatured
                    ? "bg-card border-2 border-primary shadow-2xl shadow-primary/20"
                    : "bg-card/60 backdrop-blur-md border border-white/10",
                )}
              >
                <CardHeader className={cn("text-center", isMobile ? "pt-6" : "pt-10")}>
                  <CardTitle className={cn("font-bold", isMobile ? "text-xl" : "text-2xl")}>{plan.title}</CardTitle>
                  <p className="text-muted h-12">{plan.description}</p>
                </CardHeader>
                <CardContent className={cn("flex-grow flex flex-col", isMobile ? "p-4" : "p-6")}>
                  <div className={cn("text-center", isMobile ? "mb-4" : "mb-6")}>
                    <span className={cn("font-extrabold text-foreground", isMobile ? "text-3xl" : "text-5xl")}>{plan.price}</span>
                    {plan.billing && <span className="text-muted text-sm">{plan.billing}</span>}
                    {plan.value && <p className="text-sm text-muted mt-1">{plan.value}</p>}
                  </div>
                  <ul className={cn("text-left flex-grow", isMobile ? "space-y-2 mb-6" : "space-y-3 mb-8")}>
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className={cn("text-primary flex-shrink-0 mt-1", isMobile ? "h-4 w-4 mr-2" : "h-5 w-5 mr-3")} />
                        <span className={cn(feature.startsWith("Everything in") && "italic text-muted", isMobile && "text-sm")}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    size="lg"
                    className={cn(
                      "w-full mt-auto",
                      plan.isFeatured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                        : "bg-white/10 border border-white/20 text-foreground hover:bg-white/20",
                    )}
                    onClick={openContactModal}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

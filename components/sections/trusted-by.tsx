import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Shield } from "lucide-react"

const trustedBy = [
  {
    title: "Business Development Services",
    description: "Trusted and selected by top Fortune 500 companies.",
    detail: "Hundreds of organizations have trusted our providers to drive sales engagement.",
    icon: Building2
  },
  {
    title: "Technology Solutions & Service Providers",
    description: "More than 22,000 teams trust the power of tools and the expertise of our providers in every industry at every size.",
    icon: Shield
  }
]

export default function TrustedBy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Trusted by leading teams
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {trustedBy.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-accent mb-2">{item.description}</p>
                      {item.detail && (
                        <p className="text-muted-foreground text-sm">{item.detail}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
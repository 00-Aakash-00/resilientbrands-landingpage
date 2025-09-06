import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const services = [
  {
    title: "AI Powered Brand Maturity",
    description: "Eliminating Tech Debt Without Breaking Operations"
  },
  {
    title: "Cyber Maturity for Modern Brands",
    description: "Privacy solutions to reduce your footprint"
  },
  {
    title: "Compliance Made Simple",
    description: "Built to streamline your business"
  }
]

const categories = [
  {
    title: "Compliance",
    items: ["PCI DSS", "ISO 27001", "SOC 2"]
  },
  {
    title: "Adversarial & Penetration Testing",
    items: ["Exploitation testing", "Post exploitation testing", "Milestone proof collection"]
  },
  {
    title: "Privacy Requirements",
    items: ["GDPR", "CPPA", "DSARs and DPIAs"]
  }
]

export default function AIPoweredServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accent">Popular eye-opening services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Many organizations have regulatory and readiness gaps that force their brand to under perform
            </h3>
            <div className="space-y-6">
              {categories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-accent mb-3">{category.title}</h4>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sometimes your business maturity and performance depends on fresh eyes, our testers and providers are among the best, fastest, and goal oriented teams around.
          </p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg font-semibold transition-all">
            Ask
          </button>
        </div>
      </div>
    </section>
  )
}
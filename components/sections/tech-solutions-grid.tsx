import { Card, CardContent } from "@/components/ui/card"
import { Shield, Database, Lock, Cloud, CheckCircle, Layers } from "lucide-react"

const solutions = [
  {
    title: "Tech Debt",
    subtitle: "Eliminated",
    description: "Modernize & simplify",
    icon: Layers,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Privacy",
    subtitle: "In your control",
    description: "Data rights & DSARs",
    icon: Lock,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Cyber Maturity",
    subtitle: "Solved",
    description: "Roadmap & metrics",
    icon: Shield,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Information Technology",
    subtitle: "Optimized",
    description: "Cloud & operations",
    icon: Cloud,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Compliance Checkboxes",
    subtitle: "Managed",
    description: "PCI • ISO 27001 • SOC 2",
    icon: CheckCircle,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Tool Sprawl",
    subtitle: "Consolidated",
    description: "Right-size your stack",
    icon: Database,
    gradient: "from-pink-500 to-rose-500"
  }
]

export default function TechSolutionsGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Resilient Brands — Where technology and service align
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{solution.title}</h3>
                  <p className="text-accent font-medium mb-2">{solution.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
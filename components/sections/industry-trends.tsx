import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

const trends = [
  {
    number: "1",
    title: "Become a top performing brand",
    description: "Eliminate the headache of finding the best tools and services to meet your need with solutions led by the professionals that manage the top performing brands.",
    icon: TrendingUp
  },
  {
    number: "2",
    title: "Become a Solution",
    description: "Shorten your solution maturity time by collaborating with service providers that manage the problems you solve and advance the market as a team.",
    icon: Zap
  },
  {
    number: "3",
    title: "Become a provider",
    description: "You are an expert in your craft and want to serve, join our community and get matched to ideal partners and problems you know you can tackle.",
    icon: Users
  }
]

export default function IndustryTrends() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Lead industry trends with the latest and greatest!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resilient brands leverage technology for the competitive edge it can provide, join the top brands that are the first to deploy the most advanced tools tested by the industry experts that manage them.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend, index) => {
            const Icon = trend.icon
            return (
              <Card key={index} className="bg-card/50 backdrop-blur border-primary/20 hover:border-accent/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-accent/50">{trend.number}</span>
                  </div>
                  <CardTitle className="text-xl text-white">{trend.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{trend.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
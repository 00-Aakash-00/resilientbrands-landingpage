import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Define your priorities",
    description: "Tell us about your brand, goals, tech stack, size and budget or start an assessment."
  },
  {
    number: "2",
    title: "Get matched instantly",
    description: "We connect you with vetted providers that fit your needs including specializing in your tech stack."
  },
  {
    number: "3",
    title: "Compare with confidence",
    description: "See credentials, badges, quotes, and leverage optimal outcomes."
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-primary/20 relative overflow-hidden">
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 text-6xl font-bold text-accent/10">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OpenForBusiness() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-accent/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
          <CardContent className="p-12 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Open For Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Apply to become a provider today and align your expertise and offer to those that need it!
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8"
            >
              Apply
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
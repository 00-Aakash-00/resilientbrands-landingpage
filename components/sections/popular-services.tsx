"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const servicesData = {
  "Brand Performance": [
    "Leads Enrichment",
    "Search Engine Optimization Audit",
    "Brand Audit",
    "Sales Audit", 
    "Sales Appointment Setting",
    "Brand Design",
    "Web Design",
    "Email Marketing",
    "Social Media Marketing",
    "Content generation"
  ],
  "Security and IT": [
    "Penetration Testing",
    "Adversarial Tool assessment",
    "Managed Security",
    "Managed Cloud",
    "Managed Information Technology",
    "Managed Operational Technology",
    "Encryption management",
    "Network configuration and reconfiguration",
    "Firewall management"
  ],
  "Compliance": [
    "Compliance Audit Ready Assessment",
    "Compliance Policy Generation",
    "Evidence mapping and collection",
    "Controls Automation",
    "Compliance controls testing",
    "Compliance training"
  ]
}

export default function PopularServices() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Popular Services
        </h2>
        
        <Tabs defaultValue="Brand Performance" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-primary/20">
            {Object.keys(servicesData).map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(servicesData).map(([category, services]) => (
            <TabsContent key={category} value={category}>
              <Card className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                    Map my brand
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState } from "react"

export default function BrandManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Manage Your Brand Before Others Define It
        </h2>
        
        <p className="text-lg text-muted-foreground mb-6">
          Your reputation, security, and future should not be left to chance. Compare trusted providers and take control of your digital presence today.
        </p>
        
        <p className="text-lg text-white mb-8">
          Resilient Brands connects you to experts in your tech stack so you get the right tools and providers to achieve your next goal without compromise.
        </p>
        
        <p className="text-accent mb-8">
          Start your search and identify your first brand maturity outcomes in minutes.
        </p>
        
        <div className="flex gap-3 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card/50 border-primary/20 text-white placeholder:text-muted-foreground"
            />
          </div>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  )
}
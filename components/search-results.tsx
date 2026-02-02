"use client"

import { ArrowLeft, Lock, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SearchResultsProps {
  query: string
  onBack: () => void
  onUpgrade: () => void
  onSelectBusiness: (id: number) => void
}

const searchResults = [
  {
    id: 1,
    name: "Premium Plumbing SA",
    trustScore: 92,
    category: "Home Services",
    description: "Professional plumbing services for residential and commercial properties. Available 24/7.",
  },
  {
    id: 2,
    name: "FastFix Plumbers",
    trustScore: 85,
    category: "Home Services",
    description: "Quick and reliable plumbing repairs. Specializing in emergency services.",
  },
  {
    id: 3,
    name: "AquaPro Services",
    trustScore: 88,
    category: "Home Services",
    description: "Expert plumbing installations and maintenance. Serving Gauteng area.",
  },
  {
    id: 4,
    name: "City Plumbers Co",
    trustScore: 79,
    category: "Home Services",
    description: "Affordable plumbing solutions for all your needs.",
  },
  {
    id: 5,
    name: "Elite Pipe Works",
    trustScore: 91,
    category: "Home Services",
    description: "Premium plumbing services with quality guarantee.",
  },
]

export function SearchResults({ query, onBack, onUpgrade, onSelectBusiness }: SearchResultsProps) {
  return (
    <div className="pb-20 pt-4">
      {/* Header */}
      <div className="px-4 mb-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <p className="text-sm text-muted-foreground">Showing results for</p>
          <h1 className="text-lg font-bold text-foreground">"{query}"</h1>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 space-y-3">
        {searchResults.map((result, index) => {
          const isBlurred = index >= 3
          return (
            <div key={result.id} className="relative">
              <Card
                className={cn(
                  "bg-card border-border transition-all",
                  isBlurred && "select-none",
                  !isBlurred && "cursor-pointer hover:border-primary/50"
                )}
                onClick={() => !isBlurred && onSelectBusiness(result.id)}
              >
                <CardContent className={cn("p-4", isBlurred && "blur-sm")}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {result.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">{result.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3 text-primary" />
                          <span className="text-xs font-medium text-primary">
                            Trust Score: {result.trustScore}/100
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{result.category}</span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {isBlurred && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-lg">
                  <Button
                    onClick={onUpgrade}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <Lock className="w-4 h-4" />
                    Upgrade to See All Results
                  </Button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

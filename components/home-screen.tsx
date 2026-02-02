"use client"

import React from "react"

import { Search, Star, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface HomeScreenProps {
  isBasicUser: boolean
  onSearch: (query: string) => void
  onUpgrade: () => void
}

const recommendedBusinesses = [
  { id: 1, name: "Bright Plumbing", category: "Home Services", rating: 4.8 },
  { id: 2, name: "TechPro Solutions", category: "IT Services", rating: 4.9 },
  { id: 3, name: "Clean Sweep Cleaning", category: "Cleaning Services", rating: 4.7 },
  { id: 4, name: "QuickFix Electricians", category: "Home Services", rating: 4.6 },
]

const trendingTasks = [
  { id: 1, title: "Logo Design for Startup", budget: "R1,500" },
  { id: 2, title: "Social Media Management", budget: "R2,000" },
  { id: 3, title: "Website Development", budget: "R5,000" },
  { id: 4, title: "Content Writing", budget: "R800" },
]

export function HomeScreen({ isBasicUser, onSearch, onUpgrade }: HomeScreenProps) {
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("search") as string
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <div className="pb-20 pt-4">
      {/* Search Bar */}
      <div className="px-4 mb-6">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              name="search"
              placeholder="Search for businesses or services..."
              className="pl-10 h-12 bg-secondary border-none text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </form>
      </div>

      {/* Recommended for You */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-foreground px-4 mb-3">Recommended for You</h2>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {recommendedBusinesses.map((business) => (
            <Card key={business.id} className="min-w-[200px] bg-card border-border flex-shrink-0">
              <CardContent className="p-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-lg">
                    {business.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{business.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{business.category}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs font-medium text-foreground">{business.rating}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Micro-Tasks */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-foreground px-4 mb-3">Trending Micro-Tasks</h2>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {trendingTasks.map((task) => (
            <Card key={task.id} className="min-w-[180px] bg-card border-border flex-shrink-0">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground text-sm mb-2 line-clamp-2">
                  {task.title}
                </h3>
                <p className="text-primary font-bold">{task.budget}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Premium Upgrade Banner (Basic Users Only) */}
      {isBasicUser && (
        <div className="mx-4">
          <button
            onClick={onUpgrade}
            className="w-full bg-primary text-primary-foreground p-4 rounded-xl flex items-center justify-between"
          >
            <div className="text-left">
              <p className="font-semibold">Unlock your network.</p>
              <p className="text-sm opacity-90">Upgrade to Premium to see all connections.</p>
            </div>
            <Lock className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  )
}

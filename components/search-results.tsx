"use client"

import { ArrowLeft, Lock, ShieldCheck, Star, BadgeCheck, MoveRight } from "lucide-react"
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
    img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    trustScore: 98,
    reviews: 124,
    category: "Home Services",
    location: "Sandton, GP",
    description: "Professional plumbing services for residential and commercial properties. Available 24/7.",
    promoted: true
  },
  {
    id: 2,
    name: "FastFix Plumbers",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    trustScore: 85,
    reviews: 89,
    category: "Emergency Repairs",
    location: "Midrand, GP",
    description: "Quick and reliable plumbing repairs. Specializing in emergency call-outs.",
    promoted: false
  },
  {
    id: 3,
    name: "AquaPro Services",
    img: "https://images.unsplash.com/photo-1581578731117-10452b7bb70f?auto=format&fit=crop&q=80&w=800",
    trustScore: 88,
    reviews: 56,
    category: "Installations",
    location: "Pretoria, GP",
    description: "Expert plumbing installations and maintenance for modern homes.",
    promoted: false
  },
  {
    id: 4,
    name: "City Plumbers Co",
    img: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800",
    trustScore: 79,
    reviews: 32,
    category: "General Maintenance",
    location: "Johannesburg CBD",
    description: "Affordable plumbing solutions for all your basic needs.",
    promoted: false
  }
]

export function SearchResults({ query, onBack, onUpgrade, onSelectBusiness }: SearchResultsProps) {
  return (
    <div className="pb-32 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="px-6 mb-8 flex items-center gap-4">
        <button
          onClick={onBack}
          className="w-12 h-12 flex items-center justify-center rounded-full art-glass hover:bg-white/50 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Searching For</p>
          <h1 className="text-2xl font-black italic text-foreground">"{query}"</h1>
        </div>
      </div>

      <div className="px-6 space-y-8">
        {searchResults.map((result, index) => {
          const isBlurred = index >= 3
          return (
            <div key={result.id} className="relative group">
              <div 
                className={cn(
                  "relative art-glass rounded-[2.5rem] p-5 flex flex-col md:flex-row gap-6 transition-all duration-500 border-none",
                  !isBlurred && "hover:bg-white/90 shadow-xl cursor-pointer hover:scale-[1.02]",
                  isBlurred && "opacity-50 blur-sm select-none"
                )}
                onClick={() => !isBlurred && onSelectBusiness(result.id)}
              >
                <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                  <img 
                    src={result.img} 
                    className="w-full h-full object-cover rounded-[2rem] shadow-md" 
                    alt={result.name} 
                  />
                  {result.promoted && (
                    <div className="absolute -top-2 -left-2 bg-primary text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg glow-red">
                      Promoted
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-black italic tracking-tight">{result.name}</h3>
                        <BadgeCheck className="w-4 h-4 text-blue-500" />
                      </div>
                      <p className="text-[10px] font-black text-primary italic uppercase tracking-wider">{result.category}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-primary glow-red" />
                        <span className="text-sm font-black italic">{result.trustScore}%</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 line-clamp-2 italic font-medium leading-relaxed">
                    "{result.description}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-xs font-bold text-slate-700">{result.reviews}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{result.location}</span>
                    </div>
                    {!isBlurred && (
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all glow-red">
                        <MoveRight className="w-4 h-4 group-hover:text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {isBlurred && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <Button
                    onClick={onUpgrade}
                    className="bg-primary text-white font-black text-lg h-14 px-8 rounded-full shadow-2xl glow-red hover:scale-105 transition-transform flex items-center gap-3"
                  >
                    <Lock className="w-5 h-5" />
                    Unlock All Results
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
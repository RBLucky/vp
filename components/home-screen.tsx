"use client"

import React from "react"
import { Search, Sparkles, MoveUpRight, MoveRight, ShieldCheck, Star, BadgeCheck } from "lucide-react"
import { Input } from "@/components/ui/input"

interface HomeScreenProps {
  isBasicUser: boolean
  onSearch: (query: string) => void
  onUpgrade: () => void
}

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
    <div className="pb-32 animate-in fade-in duration-1000 bg-background">
      {/* 1. Immersive Hero Header */}
      <section className="relative h-[42vh] w-full overflow-hidden rounded-b-[4rem] shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] brightness-[0.7]"
          alt="Artisan Showcase"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-black/30" />
        
        <div className="absolute bottom-10 left-10 space-y-2">
          <div className="flex items-center gap-3">
             {/* Updated Logo: VodaPlug PNG */}
             <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/10">
                <img src="/voda_plug.png" alt="VodaPlug" className="w-10 h-10 object-contain" />
             </div>
             <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.4em]">The Living Network</span>
          </div>
          <h1 className="text-5xl font-black text-white italic tracking-tighter">
            Voda<span className="text-primary glow-red">Plug</span>
          </h1>
        </div>
      </section>

      {/* 2. Tactile Search Artifact */}
      <div className="px-8 mt-8">
        <div className="art-glass rounded-[2rem] h-18 flex items-center px-6 shadow-sm border-none">
          <Search className="text-primary w-5 h-5 mr-3" />
          <form onSubmit={handleSearchSubmit} className="flex-1">
            <Input 
              name="search"
              placeholder="Who are you looking for?" 
              className="bg-transparent border-none focus-visible:ring-0 text-lg font-medium italic placeholder:text-slate-300 w-full"
            />
          </form>
        </div>
      </div>

      {/* 3. The Branded "Warm Handshake" */}
      <section className="px-8 mt-4 relative group cursor-pointer">
        <div className="relative bg-[#e60000] text-white rounded-[3.5rem] p-10 shadow-2xl overflow-hidden border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/80">Proactive Match</span>
            </div>
            <h2 className="text-3xl font-light leading-tight tracking-tight">
              Thabo, <span className="text-white font-black italic underline decoration-white/20">Jabu</span> is looking for a developer today.
            </h2>
            <div className="flex items-center gap-2 text-sm font-bold opacity-70 group-hover:opacity-100 transition-all">
              Initiate the Handshake <MoveUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Activity-Based Recommendations */}
      <section className="mt-16 px-8 space-y-10">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-400">Tailored For You</h2>
            <p className="text-lg font-bold italic">Based on your recent activity</p>
          </div>
          <Sparkles className="text-primary w-5 h-5 animate-pulse" />
        </div>
        
        <div className="flex flex-col gap-8">
          {[
            { 
              name: "Claire Sterling", 
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
              category: "Chartered Accountant",
              trustScore: 98,
              reviews: 215,
              promoted: true,
              description: "Strategic tax advisory and financial management for high-growth SMEs.",
              location: "Sandton, GP"
            },
            { 
              name: "Elite Pixel Studios", 
              img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
              category: "UI/UX Design",
              trustScore: 96,
              reviews: 142,
              promoted: false,
              description: "Bridging business and technology through immersive, human-centric design.",
              location: "Cape Town, WC"
            }
          ].map((biz, i) => (
            <div key={i} className="group relative art-glass rounded-[3rem] p-6 flex flex-col md:flex-row gap-8 hover:bg-white/90 transition-all duration-700 shadow-xl border-none cursor-pointer">
              <div className="relative w-full md:w-40 h-40 flex-shrink-0">
                <img 
                  src={biz.img} 
                  className="w-full h-full object-cover object-[center_20%] rounded-[2.5rem] shadow-lg group-hover:scale-105 transition-transform duration-700" 
                  alt={biz.name} 
                />
                {biz.promoted && (
                  <div className="absolute -top-3 -left-2 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-xl glow-red">
                    Promoted
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-black italic tracking-tight leading-none">{biz.name}</h3>
                      <BadgeCheck className="w-5 h-5 text-blue-500" />
                    </div>
                    <p className="text-xs font-black text-primary italic uppercase tracking-[0.2em]">{biz.category}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-5 h-5 text-primary glow-red" />
                      <span className="text-lg font-black italic">{biz.trustScore}%</span>
                    </div>
                    <p className="text-[9px] uppercase font-black text-slate-400 tracking-tighter">Trust Index</p>
                  </div>
                </div>
                <p className="text-base text-slate-600 italic font-medium leading-relaxed line-clamp-2">
                  "{biz.description}"
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100/50">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-bold text-slate-800">{biz.reviews} Reviews</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">{biz.location}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all glow-red">
                    <MoveRight className="w-5 h-5 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
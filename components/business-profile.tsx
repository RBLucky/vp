"use client"

import { useState } from "react"
import { ArrowLeft, Sparkles, Send, ShieldCheck } from "lucide-react"

export function BusinessProfile({ onBack }: { businessId: number; onBack: () => void }) {
  const [showBrief, setShowBrief] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-40 animate-in fade-in duration-700">
      <div className="h-[45vh] relative rounded-b-[5rem] overflow-hidden shadow-2xl">
        <button onClick={onBack} className="absolute top-10 left-10 z-20 w-14 h-14 art-glass rounded-full flex items-center justify-center border-none transition-transform hover:scale-90">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale-[0.2]" alt="Work Detail" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h1 className="absolute bottom-20 left-12 text-5xl font-black italic text-white tracking-tighter">Premium Plumbing</h1>
      </div>

      <div className="px-12 -mt-12 relative z-10">
        <div className="art-glass rounded-[3.5rem] p-10 flex items-center justify-between shadow-2xl border-none">
          <div className="space-y-1">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trust Index</p>
             <p className="text-4xl font-black italic">98<span className="text-base font-light italic text-slate-300">/100</span></p>
          </div>
          <div className="w-16 h-16 organic-morph bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="text-primary w-8 h-8 glow-red" />
          </div>
        </div>
      </div>

      <div className="p-12 space-y-10">
        <p className="text-slate-600 leading-relaxed italic text-2xl font-light">
          "Stewards of the South African home. We ensure your sanctuary remains intact, one flow at a time."
        </p>
        <div className="fixed bottom-12 left-0 right-0 px-10 flex gap-5 z-40">
          <button 
            onClick={() => setShowBrief(true)}
            className="flex-1 h-24 bg-primary text-white rounded-[2.5rem] font-black text-2xl glow-red shadow-xl transition-transform active:scale-95"
          >
            Secure Service
          </button>
        </div>
      </div>

      {showBrief && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setShowBrief(false)} />
          <div className="relative w-full art-glass rounded-t-[4.5rem] p-12 space-y-10 shadow-2xl animate-in slide-in-from-bottom duration-500 border-none">
            <div className="flex items-center gap-4">
              <Sparkles className="text-primary w-8 h-8 animate-pulse" />
              <h3 className="text-3xl font-black italic tracking-tight">The Project Canvas</h3>
            </div>
            <textarea 
              className="w-full bg-slate-50 rounded-[2.5rem] p-8 text-xl font-medium italic border-none focus:ring-1 focus:ring-primary/10"
              placeholder="Brief Jabu on your project..."
              rows={4}
            />
            <button className="w-full h-20 bg-primary text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 glow-red">
              <Send className="w-6 h-6" /> Send Warm Handshake
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
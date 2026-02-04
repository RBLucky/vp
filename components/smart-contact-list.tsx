"use client"

import { Search, Phone, MessageCircle, ShieldCheck, Sparkles, MoreVertical, Zap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const smartContacts = [
  {
    letter: "Suggested",
    items: [
      {
        id: 1,
        name: "Claire Sterling",
        role: "Chartered Accountant",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
        trust: 98,
        reason: "Matches your tax goals",
        online: true
      },
      {
        id: 2,
        name: "David Mokoena",
        role: "Legal Consultant",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
        trust: 95,
        reason: "Highly rated in Sandton",
        online: false
      }
    ]
  },
  {
    letter: "A",
    items: [
      {
        id: 3,
        name: "Andre Van Der Merwe",
        role: "Logistics Manager",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        trust: 89,
        reason: "Connected 2 weeks ago",
        online: true
      },
      {
        id: 4,
        name: "AquaPro Services",
        role: "Plumbing Corp",
        img: "https://images.unsplash.com/photo-1581578731117-10452b7bb70f?auto=format&fit=crop&q=80&w=200",
        trust: 92,
        reason: "Saved in Home Services",
        online: false
      }
    ]
  },
  {
    letter: "E",
    items: [
      {
        id: 5,
        name: "Elite Pixel Studios",
        role: "Design Agency",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=200",
        trust: 96,
        reason: "Pending Project",
        online: true
      }
    ]
  },
  {
    letter: "S",
    items: [
      {
        id: 6,
        name: "Sarah Govender",
        role: "Marketing Specialist",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
        trust: 94,
        reason: "Frequent Collaborator",
        online: false
      }
    ]
  }
]

export function SmartContactList() {
  return (
    <div className="pb-32 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-background min-h-screen">
      {/* Header & Search */}
      <div className="px-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black italic text-foreground">Smart Contacts</h1>
            <p className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-3 h-3" /> AI-Curated List
            </p>
          </div>
          <div className="w-10 h-10 organic-morph bg-primary/10 flex items-center justify-center">
            <Sparkles className="text-primary w-5 h-5 animate-pulse" />
          </div>
        </div>

        <div className="art-glass rounded-[2rem] h-14 flex items-center px-5 shadow-sm border-none">
          <Search className="text-primary w-5 h-5 mr-3" />
          <Input 
            placeholder="Search your network..." 
            className="bg-transparent border-none focus-visible:ring-0 text-base font-medium placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Contact List */}
      <div className="mt-8 space-y-6">
        {smartContacts.map((section) => (
          <div key={section.letter}>
            {/* Section Header */}
            <div className="px-8 mb-3 flex items-center gap-4">
              <span className="text-xs font-black text-slate-300 uppercase tracking-widest">{section.letter}</span>
              <div className="h-[1px] flex-1 bg-slate-100" />
            </div>

            {/* Contact Rows */}
            <div className="px-4 space-y-3">
              {section.items.map((contact) => (
                <div 
                  key={contact.id} 
                  className="group art-glass rounded-[2rem] p-3 pr-5 flex items-center gap-4 hover:bg-white/90 transition-all active:scale-[0.98] border-none shadow-sm"
                >
                  {/* Avatar */}
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <img 
                      src={contact.img} 
                      className="w-full h-full object-cover rounded-full shadow-md"
                      alt={contact.name}
                    />
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-foreground truncate">{contact.name}</h3>
                      {contact.trust >= 95 && (
                        <ShieldCheck className="w-3.5 h-3.5 text-primary glow-red" />
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium truncate">{contact.role}</p>
                    {section.letter === "Suggested" && (
                      <p className="text-[10px] text-primary font-bold uppercase tracking-wide mt-0.5 flex items-center gap-1">
                        <Sparkles className="w-2 h-2" /> {contact.reason}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                    <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
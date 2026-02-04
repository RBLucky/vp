"use client"

import { X, Check, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PremiumModal({ isOpen, onClose }: PremiumModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-background border-none rounded-[2.5rem]">
        <div className="relative h-48 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
          <div className="absolute top-0 right-0 p-12 bg-white/10 blur-3xl w-40 h-40 rounded-full" />
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white space-y-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl">
               {/* Updated Logo */}
               <img src="/voda_plug.png" alt="Premium" className="w-10 h-10 object-contain" />
            </div>
            <h2 className="text-2xl font-black italic tracking-wide">VodaPlug Premium</h2>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 rounded-full text-white/80 hover:bg-black/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Unlimited Search</h3>
                <p className="text-sm text-muted-foreground">Access the full directory without restrictions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Verified Trust Score</h3>
                <p className="text-sm text-muted-foreground">See detailed trust metrics for every business.</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-2xl shadow-xl glow-red">
              Upgrade for R49/month
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Cancel anytime. Secure payment via Vodapay.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
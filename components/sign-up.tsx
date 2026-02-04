"use client"

import { useState } from "react"
import { ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignUpProps {
  onBack: () => void
  onSignUpComplete: () => void
}

export function SignUp({ onBack, onSignUpComplete }: SignUpProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onSignUpComplete()
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack} 
        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mb-8 hover:bg-slate-200 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 text-slate-700" />
      </button>

      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
             <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center shadow-xl border border-slate-100">
                {/* Updated Logo */}
                <img src="/voda_plug.png" alt="VodaPlug" className="w-12 h-12 object-contain" />
             </div>
          </div>
          <h1 className="text-3xl font-black italic tracking-tight">Join the Network</h1>
          <p className="text-slate-500">Create your profile to start connecting with verified businesses.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" className="h-12 bg-slate-50 border-slate-200" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" className="h-12 bg-slate-50 border-slate-200" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" className="h-12 bg-slate-50 border-slate-200" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Create Password</Label>
            <Input id="password" type="password" className="h-12 bg-slate-50 border-slate-200" required />
          </div>

          <Button 
            type="submit" 
            className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 rounded-2xl shadow-lg glow-red mt-4" 
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : "Create Account"}
          </Button>
        </form>
      </div>
    </div>
  )
}
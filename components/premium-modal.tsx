"use client"

import { X, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
}

const features = [
  "Unlimited Connections & Searches",
  "Top-Tier Search Placement",
  "See Who's Viewed Your Profile",
  "Advanced Analytics",
]

export function PremiumModal({ isOpen, onClose }: PremiumModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-card w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-foreground text-center mb-6">
          Go Premium with VodaPlug
        </h2>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="bg-secondary rounded-xl p-4 mb-6 text-center">
          <p className="text-sm text-muted-foreground mb-1">Monthly Subscription</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-foreground">R99.00</span>
            <span className="text-muted-foreground">/ per month</span>
          </div>
        </div>

        {/* CTA */}
        <Button
          className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={onClose}
        >
          Confirm & Pay with VodaPay
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Cancel anytime. Terms and conditions apply.
        </p>
      </div>
    </div>
  )
}

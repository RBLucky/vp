"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Network, Smartphone, Zap } from "lucide-react"

interface OnboardingProps {
  onComplete: (isGuest: boolean) => void
  onSignIn: () => void
  onSignUp: () => void
}

const slides = [
  {
    id: 1,
    icon: null,
    title: "Welcome to VodaPlug",
    subtitle: null,
    isLogo: true,
  },
  {
    id: 2,
    icon: Network,
    title: "Find Trusted Partners & Clients",
    subtitle: "Connect with verified businesses across South Africa",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Zero-Rated for Vodacom Users",
    subtitle: "Browse and connect without using your data",
  },
  {
    id: 4,
    icon: Zap,
    title: "Grow Your Business",
    subtitle: "Access micro-tasks, build your network, and scale",
    isFinal: true,
  },
]

export function Onboarding({ onComplete, onSignIn, onSignUp }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slide = slides[currentSlide]

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center p-6 z-50">
      {/* Progress dots */}
      <div className="absolute top-12 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentSlide ? "bg-primary w-6" : "bg-border"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-sm text-center">
        {slide.isLogo ? (
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <span className="text-primary-foreground text-3xl font-bold">VP</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">{slide.title}</h1>
          </div>
        ) : (
          <>
            {slide.icon && (
              <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center mb-8">
                <slide.icon className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
            )}
            <h2 className="text-2xl font-bold text-foreground mb-3">{slide.title}</h2>
            {slide.subtitle && (
              <p className="text-muted-foreground text-base">{slide.subtitle}</p>
            )}
          </>
        )}
      </div>

      {/* Actions */}
      <div className="w-full max-w-sm space-y-3 pb-8">
        {slide.isFinal ? (
          <>
            <Button
              onClick={onSignUp}
              className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Create an Account
            </Button>
            <Button
              variant="outline"
              onClick={() => onComplete(true)}
              className="w-full h-12 text-base font-medium border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Browse as a Guest
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Already have an account?{" "}
              <button
                onClick={onSignIn}
                className="text-[#007bff] font-medium hover:underline"
              >
                Sign In
              </button>
            </p>
          </>
        ) : (
          <div className="flex gap-3">
            {currentSlide > 0 && (
              <Button
                variant="outline"
                onClick={handlePrev}
                className="flex-1 h-12 text-base bg-transparent"
              >
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="flex-1 h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

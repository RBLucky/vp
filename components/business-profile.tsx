"use client"

import { useState } from "react"
import { ArrowLeft, Shield, MapPin, Star, BadgeCheck, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BusinessProfileProps {
  businessId: number
  onBack: () => void
}

const businessData = {
  id: 1,
  name: "Premium Plumbing SA",
  logo: "PP",
  trustScore: 92,
  isVerified: true,
  category: "Home Services",
  location: "Johannesburg, Gauteng",
  description:
    "Premium Plumbing SA is a leading plumbing service provider in South Africa. We offer a wide range of services including emergency repairs, installations, maintenance, and renovations. Our team of certified professionals is available 24/7 to serve your plumbing needs.",
  services: [
    "Emergency Plumbing",
    "Pipe Installation",
    "Drain Cleaning",
    "Water Heater Services",
    "Bathroom Renovations",
  ],
  portfolio: [
    { id: 1, title: "Kitchen Renovation", image: "kitchen" },
    { id: 2, title: "Commercial Installation", image: "commercial" },
    { id: 3, title: "Emergency Repair", image: "repair" },
  ],
  reviews: [
    {
      id: 1,
      name: "John M.",
      rating: 5,
      comment: "Excellent service! They fixed my burst pipe within an hour of calling. Highly recommended.",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Sarah K.",
      rating: 4,
      comment: "Professional team, fair pricing. Will use again for future projects.",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Mike R.",
      rating: 5,
      comment: "Best plumbers in Joburg! They did a fantastic job on my bathroom renovation.",
      date: "2 months ago",
    },
  ],
}

const tabs = ["Details", "Portfolio", "Reviews"]

export function BusinessProfile({ onBack }: BusinessProfileProps) {
  const [activeTab, setActiveTab] = useState("Details")

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors mb-4"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
            <span className="text-primary font-bold text-xl">{businessData.logo}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">{businessData.name}</h1>
              {businessData.isVerified && (
                <BadgeCheck className="w-5 h-5 text-white" />
              )}
            </div>
            <p className="text-sm opacity-90">{businessData.category}</p>
          </div>
        </div>
        <Button
          className="w-full mt-4 bg-white text-primary hover:bg-white/90 gap-2"
        >
          <Phone className="w-4 h-4" />
          Contact
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border bg-card sticky top-0 z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex-1 py-3 text-sm font-medium transition-colors relative",
              activeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Details" && (
          <div className="space-y-4">
            {/* Trust Score */}
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Trust Score</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-foreground">
                        {businessData.trustScore}/100
                      </span>
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        Premium Verified
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{businessData.location}</span>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {businessData.description}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Services Offered</h3>
              <div className="flex flex-wrap gap-2">
                {businessData.services.map((service) => (
                  <span
                    key={service}
                    className="text-sm bg-secondary text-foreground px-3 py-1 rounded-full"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "Portfolio" && (
          <div className="grid grid-cols-2 gap-3">
            {businessData.portfolio.map((item) => (
              <Card key={item.id} className="bg-card border-border overflow-hidden">
                <div className="aspect-square bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{item.title}</span>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="space-y-3">
            {businessData.reviews.map((review) => (
              <Card key={review.id} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{review.name}</span>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < review.rating
                            ? "fill-primary text-primary"
                            : "text-border"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

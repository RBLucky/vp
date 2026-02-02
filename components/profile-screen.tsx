"use client"

import { Settings, ChevronRight, Shield, Star, Briefcase, CreditCard, HelpCircle, LogOut } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProfileScreenProps {
  isBasicUser: boolean
  onUpgrade: () => void
}

const menuItems = [
  { icon: Briefcase, label: "My Business Profile", href: "#" },
  { icon: Star, label: "Saved Businesses", href: "#" },
  { icon: CreditCard, label: "Billing & Subscription", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: HelpCircle, label: "Help & Support", href: "#" },
]

export function ProfileScreen({ isBasicUser, onUpgrade }: ProfileScreenProps) {
  return (
    <div className="pb-20 pt-4">
      {/* Profile Header */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground text-2xl font-bold">JD</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">John Doe</h1>
            <p className="text-sm text-muted-foreground">johndoe@email.com</p>
          </div>
        </div>

        {/* Account Status */}
        <Card className="bg-card border-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Account Status</p>
                  <p className="font-semibold text-foreground">
                    {isBasicUser ? "Basic Plan" : "Premium Plan"}
                  </p>
                </div>
              </div>
              {isBasicUser && (
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={onUpgrade}
                >
                  Upgrade
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-foreground">{item.label}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="px-4 mt-6">
        <button className="w-full flex items-center gap-3 p-4 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  )
}

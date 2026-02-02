"use client"

import { Card, CardContent } from "@/components/ui/card"

const messages = [
  {
    id: 1,
    name: "Premium Plumbing SA",
    message: "Thanks for your inquiry! We can schedule a visit for tomorrow...",
    time: "2m ago",
    unread: true,
  },
  {
    id: 2,
    name: "TechPro Solutions",
    message: "Your quote request has been received. We'll get back to you shortly.",
    time: "1h ago",
    unread: true,
  },
  {
    id: 3,
    name: "Clean Sweep Cleaning",
    message: "Hi! Yes, we do offer commercial cleaning services...",
    time: "3h ago",
    unread: false,
  },
  {
    id: 4,
    name: "QuickFix Electricians",
    message: "The job has been completed. Please rate our service!",
    time: "1d ago",
    unread: false,
  },
]

export function InboxScreen() {
  return (
    <div className="pb-20 pt-4">
      <div className="px-4 mb-4">
        <h1 className="text-2xl font-bold text-foreground">Inbox</h1>
      </div>

      <div className="px-4 space-y-2">
        {messages.map((msg) => (
          <Card
            key={msg.id}
            className={`bg-card border-border cursor-pointer hover:bg-secondary/50 transition-colors ${
              msg.unread ? "border-l-4 border-l-primary" : ""
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-sm">
                    {msg.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-sm ${msg.unread ? "font-semibold" : "font-medium"} text-foreground truncate`}>
                      {msg.name}
                    </h3>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                      {msg.time}
                    </span>
                  </div>
                  <p className={`text-sm ${msg.unread ? "text-foreground" : "text-muted-foreground"} truncate`}>
                    {msg.message}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

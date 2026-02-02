"use client"

import { Plus, Calendar, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const microTasks = [
  {
    id: 1,
    title: "Logo Design for Tech Startup",
    postedBy: "James K.",
    budget: "R1,500",
    deadline: "3 Feb 2026",
  },
  {
    id: 2,
    title: "Social Media Management - 1 Month",
    postedBy: "Sarah M.",
    budget: "R2,500",
    deadline: "10 Feb 2026",
  },
  {
    id: 3,
    title: "Product Photography - 20 Items",
    postedBy: "Mike L.",
    budget: "R800",
    deadline: "5 Feb 2026",
  },
  {
    id: 4,
    title: "WordPress Website Development",
    postedBy: "Lisa P.",
    budget: "R4,000",
    deadline: "15 Feb 2026",
  },
  {
    id: 5,
    title: "Video Editing - Corporate Promo",
    postedBy: "David R.",
    budget: "R1,200",
    deadline: "8 Feb 2026",
  },
  {
    id: 6,
    title: "Content Writing - 10 Blog Posts",
    postedBy: "Anna T.",
    budget: "R1,800",
    deadline: "20 Feb 2026",
  },
]

export function MicroTaskBoard() {
  return (
    <div className="pb-20 pt-4">
      {/* Header */}
      <div className="px-4 mb-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Micro-Tasks</h1>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-12">
          <Plus className="w-5 h-5" />
          Post a New Task
        </Button>
      </div>

      {/* Task List */}
      <div className="px-4 space-y-3">
        {microTasks.map((task) => (
          <Card key={task.id} className="bg-card border-border">
            <CardContent className="p-4">
              <h3 className="font-semibold text-foreground mb-3">{task.title}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Posted by {task.postedBy}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-primary">{task.budget}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {task.deadline}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  View & Bid
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

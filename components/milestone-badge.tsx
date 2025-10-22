"use client"

import type React from "react"

import { CheckCircle2, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

interface MilestoneBadgeProps {
  label: string
  status: "locked" | "unlocked" | "current"
  icon?: React.ReactNode
  className?: string
}

export function MilestoneBadge({ label, status, icon, className }: MilestoneBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300",
        status === "unlocked" && "bg-success/10 border-success text-success",
        status === "current" && "bg-accent/10 border-accent text-accent animate-pulse",
        status === "locked" && "bg-muted/10 border-muted text-muted-foreground",
        className,
      )}
    >
      {status === "unlocked" && <CheckCircle2 className="h-4 w-4" />}
      {status === "locked" && <Lock className="h-4 w-4" />}
      {status === "current" && icon}
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )
}

import { CheckCircle, Circle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatusTimelineProps {
  currentStatus: "received" | "audit" | "negotiation" | "review"
}

export function StatusTimeline({ currentStatus }: StatusTimelineProps) {
  const statuses = [
    { id: "received", label: "Received", description: "Bill uploaded and verified" },
    { id: "audit", label: "Audit", description: "Certified coders reviewing charges" },
    { id: "negotiation", label: "Negotiation", description: "Working with provider" },
    { id: "review", label: "Review & Approve", description: "Ready for your approval" },
  ]

  const currentIndex = statuses.findIndex((s) => s.id === currentStatus)

  return (
    <div className="space-y-6">
      {statuses.map((status, index) => {
        const isCompleted = index < currentIndex
        const isCurrent = index === currentIndex
        const isPending = index > currentIndex

        return (
          <div key={status.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border-2",
                  isCompleted && "bg-success border-success text-success-foreground",
                  isCurrent && "bg-accent border-accent text-accent-foreground",
                  isPending && "bg-background border-border text-muted-foreground",
                )}
              >
                {isCompleted && <CheckCircle className="h-5 w-5" />}
                {isCurrent && <Loader2 className="h-5 w-5 animate-spin" />}
                {isPending && <Circle className="h-5 w-5" />}
              </div>
              {index < statuses.length - 1 && (
                <div className={cn("w-0.5 h-12 mt-2", index < currentIndex ? "bg-success" : "bg-border")} />
              )}
            </div>
            <div className="flex-1 pb-8">
              <h3
                className={cn(
                  "font-semibold mb-1",
                  (isCompleted || isCurrent) && "text-foreground",
                  isPending && "text-muted-foreground",
                )}
              >
                {status.label}
              </h3>
              <p className="text-sm text-muted-foreground">{status.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

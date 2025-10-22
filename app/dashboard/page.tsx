"use client"

import { useState } from "react"
import { StatusTimeline } from "@/components/status-timeline"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Mail, AlertCircle } from "lucide-react"
import { SavingsMeter } from "@/components/savings-meter"
import { MilestoneBadge } from "@/components/milestone-badge"
import { ProgressDock } from "@/components/progress-dock"
import { ConfettiBurst } from "@/components/confetti-burst"

export default function DashboardPage() {
  const [showConfetti, setShowConfetti] = useState(false)

  // Sample data - in production this would come from an API
  const billData = {
    fileName: "medical-bill-2024.pdf",
    uploadDate: "2024-01-15",
    providerName: "City General Hospital",
    totalAmount: 5420.0,
    status: "audit" as const,
    currentSavings: 1240,
    estimatedTotal: 1800,
  }

  const notifications = [
    {
      id: 1,
      message: "Nice catch—duplicate lab code flagged.",
      type: "success",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      message: "Coding fix proposed for CPT 99213.",
      type: "info",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      message: "New savings found: bundling adjustment.",
      type: "success",
      timestamp: "1 day ago",
    },
  ]

  const handleApprove = () => {
    setShowConfetti(true)
  }

  return (
    <>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Your Bill Review</h1>
              <p className="text-muted-foreground">Track the progress of your medical bill audit and negotiation</p>
            </div>
            <MilestoneBadge label="Audit in Progress" status="current" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Bill Details</CardTitle>
                    <CardDescription>Uploaded on {new Date(billData.uploadDate).toLocaleDateString()}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent">
                    In Progress
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{billData.fileName}</p>
                    <p className="text-sm text-muted-foreground">{billData.providerName}</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-1">Total Bill Amount</p>
                  <p className="text-3xl font-bold">
                    ${billData.totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-success/5 to-accent/5">
              <CardHeader>
                <CardTitle>Savings Progress</CardTitle>
                <CardDescription>Running estimate as we audit your bill</CardDescription>
              </CardHeader>
              <CardContent>
                <SavingsMeter currentSavings={billData.currentSavings} estimatedTotal={billData.estimatedTotal} />
                <div className="mt-4 p-3 bg-background/50 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    Our fee:{" "}
                    <span className="font-semibold text-foreground">${(billData.currentSavings * 0.1).toFixed(0)}</span>{" "}
                    (10% of savings)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Review Timeline</CardTitle>
              <CardDescription>Current stage and upcoming milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <StatusTimeline currentStatus={billData.status} />
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Updates from our certified coders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <AlertCircle
                      className={`h-5 w-5 mt-0.5 ${notification.type === "success" ? "text-success" : "text-accent"}`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/30 border-2">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-1" />
                <div className="flex-1">
                  <p className="font-semibold mb-1">We'll keep you updated</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    You'll receive email notifications at each stage of the review process. Our certified coders are
                    currently auditing your bill for errors and overcharges.
                  </p>
                  <Button
                    onClick={handleApprove}
                    disabled
                    className="gradient-primary hover:gradient-primary-hover text-white font-semibold"
                  >
                    Approve Savings & Pay 10%
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">Available when negotiation is complete</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <ProgressDock currentStep={2} />
      <ConfettiBurst trigger={showConfetti} />
    </>
  )
}

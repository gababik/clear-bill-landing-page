"use client"

import { useEffect, useState } from "react"

interface ConfettiBurstProps {
  trigger: boolean
  onComplete?: () => void
}

export function ConfettiBurst({ trigger, onComplete }: ConfettiBurstProps) {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; color: string; rotation: number }>
  >([])

  useEffect(() => {
    if (!trigger) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReducedMotion) {
      // Skip animation for users who prefer reduced motion
      onComplete?.()
      return
    }

    // Generate confetti particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * -100 - 20,
      color: ["#34d399", "#14b8a6", "#6366f1", "#10b981"][Math.floor(Math.random() * 4)],
      rotation: Math.random() * 360,
    }))

    setParticles(newParticles)

    const timer = setTimeout(() => {
      setParticles([])
      onComplete?.()
    }, 2000)

    return () => clearTimeout(timer)
  }, [trigger, onComplete])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-1/2 left-1/2 w-3 h-3 rounded-sm animate-confetti"
          style={{
            backgroundColor: particle.color,
            transform: `translate(${particle.x}vw, ${particle.y}vh) rotate(${particle.rotation}deg)`,
            animation: "confetti-fall 2s ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          to {
            transform: translate(${Math.random() * 200 - 100}vw, 100vh) rotate(${Math.random() * 720}deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

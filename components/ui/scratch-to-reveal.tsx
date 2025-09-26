"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useAnimation } from "motion/react"
import { cn } from "@/lib/utils"

interface ScratchToRevealProps {
  children: React.ReactNode
  width: number
  height: number
  minScratchPercentage?: number
  className?: string
  onComplete?: () => void
  gradientColors?: [string, string, string]
}

export const ScratchToReveal: React.FC<ScratchToRevealProps> = ({
  width,
  height,
  minScratchPercentage = 50,
  onComplete,
  children,
  className,
  gradientColors = ["#A97CF8", "#F38CB8", "#FDCC92"],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratching, setIsScratching] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, gradientColors[0])
      gradient.addColorStop(0.5, gradientColors[1])
      gradient.addColorStop(1, gradientColors[2])
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }, [gradientColors, width, height])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (isScratching) scratch(event.clientX, event.clientY)
    }
    const handleTouchMove = (event: TouchEvent) => {
      if (isScratching) {
        const touch = event.touches[0]
        scratch(touch.clientX, touch.clientY)
      }
    }
    const stopScratch = () => {
      setIsScratching(false)
      checkCompletion()
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("touchmove", handleTouchMove)
    document.addEventListener("mouseup", stopScratch)
    document.addEventListener("touchend", stopScratch)
    document.addEventListener("touchcancel", stopScratch)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("mouseup", stopScratch)
      document.removeEventListener("touchend", stopScratch)
      document.removeEventListener("touchcancel", stopScratch)
    }
  }, [isScratching])

  const handleMouseDown = () => setIsScratching(true)
  const handleTouchStart = () => setIsScratching(true)

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      ctx.globalCompositeOperation = "destination-out"
      ctx.beginPath()
      ctx.arc(x, y, 30, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  const startAnimation = async () => {
    await controls.start({
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
      transition: { duration: 0.4 },
    })
    if (onComplete) onComplete()
  }

  const checkCompletion = () => {
    if (isComplete) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const pixels = imageData.data
      let clearPixels = 0
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++
      }
      const percentage = (clearPixels / (pixels.length / 4)) * 100
      if (percentage >= minScratchPercentage) {
        setIsComplete(true)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        startAnimation()
      }
    }
  }

  return (
    <motion.div
      className={cn("relative overflow-hidden select-none", className)}
      style={{ width, height }}
      animate={controls}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute top-0 left-0"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      />
      {/* ✅ Make children (like <Image />) scale to width/height */}
      <div style={{ width, height }} className="flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  )
}

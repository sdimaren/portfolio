'use client'

import { useEffect, useRef, useState } from 'react'
import { Gradient as GradientUtil } from '../../utils/Gradient'
import { useTheme } from '../../hooks/useTheme'

const Gradient = () => {
  const { preset } = useTheme()
  const canvasARef = useRef<HTMLCanvasElement>(null)
  const canvasBRef = useRef<HTMLCanvasElement>(null)

  // Track which buffer is currently visible: 'A' or 'B'
  const [activeBuffer, setActiveBuffer] = useState<'A' | 'B'>('A')
  const gradientRefs = useRef<{ A: InstanceType<typeof GradientUtil> | null; B: InstanceType<typeof GradientUtil> | null }>({ A: null, B: null })
  const currentPresetIdRef = useRef<string | null>(null)
  const isFirstRender = useRef(true)

  // Helper: apply gradient CSS vars to a canvas element
  const applyGradientVars = (canvas: HTMLCanvasElement, colors: [string, string, string, string]) => {
    colors.forEach((color, i) => {
      canvas.style.setProperty(`--gradient-color-${i + 1}`, color)
    })
  }

  // Initialize the first canvas on mount
  useEffect(() => {
    const canvasA = canvasARef.current
    if (!canvasA || !isFirstRender.current) return
    isFirstRender.current = false

    applyGradientVars(canvasA, preset.gradient)
    const gradientA = new GradientUtil()
    gradientRefs.current.A = gradientA
    gradientA.initGradient('#gradient-canvas-a')
    currentPresetIdRef.current = preset.id
    setActiveBuffer('A')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // On preset change: initialize the standby canvas, then crossfade
  useEffect(() => {
    // Skip if this is the initial preset (already handled by mount effect)
    if (currentPresetIdRef.current === null || currentPresetIdRef.current === preset.id) return

    const standbyKey = activeBuffer === 'A' ? 'B' : 'A'
    const standbyCanvas = standbyKey === 'A' ? canvasARef.current : canvasBRef.current
    const standbySelector = standbyKey === 'A' ? '#gradient-canvas-a' : '#gradient-canvas-b'

    if (!standbyCanvas) return

    // Set new gradient colors on the standby canvas
    applyGradientVars(standbyCanvas, preset.gradient)

    // Initialize the standby canvas gradient
    const newGradient = new GradientUtil()
    const currentGradient = gradientRefs.current[activeBuffer]

    // Sync time to ensure the animation is continuous across theme switches
    if (currentGradient) {
      ; (newGradient as any).t = (currentGradient as any).t
    }

    gradientRefs.current[standbyKey] = newGradient
    newGradient.initGradient(standbySelector)

    // Crossfade: swap the active buffer
    setActiveBuffer(standbyKey)
    currentPresetIdRef.current = preset.id
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset.id])

  const crossfadeStyle = (buffer: 'A' | 'B'): React.CSSProperties => ({
    opacity: activeBuffer === buffer ? 1 : 0,
    transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'opacity',
    position: 'absolute' as const,
    inset: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
  })

  return (
    <>
      <canvas ref={canvasARef} id="gradient-canvas-a" style={crossfadeStyle('A')} />
      <canvas ref={canvasBRef} id="gradient-canvas-b" style={crossfadeStyle('B')} />
    </>
  )
}

export default Gradient

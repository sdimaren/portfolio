'use client'

import { useEffect } from 'react'
import { usePreloader } from '../providers/PreloaderProvider'

/** Syncs theme preset to document for light/dark mode CSS and accent CSS variables */
export default function ThemeSync() {
  const preloader = usePreloader()
  const preset = preloader?.preset
  const theme = preloader?.theme ?? 'black'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'black')
  }, [theme])

  // Sync accent CSS variables for selection colors
  useEffect(() => {
    if (!preset) return
    const root = document.documentElement
    // Convert hex accent to rgba for selection background
    const hex = preset.accent.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    root.style.setProperty('--accent-selection-bg', `rgba(${r}, ${g}, ${b}, 0.3)`)
    root.style.setProperty('--accent-selection-text', preset.accent)
  }, [preset])

  return null
}

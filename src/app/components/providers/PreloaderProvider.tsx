'use client'

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { getPresetById, DEFAULT_PRESET_ID, ThemePreset } from '../../data/themePresets'

interface PreloaderContextProps {
  onLoaded: () => gsap.core.Tween
  theme: string
  setTheme: (theme: string) => void
  loaded: boolean
  preset: ThemePreset
  presetId: string
  setPresetId: (id: string) => void
  setCustomGradient: (id: string, colors: [string, string, string, string] | null) => void
  useMixBlend: boolean
  setUseMixBlend: (value: boolean) => void
}

const PreloaderContext = createContext<PreloaderContextProps | null>(null)

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [presetId, setPresetIdState] = useState(DEFAULT_PRESET_ID)
  const [customGradients, setCustomGradientsState] = useState<Record<string, [string, string, string, string]>>({})
  const [loaded, setLoaded] = useState(false)
  const [preloaderDone, setPreloaderDone] = useState(false)
  const [useMixBlend, setUseMixBlend] = useState(false)
  const preloaderRef = useRef<HTMLDivElement>(null)

  const basePreset = getPresetById(presetId)
  const preset = {
    ...basePreset,
    gradient: customGradients[presetId] || basePreset.gradient
  }
  const theme = preset.mode === 'light' ? 'white' : 'black'

  // Read saved preset and custom gradients from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('themePreset')
    if (saved) {
      const validPreset = getPresetById(saved)
      setPresetIdState(validPreset.id)
      if (validPreset.defaultMixBlend) {
        setUseMixBlend(true)
      }
    }
    const savedGradients = localStorage.getItem('customGradients')
    if (savedGradients) {
      try {
        setCustomGradientsState(JSON.parse(savedGradients))
      } catch (e) { }
    }
  }, [])

  const setPresetId = useCallback((id: string) => {
    const validPreset = getPresetById(id)
    setPresetIdState(validPreset.id)
    if (validPreset.defaultMixBlend) {
      setUseMixBlend(true)
    } else {
      setUseMixBlend(false)
    }
    localStorage.setItem('themePreset', validPreset.id)
  }, [])

  const setCustomGradient = useCallback((id: string, colors: [string, string, string, string] | null) => {
    setCustomGradientsState(prev => {
      const next = { ...prev }
      if (colors) {
        next[id] = colors
      } else {
        delete next[id]
      }
      localStorage.setItem('customGradients', JSON.stringify(next))
      return next
    })
  }, [])

  // Legacy setTheme for backward compat
  const setTheme = useCallback((t: string) => {
    if (t === 'white') setPresetId('ivory')
    else setPresetId('obsidian')
  }, [setPresetId])

  // Sync body background color when preset changes
  useEffect(() => {
    document.body.style.backgroundColor = preset.body
    setLoaded(true)
  }, [preset])

  /** Fades the preloader overlay out — cinematic ease, 1.5s. Only for initial page load. */
  const onLoaded = useCallback(() =>
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setPreloaderDone(true)
      },
    }), [])

  return (
    <PreloaderContext.Provider value={{ onLoaded, theme, setTheme, loaded, preset, presetId, setPresetId, setCustomGradient, useMixBlend, setUseMixBlend }}>
      {!preloaderDone && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 z-50 pointer-events-none"
          id="preloader"
          style={{ backgroundColor: preset.body }}
        />
      )}
      {children}
    </PreloaderContext.Provider>
  )
}

export const usePreloader = () => useContext(PreloaderContext)
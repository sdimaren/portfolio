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
}

const PreloaderContext = createContext<PreloaderContextProps | null>(null)

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [presetId, setPresetIdState] = useState(DEFAULT_PRESET_ID)
  const [loaded, setLoaded] = useState(false)
  const [preloaderDone, setPreloaderDone] = useState(false)
  const preloaderRef = useRef<HTMLDivElement>(null)

  const preset = getPresetById(presetId)
  const theme = preset.mode === 'light' ? 'white' : 'black'

  // Read saved preset from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('themePreset')
    if (saved) {
      const validPreset = getPresetById(saved)
      setPresetIdState(validPreset.id)
    }
  }, [])

  const setPresetId = useCallback((id: string) => {
    const validPreset = getPresetById(id)
    setPresetIdState(validPreset.id)
    localStorage.setItem('themePreset', validPreset.id)
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
    <PreloaderContext.Provider value={{ onLoaded, theme, setTheme, loaded, preset, presetId, setPresetId }}>
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
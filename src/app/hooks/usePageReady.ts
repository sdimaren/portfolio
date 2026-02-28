'use client'

import { useEffect, useRef } from 'react'
import { usePreloader } from '../components/providers/PreloaderProvider'

/**
 * Triggers the GSAP preloader fade-out once after the page mounts.
 * Uses a ref to ensure it only fires on initial load, not on theme changes.
 */
export function usePageReady() {
    const preloader = usePreloader()
    const hasFired = useRef(false)

    useEffect(() => {
        if (!preloader || hasFired.current) return
        hasFired.current = true
        const timer = setTimeout(() => preloader.onLoaded(), 100)
        return () => clearTimeout(timer)
        // Only run when preloader becomes available (null → object), not on every re-render
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [!!preloader])
}

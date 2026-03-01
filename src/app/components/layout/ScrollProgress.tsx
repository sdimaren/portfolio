'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '../../hooks/useTheme'

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null)
    const { accent } = useTheme()

    useEffect(() => {
        let rafId: number

        const update = () => {
            const el = barRef.current
            if (el) {
                const h = document.documentElement.scrollHeight - document.documentElement.clientHeight
                const progress = h > 0 ? Math.min(window.scrollY / h, 1) : 0
                el.style.transform = `scaleX(${progress})`
            }
        }

        const handleScroll = () => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(update)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        update() // set initial position

        return () => {
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <div
            ref={barRef}
            className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
            style={{ backgroundColor: accent, willChange: 'transform', transform: 'scaleX(0)' }}
        />
    )
}

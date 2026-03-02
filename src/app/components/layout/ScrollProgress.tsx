'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'

export default function ScrollProgress() {
    const barRef = useRef<HTMLDivElement>(null)
    const { accent, loaded } = useTheme()

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
        update()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <div className={cn(
            "fixed top-0 left-0 right-0 z-[101] transition-all duration-1000 ease-out",
            !loaded ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0 delay-500"
        )}>
            <div
                ref={barRef}
                className="h-1 origin-left w-full"
                style={{ backgroundColor: accent, willChange: 'transform', transform: 'scaleX(0)' }}
            />
        </div>
    )
}

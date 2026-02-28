'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/useTheme'

export default function ScrollProgress() {
    const [scale, setScale] = useState(0)
    const { accent } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const s = window.scrollY / h
            setScale(Math.min(Math.max(s, 0), 1))
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="fixed top-0 left-0 right-0 h-1 origin-left z-[100] transition-transform duration-150"
            style={{ transform: `scaleX(${scale})`, backgroundColor: accent }}
        />
    )
}

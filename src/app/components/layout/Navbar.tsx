'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'
import { siteContent } from '../../data/content'

function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const navbarHeight = 64
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({ top, behavior: 'smooth' })
}

/** Convert a hex colour to an rgba() string with the given alpha */
function hexToRgba(hex: string, alpha: number) {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r},${g},${b},${alpha})`
}

export default function Navbar() {
    const { preset } = useTheme()
    const headerDark = preset.headerDark
    const isDark = preset.mode === 'dark' || !!headerDark
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const mobileMenu = document.getElementById('mobile-menu')
        if (mobileMenu) {
            mobileMenu.classList.toggle('open', mobileMenuOpen)
        }
    }, [mobileMenuOpen])

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
            "bg-white/60 border-black/10 dark:bg-black/40 dark:border-white/5",
            headerDark && "bg-black/40 border-white/5"
        )}>
            <div className="max-w-7xl mx-auto pl-6 md:pl-0 pr-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={cn(
                        "text-xl font-serif italic font-medium transition-colors",
                        "text-gray-900 dark:text-white",
                        headerDark && "text-white"
                    )}>
                        {siteContent.global.name}
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {siteContent.navigation.map(nav => (
                        <button key={nav.label} onClick={() => scrollToSection(nav.href)} className={cn("text-sm font-medium transition-colors", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", headerDark && "text-gray-400 hover:text-white")}>
                            {nav.label}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('contact')} className={cn("text-sm font-medium transition-colors", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", headerDark && "text-gray-400 hover:text-white")}>
                        Contact
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("px-5 py-2 text-sm font-medium rounded-full transition-colors", "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200", headerDark && "bg-white text-black hover:bg-gray-200")}
                    >
                        Resume
                    </a>
                </div>

                <button
                    type="button"
                    className={cn("md:hidden transition-colors", "text-gray-900 dark:text-white", headerDark && "text-white")}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <div
                id="mobile-menu"
                className={cn("md:hidden absolute top-[65px] left-0 right-0 backdrop-blur-xl border-b p-6 flex flex-col gap-6", isDark ? "border-white/5" : "border-black/10")}
                style={{
                    background: `linear-gradient(to bottom, ${hexToRgba(preset.body, 0.4)} 0%, ${hexToRgba(preset.body, 0.98)} 100%)`,
                    transition: 'background 0.3s'
                }}
                role="navigation"
                aria-label="Mobile navigation"
                aria-hidden={!mobileMenuOpen}
            >
                {siteContent.navigation.map(nav => (
                    <button key={nav.label} onClick={() => { scrollToSection(nav.href); setMobileMenuOpen(false) }} className={cn("text-lg font-serif italic transition-colors text-left", isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")}>
                        {nav.label}
                    </button>
                ))}
                <button onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false) }} className={cn("text-lg font-serif italic transition-colors text-left", isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")}>Contact</button>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn("text-lg font-serif italic transition-colors text-left", isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")}
                >
                    Resume
                </a>
            </div>
        </nav>
    )
}

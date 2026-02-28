'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'
import { siteContent } from '../../data/content'

export default function Navbar() {
    const { preset } = useTheme()
    const headerDark = preset.headerDark
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
                    <a href="#" className={cn(
                        "text-xl font-serif italic font-medium tracking-wide transition-colors",
                        "text-gray-900 dark:text-white",
                        headerDark && "text-white"
                    )}>
                        {siteContent.global.name}
                    </a>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {siteContent.navigation.map(nav => (
                        <a key={nav.label} href={nav.href} className={cn("text-sm uppercase tracking-widest transition-colors", "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", headerDark && "text-gray-400 hover:text-white")}>
                            {nav.label}
                        </a>
                    ))}
                    <a href="contact" className={cn("px-5 py-2 text-sm font-medium rounded-full transition-colors", "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200", headerDark && "bg-white text-black hover:bg-gray-200")}>
                        Contact
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
                className={cn("md:hidden absolute top-20 left-0 right-0 backdrop-blur-md border-b p-6 flex flex-col gap-6 transition-colors", "bg-white/95 border-black/10 dark:bg-black/90 dark:border-white/5", headerDark && "bg-black/90 border-white/5")}
                role="navigation"
                aria-label="Mobile navigation"
                aria-hidden={!mobileMenuOpen}
            >
                {siteContent.navigation.map(nav => (
                    <a key={nav.label} href={nav.href} className={cn("text-lg font-serif italic transition-colors", "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white", headerDark && "text-gray-300 hover:text-white")} onClick={() => setMobileMenuOpen(false)}>
                        {nav.label}
                    </a>
                ))}
                <a href="contact" className={cn("text-lg font-serif italic transition-colors", "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white", headerDark && "text-gray-300 hover:text-white")} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    )
}

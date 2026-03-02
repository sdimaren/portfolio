'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { usePreloader } from '../providers/PreloaderProvider'
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
    const { preset, useMixBlend } = useTheme()
    const preloader = usePreloader()
    const isReady = preloader?.loaded

    const headerDark = preset.headerDark
    const isDark = preset.mode === 'dark' || !!headerDark
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isFullyClosed, setIsFullyClosed] = useState(true)

    useEffect(() => {
        if (mobileMenuOpen) setIsFullyClosed(false)
    }, [mobileMenuOpen])

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
                when: "afterChildren",
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05,
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    const itemVariants: Variants = {
        closed: { opacity: 0, y: 10 },
        open: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" }
        }
    }

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={isReady ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all ease-out backdrop-blur-md",
                (!mobileMenuOpen && isFullyClosed)
                    ? cn(
                        "bg-white/60 dark:bg-black/40 border-b border-black/10 dark:border-white/5 duration-300",
                        headerDark && "bg-black/40 border-white/5"
                    )
                    : "bg-transparent border-transparent duration-200"
            )}
        >
            <AnimatePresence onExitComplete={() => setIsFullyClosed(true)}>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className={cn(
                            "md:hidden absolute top-0 left-0 right-0 h-auto backdrop-blur-md p-6 pt-24 pb-12 flex flex-col gap-6 z-10 border-b shadow-2xl",
                            isDark ? "border-white/5" : "border-black/10"
                        )}
                        style={{
                            background: isDark
                                ? `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, ${hexToRgba(preset.body, 0.4)} 100%)`
                                : `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, ${hexToRgba(preset.body, 0.3)} 100%)`,
                        }}
                    >
                        {siteContent.navigation.map(nav => (
                            <motion.button
                                key={nav.label}
                                variants={itemVariants}
                                onClick={() => { scrollToSection(nav.href); setMobileMenuOpen(false) }}
                                className={cn(
                                    "text-lg font-sans transition-colors text-left",
                                    useMixBlend ? "mix-blend-difference text-white" : (isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                                )}
                            >
                                {nav.label}
                            </motion.button>
                        ))}
                        <motion.button
                            variants={itemVariants}
                            onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false) }}
                            className={cn(
                                "text-lg font-sans transition-colors text-left",
                                useMixBlend ? "mix-blend-difference text-white" : (isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                            )}
                        >
                            Contact
                        </motion.button>
                        <motion.a
                            variants={itemVariants}
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                                "text-lg font-sans transition-colors text-left",
                                useMixBlend ? "mix-blend-difference text-white" : (isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900")
                            )}
                        >
                            Resume
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 relative z-20">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false) }}
                        className={cn(
                            "transition-all duration-300 ease-out hover:scale-110 active:scale-95",
                            useMixBlend ? "mix-blend-difference text-white" : cn("text-gray-900 dark:text-white/80", headerDark && "text-white/80")
                        )}
                        aria-label="Home"
                    >
                        <svg
                            viewBox="0 0 21.2 35"
                            className="w-5 h-8 fill-current"
                            aria-hidden="true"
                        >
                            <polygon points="21.2,14.7 11.7,14.7 16,0 0,20.3 9.8,20.3 5.5,35" />
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {siteContent.navigation.map(nav => (
                        <button key={nav.label} onClick={() => scrollToSection(nav.href)} className={cn("text-sm font-medium transition-colors hover-underline", useMixBlend ? "mix-blend-difference text-white" : cn("text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", headerDark && "text-gray-400 hover:text-white"))}>
                            {nav.label}
                        </button>
                    ))}
                    <button onClick={() => scrollToSection('contact')} className={cn("text-sm font-medium transition-colors hover-underline", useMixBlend ? "mix-blend-difference text-white" : cn("text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", headerDark && "text-white/80 hover:text-white"))}>
                        Contact
                    </button>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("px-5 py-2 text-sm font-medium rounded-full transition-colors", useMixBlend ? "mix-blend-difference border border-white text-white" : cn("bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200", headerDark && "bg-white text-black hover:bg-gray-200"))}
                    >
                        Resume
                    </a>
                </div>

                <button
                    type="button"
                    className={cn(
                        "md:hidden transition-all duration-200 relative z-[60] w-10 h-10 flex items-center justify-center",
                        useMixBlend ? "mix-blend-difference text-white" : cn("text-gray-900 dark:text-white", headerDark && "text-white")
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <AnimatePresence mode="wait">
                        {mobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>
        </motion.nav>
    )
}

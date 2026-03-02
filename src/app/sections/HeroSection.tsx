'use client'

import { ArrowDown } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { FadeIn } from '../components/ui/FadeIn'
import { siteContent } from '../data/content'
import { useTheme } from '../hooks/useTheme'
import { cn } from '../utils/cn'

export default function HeroSection() {
    const { preset, useMixBlend } = useTheme()
    const isDark = preset.mode === 'dark' || !!preset.headerDark
    const isLight = !isDark

    // When blend mode is on, we force white text because difference on white gives black on white and white on black.
    // We also remove shadows as they can interfere with the inversion math.
    const textBase = useMixBlend ? "mix-blend-difference text-white" : ""

    const textColors = {
        primary: useMixBlend ? textBase : (isDark ? "text-white/90" : "text-editorial-charcoal"),
        secondary: useMixBlend ? "mix-blend-difference text-white/80" : (isDark ? "text-white/80" : "text-editorial-charcoal/80"),
        badge: useMixBlend ? textBase : (isDark ? "text-white" : "text-editorial-charcoal"),
        scroll: useMixBlend ? textBase : (isDark ? "text-gray-400" : "text-editorial-charcoal/60")
    }

    const shadowEffect = (!useMixBlend && isDark) ? "text-shadow-halo" : ""

    return (
        <section className="min-h-screen flex flex-col justify-start md:justify-center px-6 pt-48 md:pt-20 lg:pt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <FadeIn delay={0.2} className="inline-block">
                        <Badge
                            className="mb-8 gap-3 text-[10px] uppercase tracking-widest relative bg-transparent border-none py-2 px-4 shadow-sm"
                        >
                            {!useMixBlend && (
                                <div className={cn(
                                    "absolute inset-0 backdrop-blur-md rounded-full border pointer-events-none",
                                    isLight ? "bg-white/20 border-black/10" : "bg-black/20 border-white/10"
                                )} />
                            )}

                            {useMixBlend && (
                                <div className="absolute inset-0 rounded-full border border-white mix-blend-difference pointer-events-none z-10" />
                            )}

                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                                    <span className="w-full h-full rounded-full bg-emerald-500 animate-pulse" />
                                    <svg
                                        className={cn(
                                            "absolute w-[10px] h-[10px] pointer-events-none overflow-visible",
                                            useMixBlend && "mix-blend-difference"
                                        )}
                                        viewBox="0 0 10 10"
                                    >
                                        <circle
                                            cx="5"
                                            cy="5"
                                            r="4.75"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="0.5"
                                        />
                                    </svg>
                                </div>
                                <div className={cn(
                                    "flex items-center gap-3 transition-colors relative z-10",
                                    useMixBlend ? "mix-blend-difference text-white" : textColors.badge
                                )}>
                                    <span className="font-semibold">{siteContent.global.name}</span>
                                    <span className={cn(
                                        "w-px h-2",
                                        useMixBlend ? "bg-white" : (isDark ? "bg-white/30" : "bg-black/20")
                                    )} />
                                    <span className={cn(
                                        "font-medium",
                                        useMixBlend ? "" : "opacity-80"
                                    )}>{siteContent.hero.badge}</span>
                                </div>
                            </div>
                        </Badge>
                    </FadeIn>

                    <FadeIn delay={0.3} className={useMixBlend ? "mix-blend-difference" : ""}>
                        <h1 className={cn("text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-serif mb-8 transition-colors", useMixBlend ? "text-white" : textColors.primary, shadowEffect)}>
                            {siteContent.hero.heading.line1}<br />
                            <span className="italic">{siteContent.hero.heading.line2}</span><br />
                            {siteContent.hero.heading.line3}
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4} className={useMixBlend ? "mix-blend-difference" : ""}>
                        <p className={cn("text-lg max-w-md leading-relaxed transition-colors", useMixBlend ? "text-white/80" : textColors.secondary, shadowEffect)}>
                            {siteContent.hero.description}
                        </p>
                    </FadeIn>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <FadeIn delay={0.5}>
                            <Button href={siteContent.hero.primaryAction.href}>
                                {siteContent.hero.primaryAction.label}
                            </Button>
                        </FadeIn>

                        <FadeIn delay={0.5} className={useMixBlend ? "mix-blend-difference" : ""}>
                            <Button
                                href={siteContent.hero.secondaryAction.href}
                                variant="outline"
                                className="bg-transparent border-none"
                            >
                                {!useMixBlend && <div className="absolute inset-0 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full pointer-events-none" />}

                                <div className="absolute inset-0 rounded-full border-[1.5px] border-white pointer-events-none z-10" />
                                <span className={cn("relative z-20", useMixBlend ? "text-white" : textColors.primary, shadowEffect)}>
                                    {siteContent.hero.secondaryAction.label}
                                </span>
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </div>
            <FadeIn
                delay={1}
                className={cn("absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 transition-colors", textColors.scroll, shadowEffect)}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
            </FadeIn>
        </section >
    )
}

'use client'

import { ArrowDown } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { FadeIn } from '../components/ui/FadeIn'
import { siteContent } from '../data/content'

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-start md:justify-center px-6 pt-48 md:pt-20 lg:pt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <FadeIn delay={0.2}>
                        <Badge className="mb-8 gap-2 text-[10px]">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {siteContent.hero.badge}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-serif mb-8 transition-colors text-gray-900 dark:text-white">
                            {siteContent.hero.heading.line1}<br />
                            <span className="italic">{siteContent.hero.heading.line2}</span><br />
                            {siteContent.hero.heading.line3}
                        </h1>

                        <p className="text-lg max-w-md leading-relaxed mb-10 transition-colors text-gray-600 dark:text-gray-400">
                            {siteContent.hero.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button href={siteContent.hero.primaryAction.href}>
                                {siteContent.hero.primaryAction.label}
                            </Button>
                            <Button href={siteContent.hero.secondaryAction.href} variant="outline">
                                {siteContent.hero.secondaryAction.label}
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>
            <FadeIn
                delay={1}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-gray-500"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
            </FadeIn>
        </section>
    )
}

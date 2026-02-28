'use client'

import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'
import { FadeIn } from '../ui/FadeIn'

export function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <div className={cn("text-3xl font-serif mb-1 transition-colors", "text-gray-900 dark:text-white")}>{value}</div>
            <div className={cn("text-xs uppercase tracking-widest transition-colors", "text-gray-600 dark:text-gray-500")}>{label}</div>
        </div>
    )
}

interface TimelineItemProps {
    period: string
    title: string
    company: string
    desc: string
}

export function TimelineItem({ period, title, company, desc }: TimelineItemProps) {
    const { accent } = useTheme()
    return (
        <FadeIn className={cn("relative pl-8 border-l transition-colors", "border-black/10 dark:border-white/10")}>
            <span className={cn("absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full border-2 transition-colors", "border-white dark:border-[#0f0f0f]")} style={{ backgroundColor: accent }} />
            <div className="text-xs mb-1 font-mono" style={{ color: accent }}>{period}</div>
            <h4 className={cn("text-lg font-medium transition-colors", "text-gray-900 dark:text-white")}>{title}</h4>
            <div className={cn("text-sm mb-2 transition-colors", "text-gray-600 dark:text-gray-500")}>{company}</div>
            <p className={cn("text-sm transition-colors", "text-gray-600 dark:text-gray-400")}>{desc}</p>
        </FadeIn>
    )
}

interface SkillGroupProps {
    title: string
    items: string[]
}

export function SkillGroup({ title, items }: SkillGroupProps) {
    return (
        <FadeIn>
            <h4 className={cn("text-xl font-serif italic mb-4 transition-colors", "text-gray-700 dark:text-gray-300")}>{title}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-fr">
                {items.map((item) => (
                    <div key={item} className={cn("flex items-center justify-center h-full w-full px-4 py-2 border rounded-lg text-sm text-center transition-all cursor-default", "bg-black/5 border-black/10 text-gray-700 hover:bg-black/10 hover:border-black/20 dark:bg-white/5 dark:border-white/5 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:border-white/20")}>
                        {item}
                    </div>
                ))}
            </div>
        </FadeIn>
    )
}


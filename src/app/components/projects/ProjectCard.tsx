'use client'

import { ArrowUpRight } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { Badge } from '../ui/Badge'
import { FadeIn } from '../ui/FadeIn'

interface ProjectCardProps {
    img: string
    title: string
    desc: string
    badge: string
    tags: string[]
    href?: string
}

export default function ProjectCard({ img, title, desc, badge, tags, href }: ProjectCardProps) {
    const { accent } = useTheme()

    const inner = (
        <>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative border transition-colors bg-black/5 border-black/10 dark:bg-white/5 dark:border-white/5">
                <img src={img} alt={title || "Project image"} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <Badge variant="glass" className="absolute top-4 right-4">
                    {badge}
                </Badge>
            </div>
            <div className="flex justify-between items-start mb-3">
                <h3
                    className="text-2xl font-serif transition-colors text-gray-900 dark:text-white group-hover:text-[var(--accent)]"
                    style={{ '--accent': accent } as React.CSSProperties}
                >{title}</h3>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </div>
            <p className="text-sm mb-4 transition-colors text-gray-600 dark:text-gray-400">{desc}</p>
            <div className="flex flex-nowrap gap-1 overflow-x-auto">
                {tags.map((t) => (
                    <Badge key={t} variant="outline" className="whitespace-nowrap">
                        {t}
                    </Badge>
                ))}
            </div>
        </>
    )

    return (
        <FadeIn className="group cursor-pointer">
            {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                </a>
            ) : (
                <div>{inner}</div>
            )}
        </FadeIn>
    )
}

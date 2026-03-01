'use client'

import { Stat, TimelineItem, SkillGroup } from '../components/about/AboutPrimitives'
import { cn } from '../utils/cn'
import { FadeIn } from '../components/ui/FadeIn'
import { siteContent } from '../data/content'

export default function AboutSection() {
    const { about } = siteContent

    return (
        <section id="about" className={cn("py-32 px-6 transition-colors", "bg-white/20 dark:bg-black/20")}>
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div>
                        <FadeIn delay={0.1}>
                            <h2 className={cn("text-4xl md:text-5xl font-serif mb-10 transition-colors", "text-gray-900 dark:text-white")}>
                                {about.title.line1}{' '}
                                <span className={cn("italic transition-colors", "text-gray-500 dark:text-gray-500")}>{about.title.line2}</span> {about.title.line3}
                            </h2>

                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className={cn("space-y-6 text-lg leading-relaxed mb-12 transition-colors", "text-gray-600 dark:text-gray-400")}>
                                {about.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className={cn("mt-12 pt-12 border-t grid grid-cols-3 gap-8 transition-colors", "border-black/10 dark:border-white/10")}>
                                {about.stats.map((stat) => (
                                    <Stat key={stat.id} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div>
                        <FadeIn delay={0.4}>
                            <h3 className={cn("text-sm uppercase tracking-widest mb-8 transition-colors", "text-gray-600 dark:text-gray-500")}>{about.experience.title}</h3>
                        </FadeIn>
                        <div className="space-y-8">
                            {about.experience.items.map((item) => (
                                <TimelineItem
                                    key={item.id}
                                    period={item.period}
                                    title={item.title}
                                    company={item.company}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <FadeIn delay={0.5}>
                        <h3 className={cn("text-sm uppercase tracking-widest mb-8 transition-colors", "text-gray-600 dark:text-gray-500")}>{about.skills.title}</h3>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                        {about.skills.items.map((group) => (
                            <SkillGroup key={group.id} title={group.title} items={group.items} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


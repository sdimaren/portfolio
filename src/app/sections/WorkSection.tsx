'use client'

import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '../components/projects/ProjectCard'
import { siteContent } from '../data/content'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function WorkSection() {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={siteContent.work.title}
                    description={siteContent.work.description}
                    action={
                        <a href={siteContent.work.action.href} target="_blank" rel="noopener noreferrer" className="border-b pb-1 transition-colors inline-flex items-center gap-2 text-gray-900 border-black/30 hover:border-gray-900 dark:text-white dark:border-white/30 dark:hover:border-white">
                            {siteContent.work.action.label} <ArrowUpRight className="w-4 h-4" />
                        </a>
                    }
                />

                <div className="flex flex-wrap justify-center gap-8">
                    {siteContent.work.items.map((project) => (
                        <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] xl:w-[calc(25%-1.5rem)]">
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                badge={project.badge}
                                tags={project.tags}
                                href={project.href}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

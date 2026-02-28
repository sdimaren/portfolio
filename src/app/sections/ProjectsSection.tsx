'use client'

import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import { cn } from '../utils/cn'
import { siteContent } from '../data/content'
import { SectionHeader } from '../components/ui/SectionHeader'

export default function ProjectsSection() {
    const { projects: projectsData } = siteContent

    return (
        <section id="projects" className="pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    title={projectsData.title}
                    description={projectsData.description}
                />

                <div className="flex flex-wrap justify-center gap-8">
                    {projectsData.items.map((project) => (
                        <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] xl:w-[calc(25%-1.5rem)]">
                            <ProjectCard
                                img={project.img}
                                title={project.title}
                                desc={project.desc}
                                badge={project.badge}
                                tags={project.tags}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


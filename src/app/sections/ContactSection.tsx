'use client'

import { Github, Linkedin, Globe, Mail } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import { Button } from '../components/ui/Button'
import { FadeIn } from '../components/ui/FadeIn'
import { siteContent } from '../data/content'

export default function ContactSection() {
    const { preset } = useTheme()

    return (
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[120px] rounded-full -z-10" style={{ backgroundColor: `${preset.glow}33` }} />
            <div className="max-w-4xl mx-auto text-center">
                <FadeIn delay={0.1}>
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 transition-colors text-gray-900 dark:text-white">
                        {siteContent.contact.title.line1} <br />
                        <span className="italic transition-colors text-gray-500 dark:text-gray-500">{siteContent.contact.title.line2}</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-xl mb-12 max-w-2xl mx-auto transition-colors text-gray-600 dark:text-gray-400">
                        {siteContent.contact.description}
                    </p>
                </FadeIn>
                <FadeIn scale delay={0.4} className="inline-block">
                    <Button href={`mailto:${siteContent.global.email}`} size="lg">
                        {siteContent.contact.action.label}
                    </Button>
                </FadeIn>
                <FadeIn delay={0.6} className="mt-20 flex justify-center gap-8 [&_a]:text-gray-600 [&_a:hover]:text-gray-900 [&_a:hover]:bg-black/5 dark:[&_a]:text-gray-500 dark:[&_a:hover]:text-white dark:[&_a:hover]:bg-white/5">
                    {[
                        { icon: Github, href: siteContent.global.github, label: 'GitHub' },
                        { icon: Linkedin, href: siteContent.global.linkedin, label: 'LinkedIn' },
                        { icon: Globe, href: siteContent.global.website, label: 'Website' },
                        { icon: Mail, href: `mailto:${siteContent.global.email}`, label: 'Email' }
                    ].map(({ icon: Icon, href, label }) => (
                        <a key={label} href={href} target={label === 'Email' ? undefined : "_blank"} rel={label === 'Email' ? undefined : "noopener noreferrer"} className="transition-colors p-2 rounded-full" aria-label={label}>
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </FadeIn>
                <footer className="mt-32 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm transition-colors border-black/10 text-gray-500 dark:border-white/10 dark:text-gray-600">
                    <p>© {siteContent.global.copyrightYear} {siteContent.global.name}. All rights reserved.</p>
                </footer>
            </div>
        </section>
    )
}

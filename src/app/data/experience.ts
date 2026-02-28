export interface ExperienceItem {
    id: string
    period: string
    title: string
    company: string
    desc: string
}

export interface Stat {
    id: string
    value: string
    label: string
}

export const experience: ExperienceItem[] = [
    {
        id: 'goes-health',
        period: '02/2023 - Present',
        title: 'React Native Software Engineer',
        company: 'GOES Health',
        desc: 'Driving App Store rating from 4.1 to 4.6 and growing MAU by 16% through targeted UX enhancements.',
    },
    {
        id: 'reality-hack-mit',
        period: '05/2021 - 08/2024',
        title: 'Lead Software Engineer',
        company: 'Reality Hack at MIT',
        desc: 'Architected a full-stack event platform (Next.js, Django) for 1,000+ attendees. Led a team of 7 engineers.',
    },
    {
        id: 'general-assembly',
        period: '01/2023 - 02/2024',
        title: 'Software Engineer Instructional Associate',
        company: 'General Assembly',
        desc: 'Mentored 100+ aspiring engineers and reviewed 1,000+ code submissions. Achieved 92% student satisfaction.',
    },
]

export const stats: Stat[] = [
    { id: 'years', value: '04+', label: 'Years Exp.' },
    { id: 'integrations', value: '15+', label: 'Integrations' },
    { id: 'mentored', value: '1k+', label: 'Student Code Reviews' },
]

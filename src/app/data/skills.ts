export interface SkillGroupData {
    id: string
    title: string
    items: string[]
}

export const skills: SkillGroupData[] = [
    {
        id: 'languages',
        title: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'NoSQL', 'GraphQL', 'HTML', 'CSS'],
    },
    {
        id: 'frameworks',
        title: 'Frameworks',
        items: ['React', 'React Native', 'Next.js', 'Node.js', 'Django', 'Expo', 'Express', 'Tailwind CSS'],
    },
    {
        id: 'devops',
        title: 'DevOps & Tools',
        items: ['PostgreSQL', 'Firebase', 'Docker', 'CI/CD', 'Sanity CMS', 'AWS', 'GCP', 'Vercel'],
    },
    {
        id: 'architecture-ecosystem',
        title: 'Architecture & Ecosystem',
        items: ['React Query', 'Zustand', 'Zod', 'REST APIs', 'SSR', 'Stripe / Billing', 'GitHub Actions', 'Git'],
    },
]

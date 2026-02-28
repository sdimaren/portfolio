import { experience, stats } from './experience'
import { works, projects } from './projects'
import { skills } from './skills'

export const siteContent = {
    global: {
        name: "Santiago Dimaren",
        email: "santiago.dimaren@gmail.com",
        github: "https://github.com/sdimaren",
        linkedin: "https://linkedin.com/in/santiago-dimaren",
        website: "https://sdimaren.vercel.app",
        copyrightYear: new Date().getFullYear(),
    },
    navigation: [
        { label: "Work", href: "work" },
        { label: "About", href: "about" },
    ],
    hero: {
        badge: "Open to New Opportunities",
        heading: {
            line1: "Crafting",
            line2: "Exceptional",
            line3: "Products.",
        },
        description: "I build and ship scalable mobile and web applications that drive growth, maximize performance, and prioritize the user experience.",
        primaryAction: { label: "View Work", href: "work" },
        secondaryAction: { label: "Contact", href: "contact" },
    },
    work: {
        title: "Selected Work",
        description: "A showcase of products engineered to drive growth, maximize performance, and solve complex technical challenges.",
        action: { label: "View GitHub", href: "https://github.com/sdimaren" },
        items: works,
    },
    projects: {
        title: "Projects",
        description: "A collection of explorations in code, open-source utilities, and experiments with emerging technologies.",
        items: projects,
    },
    about: {
        title: {
            line1: "Full-stack engineer who ships",
            line2: "performance",
            line3: "and care.",
        },
        description: [
            "I’m a New York City-based engineer specializing in Zero-to-One builds and architecture. I bridge the gap between complex backend systems and intuitive mobile interfaces.",
            "I lead cross-functional builds, aligning engineering, design, and product teams around a shared vision. By combining rigorous system architecture with a deep focus on user-centric design, I build applications that scale reliably and delight users."
        ],
        stats: stats,
        experience: {
            title: "Experience",
            items: experience,
        },
        skills: {
            title: "Technical Skills",
            items: skills,
        }
    },
    contact: {
        title: {
            line1: "Let's build something",
            line2: "extraordinary.",
        },
        description: "Ready to partner with a product-led team to scale systems and drive growth. Let's chat.",
        action: { label: "Get in Touch" },
    },
}

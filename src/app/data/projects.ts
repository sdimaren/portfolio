export interface Project {
    id: string
    img: string
    title: string
    desc: string
    badge: string
    tags: string[]
    href?: string
}

export const works: Project[] = [
    {
        id: 'goes-health',
        img: '/goes-health.jpg',
        title: 'GOES Health',
        desc: 'Drove App Store rating to 4.6 in 12 months with targeted UX improvements. Grew MAU by 16% YoY and secured partnerships with Outside Magazine and AllTrails.',
        badge: 'Rating: 4.6★',
        tags: ['React Native', 'IAPHUB', 'Push Notifications'],
    },
    {
        id: 'general-assembly',
        img: '/general-assembly.webp',
        title: 'General Assembly',
        desc: 'Reviewed 1,000+ student code submissions. Boosted completion rates for 100+ aspiring engineers through targeted mentorship. Achieved 92% student satisfaction rate.',
        badge: 'Software Engineer IA',
        tags: ['Code Review', 'Mentorship', 'Full-stack'],
    },
    {
        id: 'music-bugle',
        img: '/music-bugle.png',
        title: 'The Music Bugle',
        desc: 'Full-stack rebuild of a media platform using Next.js 14 and Sanity CMS. Cut server response time by 92% and achieved 95+ Lighthouse scores across all pages.',
        badge: 'Performance: 95+',
        tags: ['Next.js', 'Sanity', 'Tailwind', 'Stripe'],
    },
    {
        id: 'reality-hack',
        img: '/mit-reality-hack-sign.webp',
        title: 'Reality Hack Event Portal',
        desc: 'Open-source event management system for MIT Reality Hack. Scaled for 1,000+ attendees and handled logistics for Fortune 500 sponsors.',
        badge: 'Users: 1,000+',
        tags: ['Next.js', 'Django', 'PostgreSQL', 'Docker'],
    }
]

export const projects: Project[] = [
    {
        id: 'ux-study',
        img: 'https://picsum.photos/seed/uxstudy/800/600',
        title: 'Text-To-Speech App UX',
        desc: 'User-Centered Design case study for a mobile text-to-speech app. Featured on Medium with over 32,000 reads and 3,600 likes from the design community.',
        badge: 'Reads: 32k+',
        tags: ['UX Design', 'Case Study', 'Prototyping'],
    },
    {
        id: 'sample-project',
        img: 'https://picsum.photos/seed/sample/800/600',
        title: 'WeatherReady',
        desc: 'WeatherReady is a responsive web application that provides real-time weather updates for any location worldwide. Built with React and OpenWeatherMap API, it features a clean, intuitive interface, hourly and daily forecasts, and interactive weather maps.',
        badge: 'In Progress',
        tags: ['Draft', 'Concept'],
    },
    {
        id: 'mapbox-api',
        img: 'https://picsum.photos/seed/sample/800/600',
        title: 'Mapbox API',
        desc: 'Explore the world with our interactive map application built with Mapbox API. Features include custom markers, routing, and location search.',
        badge: 'In Progress',
        tags: ['Draft', 'Concept'],
    }, {
        id: 'real-time-stock-market-dashboard',
        img: 'https://picsum.photos/seed/sample/800/600',
        title: 'Real-Time Stock Market Dashboard',
        desc: 'Real-time stock market dashboard using WebSocket for live data streaming. Features include live stock price updates, interactive charts, and portfolio tracking.',
        badge: 'In Progress',
        tags: ['Draft', 'Concept'],
    },
]

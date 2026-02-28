'use client'

import { usePageReady } from './hooks/usePageReady'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import ThemePicker from './components/theme/ThemePicker'
import HeroSection from './sections/HeroSection'
import WorkSection from './sections/WorkSection'
import ProjectsSection from './sections/ProjectsSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import { cn } from './utils/cn'

export default function Home() {
  usePageReady()


  return (
    <div className={cn("min-h-screen transition-colors duration-300", "text-gray-900 dark:text-white")}>
      <ScrollProgress />
      <ThemePicker />
      <Navbar />
      <main>
        <HeroSection />
        <WorkSection />
        {/* <ProjectsSection /> */}
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}

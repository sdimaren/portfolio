import './globals.css'
import type { Metadata } from 'next'
import Gradient from './components/theme/Gradient'
import { PreloaderProvider } from './components/providers/PreloaderProvider'
import ThemeSync from './components/theme/ThemeSync'

export const metadata: Metadata = {
  metadataBase: new URL('https://sdimaren.vercel.app'),
  title: 'Santiago Dimaren | Software Engineer',
  description: 'Portfolio of Santiago Dimaren, a Full-Stack Software Engineer specializing in scalable web and mobile applications.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'React Native', 'Next.js', 'Santiago Dimaren'],
  authors: [{ name: 'Santiago Dimaren' }],
  creator: 'Santiago Dimaren',
  openGraph: {
    title: 'Santiago Dimaren | Software Engineer',
    description: 'Portfolio of Santiago Dimaren, a Full-Stack Software Engineer specializing in scalable web and mobile applications.',
    url: 'https://sdimaren.vercel.app',
    siteName: 'Santiago Dimaren Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Dimaren | Software Engineer',
    description: 'Portfolio of Santiago Dimaren, a Full-Stack Software Engineer.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans relative w-full overflow-x-hidden min-h-screen antialiased text-gray-900 dark:text-gray-200 transition-colors duration-300">
        <PreloaderProvider>
          <ThemeSync />
          <div className="relative min-h-screen w-full">
            <Gradient />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </PreloaderProvider>
      </body>
    </html>
  )
}

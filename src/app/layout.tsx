import './globals.css'
import type { Metadata } from 'next'
import Gradient from './components/Gradient'
import { PreloaderProvider } from './components/PreloaderProvider'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative w-screen">
        <PreloaderProvider>
          <Gradient />
          {/* <canvas id="gradient-canvas" /> */}
          {children}
          <Footer />
        </PreloaderProvider>
      </body>
    </html>
  )
}

'use client'
import { usePreloader } from './PreloaderProvider';

export default function Footer() {
  const preloader = usePreloader();

  if (!preloader) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }

  const { theme } = preloader;

  const isWhiteTheme = theme === 'white';

  return (
    <div className={`relative text-right ${isWhiteTheme ? 'dark' : ''}`}>
      <div className="absolute bottom-[24px] right-[24px] flex flex-row">
        <div className="mt-2 mr-2">
          <a href="mailto:santiago.dimaren@gmail.com" className="text-gray-300 hover:text-gray-500">Contact</a>
        </div>
        <div className="mt-2 mr-2">
          <a target="_blank" href="https://linkedin.com/in/santiago-dimaren" className="text-gray-300 hover:text-gray-500">Linkedin</a>
        </div>
        <div className="mt-2 mr-2">
          <a target="_blank" href="https://github.com/sdimaren" className="text-gray-300 hover:text-gray-500">Github</a>
        </div>
      </div>
    </div>
  )
}

'use client'
import React, { useEffect } from 'react';
import { usePreloader } from './components/PreloaderProvider';
export default function Home() {
  const preloader = usePreloader();

  if (!preloader) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }

  const { onLoaded, onRedirect, redirect, theme, setTheme } = preloader;

  const handleTheme = (theme: string) => {
    onRedirect();
    setTimeout(() => {
      setTheme(theme);
    }, 600);
    setTimeout(() => {
      onLoaded();
    }, 600);

  }

  useEffect(() => {
    onLoaded();
  });

  const isWhiteTheme = theme === 'white';

  return (
    <div className={`relative h-screen p-4 text-gray-300 sm:px-6 pt-[48px] md:p-8 lg:p-12 max-w-7xl ${isWhiteTheme ? 'dark' : ''}`}>
      <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-interRegular sm:px-4">Santiago Dimaren</h1>
      <h2 className="mb-3 text-lg sm:text-xl font-interRegular sm:px-4">Developer & Designer</h2>
      <nav className="mb-12 sm:px-4">
        <ul className="space-y-3">
          <li><a onClick={() => {
            if (onRedirect && redirect) {
              onRedirect();
              redirect('/about');
            }
          }} className="mb-2 text-gray-300 cursor-pointer hover:text-gray-500">Info</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-500">Projects (coming soon)</a></li>
          <span className="mr-4 text-gray-300 cursor-pointer blend">Themes: </span>
          <button
            className="mr-4 text-gray-300 cursor-pointer blend hover:text-gray-500"
            onClick={() => handleTheme('blue')}> Blue </button>
          <button
            className="mr-4 text-gray-300 cursor-pointer blend hover:text-gray-500"
            onClick={() => handleTheme('gold')}> Gold </button>
          <button
            className="mr-4 text-gray-300 cursor-pointer blend hover:text-gray-500"
            onClick={() => handleTheme('white')}> White </button>
          <button
            className="mr-4 text-gray-300 cursor-pointer blend hover:text-gray-500"
            onClick={() => handleTheme('black')}> Black </button>
        </ul>
      </nav>
    </div >
  )
}

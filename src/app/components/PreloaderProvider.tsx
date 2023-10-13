'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderContextProps {
  onLoaded: () => gsap.core.Tween;
  onRedirect: () => gsap.core.Tween;
  redirect?: (href: string) => NodeJS.Timeout;
  theme: string;
  setTheme: (theme: string) => void;
}

const getGradientColor = (theme: string) => {
  const el = document.getElementById(`gradient-${theme}`);
  if (!el) return null;
  return getComputedStyle(el).getPropertyValue('--gradient-color-3');
};

const PreloaderContext = createContext<PreloaderContextProps | null>(null);

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('black');

  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme(() => localStorage.getItem('theme') || 'black');
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('theme', theme);
    }

    const color = getGradientColor(theme);
    if (color && preloaderRef.current) {
      preloaderRef.current.style.backgroundColor = color;

      const body = document.body;
      body.style.backgroundColor = color;
    }

  }, [theme]);

  const onLoaded = () =>
    gsap.to(preloaderRef.current, { opacity: 0, duration: 1.5 });

  const onRedirect = () =>
    gsap.to(preloaderRef.current, { opacity: 1, duration: .5 });

  const redirect = (href: string) =>
    setTimeout(() => {
      if (window) window.location.href = href;
    }, 200);

  return (
    <PreloaderContext.Provider value={{ onLoaded, onRedirect, redirect, theme, setTheme }}>
      <div ref={preloaderRef} className="fixed inset-0 z-50 pointer-events-none" id="preloader"></div>
      {children}
    </PreloaderContext.Provider>
  );


};

export const usePreloader = () => {
  return useContext(PreloaderContext);
};
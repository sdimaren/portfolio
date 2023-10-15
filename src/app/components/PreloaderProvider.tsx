'use client'

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderContextProps {
  onLoaded: () => gsap.core.Tween;
  onRedirect: () => gsap.core.Tween | void;
  redirect?: (href: string) => NodeJS.Timeout;
  theme: string;
  setTheme: (theme: string) => void;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
}

const getGradientColor = (theme: string) => {
  const el = document.getElementById(`gradient-${theme}`);
  if (!el) return null;
  return getComputedStyle(el).getPropertyValue('--gradient-color-3');
};

const PreloaderContext = createContext<PreloaderContextProps | null>(null);

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('white');
  const [loaded, setLoaded] = useState(false);

  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme(() => localStorage.getItem('theme') || 'white');
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('theme', theme);
    }

    const color = getGradientColor(theme) || '';
    if (color && preloaderRef.current) {
      preloaderRef.current.style.backgroundColor = color;

      const body = document.body;
      body.style.backgroundColor = color;
    }
    setLoaded(true);

  }, [theme]);

  const onLoaded = () =>
    gsap.to(preloaderRef.current, { opacity: 0, duration: 1.5 });


  const onRedirect = () =>
    gsap.to(preloaderRef.current, { opacity: 1, duration: 1 });

  return (
    <PreloaderContext.Provider value={{ onLoaded, onRedirect, theme, setTheme, loaded, setLoaded }}>
      <div ref={preloaderRef} className={`bg-[#e8e5e5] fixed inset-0 z-50 pointer-events-none`} id="preloader"></div>
      {children}
    </PreloaderContext.Provider>
  );


};

export const usePreloader = () => {
  return useContext(PreloaderContext);
};
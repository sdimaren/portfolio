'use client'
import React, { useEffect } from 'react';
import { usePreloader } from '../components/PreloaderProvider';
import Link from 'next/link';

export default function About() {
  const preloader = usePreloader();

  if (!preloader) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }

  const { onLoaded, onRedirect, redirect, theme } = preloader;

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
            if (onRedirect && redirect && window) {
              onRedirect();
              redirect('/');
            }
          }} className="text-gray-300 cursor-pointer hover:text-gray-500">Home</a></li>
          <li><a href="#" className="text-gray-300 cursor-pointer hover:text-gray-500">Projects (coming soon)</a></li>
        </ul>
      </nav>
      <div className="w-full md:w-[880px] sm:px-4">
        <div className="text-sm text-gray-300 sm:text-base md:text-lg blend">
          With three years of professional experience in software engineering,
          I&apos;ve honed my skills in full-stack, mobile development, and UX/UI design.
          My experience with organizations like
          {` `}<a target="_blank" href="https://generalassemb.ly/instructors/santiago-dimaren/29533" className='z-10 text-gray-300 underline cursor-pointer hover:text-gray-500 mix-blend-difference'>General Assembly</a>,
          {` `}<a target="_blank" href="https://www.mitrealityhack.com/" className='text-gray-300 underline cursor-pointer hover:text-gray-500 mix-blend-difference'>MIT Reality Hack</a>,
          and <a target="_blank" href="https://www.goes.health/" className='text-gray-300 underline cursor-pointer hover:text-gray-500 mix-blend-difference'>Goes</a>{` `}
          have not only enhanced my technical knowledge but also fostered my
          leadership skills, managing proficient teams to uphold high project standards.
          <br /><br />
          I am proficient in HTML5, CSS, JavaScript/Typescript, and Python, with practical
          experience in utilizing frameworks and libraries such as React, Angular 6+,
          Django, and Next.js. At General Assembly, I had the opportunity to mentor early
          engineers, ensuring they are equipped with the knowledge and skills required to
          succeed in this industry. My contributions to MIT Reality Hack as a DevOps Lead
          and involvement in full-stack development and UX/UI design showcased my ability
          to enhance team efficiency and project productivity.
        </div>
      </div>
    </div>
  )
}

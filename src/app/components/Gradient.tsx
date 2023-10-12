'use client'
import { useEffect } from 'react';
import { Gradient as GradientUtil } from '../utils/Gradient';
import { usePreloader } from './PreloaderProvider';

interface Props {
}

const Gradient: React.FC<Props> = () => {
  const preloader = usePreloader();

  if (!preloader) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }

  const { theme } = preloader;

  useEffect(() => {
    const gradient = new GradientUtil();

    console.log(`gradient-${theme}`);

    if (theme) {
      console.log('theme: ', theme);
      gradient.initGradient(`#gradient-${theme}`);
    } else {
      gradient.initGradient(`#gradient-canvas`);
    }
  }, [theme]);

  return <canvas id={`gradient-${theme || 'canvas'}`} />;
};

export default Gradient;

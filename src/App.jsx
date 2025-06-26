import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Grid from './homepage/Grid';
import Header from './homepage/Header';
import Navbar from './homepage/Navbar';
import ProjectGrid from './homepage/ProjectCard';
import About from './homepage/About';
import Workwithus from './homepage/Workwithus';
import MusicOverlay from './MusicOverlay';

export default function App() {
  // 🎯 Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,         // scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-black text-white">
      <MusicOverlay />
      <Navbar />

      {/* Sections - add ids if needed */}
      <Header />
      <ProjectGrid />
      <About />
      <Workwithus />
   
    </div>
  );
}

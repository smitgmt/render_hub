import React from 'react';
import Header from './homepage/Header';
import Navbar from './homepage/Navbar';
import ProjectGrid from './homepage/ProjectCard';
import About from './homepage/About';
import Workwithus from './homepage/Workwithus';
import MusicOverlay from './MusicOverlay';

export default function Homepage() {
  return (
    <div>
      <MusicOverlay />
      <Navbar />
      <Header />
      <ProjectGrid />
      <About />
      <Workwithus />
    </div>
  );
}

import React from 'react';

const About = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/aboutus.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-start h-full">
        <div className="w-full px-4 md:px-10">
          <div className="max-w-7xl mx-auto text-white">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Why Tech Unreal?</h2>
              <p className="text-lg mb-6 leading-relaxed">
                At Tech Unreal, we go beyond rendering — we transform how your audience sees your vision.
                Our strategic, high-impact 3D content is crafted to elevate design, influence decisions, and
                accelerate outcomes. Every frame is intentional, blending creativity with precision to blur the
                line between reality and simulation.
              </p>
              <a
                href="/about"
                className="inline-flex items-center text-white font-semibold hover:underline transition"
              >
                Read More
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

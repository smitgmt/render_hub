import React from "react";
import "../index.css";


function Header() {
  return (
    <>
      {/* HERO VIDEO SECTION */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0 scale-110"
        >
          <source src="/videos/1.0000_1.mp4" type="video/mp4" />
          <p className="text-white">Video not supported</p>
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        

        {/* Hero Text */}
        <div className="absolute bottom-8 left-8 z-10 text-white text-1xl font-bold">
          
        </div>
      </div>

    </>
  );
}

export default Header;

import React from "react";
import Navbar from "./Navbar";

const images = [
  { src: "/images/1.png", video: "/videos/1.mp4", ratio: "aspect-[4/6]", colSpan: "col-span-1" },
  { src: "/images/2.png", video: "/videos/2.mp4", ratio: "aspect-[4/3]", colSpan: "col-span-2" },
  { src: "/images/3.png", video: "/videos/3.mp4", ratio: "aspect-[4/6]", colSpan: "col-span-1" },
  { src: "/images/4.png", video: "/videos/4.mp4", ratio: "aspect-[4/3]", colSpan: "col-span-2" },
  { src: "/images/5.png", video: "/videos/5.mp4", ratio: "aspect-[4/6]", colSpan: "col-span-1" },
  { src: "/images/6.png", video: "/videos/6.mp4", ratio: "aspect-[4/6]", colSpan: "col-span-1" },
  { src: "/images/7.png", video: "/videos/7.mp4", ratio: "aspect-[4/6]", colSpan: "col-span-1" },
  { src: "/images/8.png", video: "/videos/8.mp4", ratio: "aspect-[4/3]", colSpan: "col-span-2" },
  { src: "/images/9.png", video: "/videos/9.mp4", ratio: "aspect-[4/6]", colSpan: "col-span-1" },
];

export default function Grid() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* === Intro Hero Video Section === */}
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover scale-110 z-0"
        >
          <source src="/videos/1.0000_1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-0" />


        <Navbar />

        {/* Hero Heading */}
        <div className="absolute bottom-30 left-30 z-10 text-white text-5xl font-bold">
          Visualise the Unreal.
        </div>
      </div>

      {/* === Main Content Wrapper === */}
      <div className="w-full px-4 md:px-10">
        <div className="max-w-7xl mx-auto py-10">

          {/* WHAT WE DO SECTION */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between my-10">
            <h2 className="text-xl font-bold uppercase mb-4  md:w-1/4">
              What We Do
            </h2>
            <p className="text-sm leading-relaxed mb-15 md:w-2/4">
              We specialise in architectural CGI, cinematic animations, and interactive visuals that shape the way our clients present the future.<br />
              Our expertise lies in creating scenes that not only look real — they feel visionary.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-10">
            {images.map((img, index) => (
              <div
                key={index}
                className={`group relative ${img.colSpan} ${img.ratio} overflow-hidden`}
              >
                <img
                  src={img.src}
                  alt={`work-${index}`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <video
                  src={img.video}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          {/* SEE MORE BUTTON */}
          <div className="text-right mt-6">
            <button className="text-white text-sm px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
              See more works →
            </button>
          </div>

          {/* OUR PROPOSAL SECTION */}
          <div className="mt-24 md:flex md:items-start md:gap-10">
            <h2 className="text-xl font-semibold md:w-1/4 mb-4 md:mb-0">
              Our Proposal
            </h2>
            <div className="md:w-3/4">
              <p className="text-3xl md:text-4xl font-light leading-tight mb-8">
                Through our resourceful and innovative team of artists, Brick
                offers the capacity and competence to deliver exceptional high-end
                artistic visual solutions to our clients in large scale prestige
                projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black text-sm px-6 py-2 rounded transition duration-300 hover:bg-gray-300">
                  Contact us →
                </button>
                <button className="text-white text-sm border-b border-white hover:text-gray-300 transition duration-300">
                  More about us →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Full-Width Case Study Section (video background) === */}
      <div className="relative w-full min-h-screen mt-24 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/file_4.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

        <div className="relative z-20 flex flex-col justify-end items-start min-h-screen p-8 md:p-16">
          <p className="text-sm mb-2 text-white opacity-80">
            BIG – Bjarke Ingels Group
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mindfulness City
          </h1>
          <button className="mt-2 text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition duration-300">
            Read this case study →
          </button>
        </div>
      </div>
    </div>
  );
}

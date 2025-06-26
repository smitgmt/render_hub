import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Architecture',
    video: '/videos/architecture.mp4',
    thumbnail: '/images/architecture.png',
  },
  {
    title: 'Automation',
    video: '/videos/realestate.mp4',
    thumbnail: '/images/realestate.png',
  },
  {
    title: 'Product',
    video: '/videos/product.mp4',
    thumbnail: '/images/product.png',
  },
  {
    title: 'Industrial',
    video: '/videos/media.mp4',
    thumbnail: '/images/media.png',
  },
];

function ProjectCard({ video, thumbnail, title }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div
        className="relative w-full aspect-[4/6] overflow-hidden group rounded-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Static Image */}
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-full object-cover absolute inset-0 z-0 transform transition-transform duration-700 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {/* Hover Video */}
        <video
          src={video}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <p className="text-white text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            See more →
          </p>
        </div>
      </div>

      {/* Title */}
      <p className="mt-3 text-white font-semibold text-center sm:text-left">{title}</p>
    </div>
  );
}

export default function ProjectGrid() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Text Intro */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 gap-8">
          <h2 className="text-3xl font-bold md:w-1/4">Who we are</h2>
          <p className="text-lg leading-relaxed md:w-3/4 text-gray-200">
            We are Tech Unreal — a premium 3D visualisation studio based in India, delivering
            photorealistic rendering services for architects, product designers, industrialists, and
            forward-thinking brands.
            <br /><br />
            What sets us apart isn’t just realism — it’s the ability to strategically visualise ideas before
            they’re built, enabling our clients to communicate, pitch, and present with clarity and conviction.
            <br /><br />
            Whether you're launching a luxury real estate development, unveiling a concept vehicle, or
            designing a smart industrial facility — Tech Unreal renders it with precision, emotion, and
            impact.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <ProjectCard key={service.title} {...service} />
          ))}
        </div>

        {/* See All Button */}
        <div className="mt-12">
          <Link
            to="/#"
            className="text-white opacity-60 hover:opacity-100 text-sm flex items-center gap-2 group"
          >
            See all services
            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

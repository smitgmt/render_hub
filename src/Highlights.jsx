import React from 'react';

const highlights = [
  {
    image: "/CHAOS_Vantage_Trailer_.jpg",
    title: "Chaos Vantage 2 trailer",
    client: "Chaos Group",
  },
  {
    image: "/Cover.jpg",
    title: "Google Meet Backgrounds II",
    client: "Google Meets",
  },
  {
    image: "/pulze_product_video.jpg",
    title: "Pulze Commercial",
    client: "Pulze",
  },
  {
    image: "/RUSTIC-CABIN-.jpg",
    title: "Stories of Zsófi Barabás",
    client: "Zsófi Barabás",
  },
];

export default function Highlights() {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Highlights</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl text-center mx-auto">
          A showcase of diverse, successful projects reflecting the range and depth of our visual storytelling and technical expertise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="rounded w-full h-[220px] object-cover mb-2"
              />
              <h3 className="font-semibold text-center">{item.title}</h3>
              <p className="text-sm text-gray-400 text-center">{item.client}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-blue-400 hover:text-white text-sm inline-flex items-center"
          >
            More works <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

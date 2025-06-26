import React, { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const hideTimeoutRef = useRef(null);

  const serviceItems = [
    "Architecture",
    "Real Estate",
    "Product & Brand",
    "Media & Entertainment",
    "Brick Academy",
    "Software Solution",
    "Training for Companies",
  ];

  const aboutItems = [
    "Our Story",
    "Leadership",
    "Partnerships",
    "Sustainability",
  ];

  const careerItems = [
    "Our Story",
    "Leadership",
    "Partnerships",

  ];



  const handleMouseEnter = (menu) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setActiveSubMenu(menu);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 100); // Delay to allow hover
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 w-full z-50 px-15">
        <div className="flex justify-between items-center p-15 bg-opacity-60">
          {/* Logo on the left */}
          <img
            src="/logo/TU White.png"
            alt="Logo"
            className="w-36 h-auto opacity-100"
          />

          {/* Hamburger button on the right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
            />
            <span
              className={`h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
            />
          </button>
        </div>
      </div>


      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col md:flex-row px-10 py-5 overflow-y-auto P-6">

          {/* Left Section */}
          <div className="flex-1 flex flex-col justify-start">
            <div className="mt-20 space-y-6 text-3xl p-6 font-semibold relative">
              <p className="hover:text-blue-400 cursor-pointer w-fit">Works</p>

              {/* SERVICES */}
              <div
                className="relative w-fit group"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="hover:text-blue-400">Services</p>
                  <span className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </div>
                {activeSubMenu === "services" && (
                  <div className="absolute top-0 left-full ml-4  p-4   z-50 space-y-3 min-w-[220px] ">
                    {serviceItems.map((item, index) => (
                      <p
                        key={index}
                        className="text-gray-300 hover:text-white text-base cursor-pointer"
                        onClick={() => alert(`Clicked on ${item}`)}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* ABOUT US */}
              <div
                className="relative w-fit group"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="hover:text-blue-400">About Us</p>
                  <span className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </div>
                {activeSubMenu === "about" && (
                  <div className="absolute top-0 left-full ml-4 p-4  z-50 space-y-3 min-w-[200px] ">
                    {aboutItems.map((item, index) => (
                      <p
                        key={index}
                        className="text-gray-300 hover:text-white text-base cursor-pointer"
                        onClick={() => alert(`Clicked on ${item}`)}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>


              {/* CAREER SUBMENU  */}
              <div
                className="relative w-fit group"
                onMouseEnter={() => handleMouseEnter("career")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="hover:text-blue-400">career</p>
                  <span className="text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </div>
                {activeSubMenu === "career" && (
                  <div className="absolute top-0 left-full ml-4  p-4  z-50 space-y-3 min-w-[220px] ">
                    {careerItems.map((item, index) => (
                      <p
                        key={index}
                        className="text-gray-300 hover:text-white text-base cursor-pointer"
                        onClick={() => alert(`Clicked on ${item}`)}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <p className="hover:text-blue-400 cursor-pointer w-fit">Academy</p>
              <p className="hover:text-blue-400 cursor-pointer w-fit">Contact</p>
            </div>

            {/* Info Columns */}
            <div className="grid md:grid-cols-3 gap-4 text-white text-sm mt-14 bg-opacity-50 p-6 rounded-lg w-fit">
              {[
                {
                  title: "General questions",
                  text: "If you have a question or comment, please reach out:",
                  email: "info@brickvisual.com",
                },
                {
                  title: "Press inquiries",
                  text: "For media inquiries and interview requests:",
                  email: "press@brickvisual.com",
                },
                {
                  title: "Join the team",
                  text: "We welcome talents from all around the world.",
                  email: "Go to job form",
                },
              ].map((info, idx) => (
                <div key={idx} className="w-80">
                  <div className="mb-2 pt-3 border-t border-gray-500 w-10" />
                  <p className="font-semibold">{info.title}</p>
                  <p className="pt-3 w-45">{info.text}</p>
                  <p className="font-semibold mt-1 hover:underline">{info.email}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 mt-110 md:ml-10 max-w-80 text-right text-gray-300">
            <div className="mb-6 border-t border-gray-500 w-10 mx-70" />
            <p className="text-3xl text-white font-semibold mb-4">
              Ready to discuss your next project?
            </p>
            <p className="text-sm mb-4">
              Preparing the groundwork for a rewarding business relationship and a successful project begins here.
              Tell us about your unique project by answering a couple of questions briefly.
            </p>
            <button className="text-white font-semibold hover:font-bold">
              Request a Proposal →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm px-6 py-3 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-2 md:mb-0 text-center md:text-left">
        © 2025 Tech Unreal Studio &nbsp;
        <a href="#" className="hover:text-white underline">Privacy Policy</a> ·
        <a href="#" className="hover:text-white underline"> Terms & Conditions</a> &nbsp;
        Ahmedabad, India 
      </div>

      <div className="flex items-center flex-wrap justify-center md:justify-end gap-3 text-center">
        <a href="mailto:info@brickvisual.com" className="hover:text-white underline">
          info@techunreal.in
        </a>
        <span>+91 99049 65592</span>
        <div className="flex gap-5 ml-2 text-lg p-3">
          <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
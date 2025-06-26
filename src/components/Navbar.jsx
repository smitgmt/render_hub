import { useState } from "react";
import '../index.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0  left-0 w-full flex justify-between items-center p-4 z-10">
      <div className="text-blue-600 m-7  text-3xl">■</div>

      <div className="relative mr-10">
        <button
          className="text-white text-2xl opacity-65"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg text-black">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100">About</li>
              <li className="px-4 py-2 hover:bg-gray-100">Services</li>
              <li className="px-4 py-2 hover:bg-gray-100">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

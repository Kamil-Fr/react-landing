import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b bg-white/70">
      <div className="max-w-6xl mx-auto px-4 shadow-md">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold cursor-pointer">DevStudio</h1>

          {/*Desktop Menu*/}
          <div className="hidden md:flex gap-8">
            <a
              href="#"
              className="px-2 py-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="px-2 py-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="px-2 py-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="px-2 py-1 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1"
          >
            <span
              className={`w-6 h-0.5 bg-black transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"}`}
        >
          <a
            href="#"
            className="block py-2 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 hover:text-blue-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

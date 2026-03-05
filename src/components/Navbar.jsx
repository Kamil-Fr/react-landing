import { useState } from "react";

 function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <h1 className="text-xl font-bold">
          DevStudio
          </h1>

          {/*Desktop Menu*/}
          <div className="hidden md:flex gap-8">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(prev => !prev)} className="text-2xl md:hidden">
           { isOpen ? "✕" : "☰" }
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-4" : "max-h-0"}`}>
        
          <a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="block py-2" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a>
        </div>      
            
      </div>
    </nav>
  );
}

export default Navbar;

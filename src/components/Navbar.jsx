import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white py-10 px-6 md:px-12 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="BridgeAi Logo" className="w-16 h-16" />
          <span className="text-2xl font-extrabold text-[#8B3DFF] tracking-tight">
            BridgeAi
          </span>
        </div>

        {/* Centered Desktop Nav Links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-gray-700 font-medium">
          <a href="#services" className="hover:text-[#8B3DFF] transition">Services</a>
          <a href="#Data" className="hover:text-[#8B3DFF] transition">Solutions</a>
          <a href="#Vision & Mission" className="hover:text-[#8B3DFF] transition">Vision & Mission</a>
          <a href="#" className="hover:text-[#8B3DFF] transition">About</a>
          <a href="#" className="hover:text-[#8B3DFF] transition">Blog</a>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/916374642981"
            className="block bg-gradient-to-r from-purple-700 to-blue-500 text-white text-center py-2 px-4 rounded-lg hover:from-purple-800 hover:to-blue-600 transition"
          >
            Contact us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#8B3DFF] focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-4 w-64 bg-white shadow-lg py-4 px-6 mt-2 rounded-xl space-y-3 text-gray-800 text-sm font-medium transition-all duration-300 md:hidden">
          <a href="#services" className="block text-left hover:text-[#8B3DFF]">Services</a>
          <a href="#Data" className="block text-left hover:text-[#8B3DFF]">Solutions</a>
          <a href="#Vision & Mission" className="block text-left hover:text-[#8B3DFF]">Vision & Mission</a>
          <a href="#" className="block text-left hover:text-[#8B3DFF]">About</a>
          <a href="#" className="block text-left hover:text-[#8B3DFF]">Blog</a>

          {/* Proper spacing for Contact button */}
          <div className="pt-2">
            <a
              href="https://wa.me/916374642981"
              className="block text-center bg-gradient-to-r from-purple-700 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-800 hover:to-blue-600 transition text-sm"
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
 
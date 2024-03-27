import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent w-full z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center text-black">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" /> {/* Replace with your logo */}
          <span className="text-xl font-bold">Navbar</span> {/* Increase font size here */}
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-lg text-black">Link 1</a> {/* Increase font size here */}
          <a href="#" className="text-lg text-black">Link 2</a> {/* Increase font size here */}
          <a href="#" className="text-lg text-black">Link 3</a> {/* Increase font size here */}
        </div>

        {/* Hamburger menu icon (for mobile) */}
        <div className="md:hidden">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

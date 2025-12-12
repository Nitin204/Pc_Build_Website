import React, { useEffect, useState } from "react";
import fusionGamingLogo from "../assets/FG_Logo.webp";
// Importing Menu and X icons from Lucide for better control, though ☰ is currently used.
import { Menu, X, ShoppingCart, User } from 'lucide-react'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // 1. State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll is beyond 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClasses =
    "text-white hover:text-red-500 transition duration-300 font-medium";

  return (
    <nav
      className={`w-full py-4 px-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent" // Use bg-transparent or bg-none for clarity
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo and Brand Name (Left Side) */}
        <a href="/" className="flex items-center space-x-3">
            <img 
                src={fusionGamingLogo} 
                alt="Fusion Gaming Logo" 
                className="h-8 md:h-12" // Adjusted height for better visibility/desktop look
            />
           
        </a>

        {/* 2. Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-lg">
          <a href="#build" className={linkClasses}>Build Your Own PC</a>
          <a href="#prebuilts" className={linkClasses}>Pre-Builts</a>
          <a href="#addons" className={linkClasses}>Add-Ons</a>
          <a href="#support" className={linkClasses}>Support</a>
          
          {/* Icons moved to the correct place within the desktop menu structure */}
          <div className="flex items-center space-x-6 text-white text-xl">
            {/* Cart Icon */}
            <a href="#cart" className="hover:text-red-500 transition duration-300">
              <i className="fa-solid fa-shopping-cart"></i>
            </a>
            {/* User Icon */}
            <a href="#account" className="hover:text-red-500 transition duration-300">
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>

        {/* 3. Mobile Icons (Visible on mobile/small screens) */}
        <div className="md:hidden flex items-center space-x-6 text-white text-xl">

          {/* Cart Icon */}
          <a href="#cart" className="hover:text-red-500 transition duration-300">
            <i className="fa-solid fa-shopping-cart"></i>
          </a>

          {/* User Icon */}
          <a href="#account" className="hover:text-red-500 transition duration-300">
            <i className="fa-solid fa-user"></i>
          </a>

          {/* Hamburger Menu (Mobile only) */}
          {/* 4. Use onClick handler to toggle menu visibility */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-2xl hover:text-red-500" 
            aria-label="Toggle menu"
          >
            {/* Display X icon when menu is open, Hamburger when closed */}
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* 5. Mobile Navigation Dropdown */}
      {/* Conditionally rendered or styled based on isMenuOpen state */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-4 border-t border-gray-800' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-3 px-6 text-base font-semibold">
          <a href="#build" className={linkClasses} onClick={toggleMenu}>Build Your Own PC</a>
          <a href="#prebuilts" className={linkClasses} onClick={toggleMenu}>Pre-Builts</a>
          <a href="#addons" className={linkClasses} onClick={toggleMenu}>Add-Ons</a>
          <a href="#support" className={linkClasses} onClick={toggleMenu}>Support</a>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
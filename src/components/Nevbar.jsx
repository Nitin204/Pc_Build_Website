import React, { useEffect, useState } from "react";
import fusionGamingLogo from "../assets/FG_Logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClasses =
    "text-white hover:text-red-500 transition duration-300 font-medium";

  return (
    <nav
      className={`w-full py-4 px-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-none"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={fusionGamingLogo}
            alt="Fusion Gaming Logo"
            className="h-8 md:h-17"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-lg">
          <a href="#build" className={linkClasses}>Build Your Own PC</a>
          <a href="#prebuilts" className={linkClasses}>Pre-Builts</a>
          <a href="#addons" className={linkClasses}>Add-Ons</a>
          <a href="#support" className={linkClasses}>Support</a>
           <div className="flex items-center space-x-6 text-white text-xl">

          {/* Cart */}
          <a href="#cart" className="hover:text-red-500 transition duration-300">
            <i className="fa-solid fa-shopping-cart"></i>
          </a>

          {/* User */}
          <a href="#account" className="hover:text-red-500 transition duration-300">
            <i className="fa-solid fa-user"></i>
          </a>

          {/* Hamburger Menu (Mobile only) */}
          <button className="md:hidden text-2xl hover:text-red-500">
            ☰
          </button>

        </div>
  
        </div>

        {/* Icons Section (Show always on right side) */}
        <div className="md:hidden flex items-center space-x-6 text-white text-xl">

          {/* Cart */}
          <a href="#cart" className="hover:text-red-500 transition duration-300">
            <i className="fa-solid fa-shopping-cart"></i>
          </a>

          {/* User */}
          <a href="#account" className="hover:text-red-500 transition duration-300">
            <i className="fa-solid fa-user"></i>
          </a>

          {/* Hamburger Menu (Mobile only) */}
          <button className="md:hidden text-2xl hover:text-red-500">
            ☰
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

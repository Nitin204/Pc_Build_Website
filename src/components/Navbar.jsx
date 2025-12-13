import React, { useEffect, useState } from "react";
import fusionGamingLogo from "../assets/FG_Logo.webp";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClasses =
    "text-white hover:text-red-500 transition duration-300 font-medium";

  return (
    <nav
      className={`w-full py-4 px-6 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={fusionGamingLogo}
            alt="Fusion Gaming Logo"
            className="h-8 md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-bold text-lg">
          <Link to="/buildpc" className={linkClasses}>Build Your Own PC</Link>
          <Link to="/prebuilts" className={linkClasses}>Pre-Builts</Link>
          <Link to="/addons" className={linkClasses}>Add-Ons</Link>
          <Link to="/support" className={linkClasses}>Support</Link>

          <div className="flex items-center space-x-6 text-white text-xl">
            <Link to="/account" className="hover:text-red-500">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/cart" className="hover:text-red-500">
              <i className="fa-solid fa-shopping-cart"></i>
            </Link>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-6 text-white text-xl">
          <Link to="/cart" className="hover:text-red-500">
            <i className="fa-solid fa-shopping-cart"></i>
          </Link>

          <Link to="/account" className="hover:text-red-500">
            <i className="fa-solid fa-user"></i>
          </Link>

          <button onClick={toggleMenu} className="md:hidden text-2xl hover:text-red-500">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen py-4 border-t border-gray-800" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6 text-base font-semibold">
          <Link to="/buildpc" className={linkClasses} onClick={toggleMenu}>Build Your Own PC</Link>
          <Link to="/prebuilts" className={linkClasses} onClick={toggleMenu}>Pre-Builts</Link>
          <Link to="/addons" className={linkClasses} onClick={toggleMenu}>Add-Ons</Link>
          <Link to="/support" className={linkClasses} onClick={toggleMenu}>Support</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

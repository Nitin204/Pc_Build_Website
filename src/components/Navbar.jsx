import React, { useEffect, useState } from "react";
import fusionGamingLogo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
    };
    
    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
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
            className="h-12  object-contain md:h-13 "
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-extrabold text-lg">
          <Link to="/buildpc" className={linkClasses}>Custom PC build</Link>
          <Link to="/prebuilts" className={linkClasses}>Pre-assembled PCs</Link>
          <Link to="/addons" className={linkClasses}> Accessories</Link>
          <Link to="/support" className={linkClasses}>services</Link>

          <div className="flex items-center space-x-6 text-white text-xl">
            <Link to="/account" className="hover:text-red-500">
              <i className="fa-solid fa-user"></i>
            </Link>
            <Link to="/cart" className="hover:text-red-500 relative">
              <i className="fa-solid fa-shopping-cart"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-6 text-white text-xl">
          <Link to="/cart" className="hover:text-red-500 relative">
            <i className="fa-solid fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
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
          <Link to="/buildpc" className={linkClasses} onClick={toggleMenu}>Custom PC you build</Link>
          <Link to="/prebuilts" className={linkClasses} onClick={toggleMenu}>Pre-assembled PCs</Link>
          <Link to="/addons" className={linkClasses} onClick={toggleMenu}>Extras and accessories</Link>
          <Link to="/support" className={linkClasses} onClick={toggleMenu}>Help/services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

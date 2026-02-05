import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Github } from "lucide-react";
import Logo from "../assets/logos/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all
      ${
        isScrolled
          ? "bg-transparent backdrop-blur border-b border-white/10"
          : "bg-gradient-to-b from-black to-black/95 border-b border-white/30"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-7" alt="logo" />
            <span className="text-white font-base tracking-widest">
              SMARTCOACH<span className="text-purple-500 font-semibold">360</span>
            </span>
          </div>

          {/*
          <nav className="hidden lg:flex items-center gap-6">
            
          </nav>
          */}

          
          <div className="hidden lg:flex items-center gap-3">

           
            <button className="px-4 py-1.5 rounded-md text-sm text-gray-300
                               border border-white/10 hover:bg-white/5 transition">
              Contact Us
            </button>

          
            <button className="px-4 py-1 rounded-md text-sm font-medium text-white
                               bg-purple-700 hover:bg-purple-700 transition">
              Book a Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={22} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {/*
              Mobile navigation will be added later
            */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

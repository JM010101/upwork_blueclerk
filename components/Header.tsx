"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Builders", href: "/builders" },
    { name: "Contractors", href: "/contractors" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-soft py-3 border-b border-neutral-light/50"
          : "bg-white/95 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Image
                src="/collar_logo.jpg"
                alt="BlueClerk Logo"
                width={44}
                height={44}
                className="rounded-lg transition-transform group-hover:scale-105"
              />
            </div>
            <span className="text-2xl font-bold text-primary-dark group-hover:text-primary transition-colors">
              BlueClerk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? "text-primary bg-primary-light/30"
                      : "text-neutral-dark hover:text-primary hover:bg-primary-light/10"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
                  )}
                </Link>
              );
            })}
            <Link
              href="/signup"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-all font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-primary-light/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-neutral-dark"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 pb-4 space-y-2 border-t border-neutral-light/50 pt-4 overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                      isActive
                        ? "text-primary bg-primary-light/30"
                        : "text-neutral-dark hover:text-primary hover:bg-primary-light/10"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/signup"
                className="block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold text-center mt-4 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;

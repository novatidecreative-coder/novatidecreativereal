"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Novatide Creative
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link
                      href="/ai-receptionist"
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      AI Receptionist
                    </Link>
                    <Link
                      href="/website-design"
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                    >
                      Website Design
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/#industries" className="text-gray-300 hover:text-white transition-colors">
              Industries
            </Link>
            <Link href="/#process" className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            
            <Link
              href="/book-demo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm px-4">Services</p>
                  <Link
                    href="/ai-receptionist"
                    className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Receptionist
                  </Link>
                  <Link
                    href="/website-design"
                    className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Website Design
                  </Link>
                </div>
                
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/#industries"
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  href="/#process"
                  className="block px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                
                <Link
                  href="/book-demo"
                  className="block mx-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

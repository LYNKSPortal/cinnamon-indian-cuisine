'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import FadeIn from './FadeIn'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <header className="bg-[#6F1E2D] text-white" role="banner">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center py-2 md:py-3">
          {/* Logo */}
          <div
            className="flex items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <Link href="/" className="flex items-center py-2 md:py-4" aria-label="Cinnamon - Home">
              <img 
                src="/images/white-logo.png" 
                alt="Cinnamon Logo" 
                className="w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden xl:block max-[1151px]:hidden"
            role="navigation"
            aria-label="Main navigation"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
            }}
          >
            <ul className="flex items-center space-x-4 xl:space-x-6">
              <li>
                <Link href="/" className="text-white hover:text-accent px-3 py-2 text-sm md:text-base lg:text-lg transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-accent px-3 py-2 text-sm md:text-base lg:text-lg transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white hover:text-accent px-3 py-2 text-sm md:text-base lg:text-lg transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-white hover:text-accent px-3 py-2 text-sm md:text-base lg:text-lg transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <a 
                  href="https://dazzler.app/isle-of-man/castletown/cinnamon-indian-restaurant-d171r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#6F1E2D] px-4 py-2 hover:bg-gray-100 transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem] inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Make an Order
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div 
            className="xl:hidden block max-[1151px]:block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
            }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center gap-2 p-2 rounded-md text-white hover:text-accent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-sm md:text-base lg:text-lg font-medium">Menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="xl:hidden block max-[1151px]:block bg-[#6F1E2D] border-t border-white/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-1 pb-2 space-y-0.5">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-sm md:text-base lg:text-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Homepage
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-sm md:text-base lg:text-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/menu" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-sm md:text-base lg:text-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Menu
              </Link>
              <Link 
                href="/reservations" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-sm md:text-base lg:text-lg transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservations
              </Link>
              <div className="px-3 py-2">
                <a 
                  href="https://dazzler.app/isle-of-man/castletown/cinnamon-indian-restaurant-d171r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#6F1E2D] px-4 py-2 hover:bg-gray-100 transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem] inline-flex items-center gap-2 w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  Make an Order
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
        
        {/* Closure Notice */}
        <div className="bg-white text-black py-3 px-4 text-center">
          <FadeIn delay={0.5}>
            <p className="text-sm md:text-base lg:text-lg">
              We are <u>closed from 18 March to 24 March</u>. Thank you for understanding.
            </p>
          </FadeIn>
        </div>
    </header>
  )
}

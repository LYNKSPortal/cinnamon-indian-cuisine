'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return (
    <header className="bg-dark text-white sticky top-0 z-50" role="banner">
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
              <span className="text-2xl md:text-3xl font-heading">Cinnamon</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:block"
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
                <Link href="/" className="text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div 
            className="lg:hidden"
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
              <span className="text-sm font-medium">Menu</span>
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
            className="lg:hidden bg-dark border-t border-white/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-1 pb-2 space-y-0.5">
              <Link href="/" className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/menu" className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-base font-medium">
                Menu
              </Link>
              <Link href="/reservations" className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-base font-medium">
                Reservations
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-accent hover:bg-white/10 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading">
            Cinnamon
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/menu" className="hover:text-accent transition-colors">
              Menu
            </Link>
            <Link href="/reservations" className="hover:text-accent transition-colors">
              Reservations
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-accent transition-colors py-2">
                Home
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors py-2">
                About
              </Link>
              <Link href="/menu" className="hover:text-accent transition-colors py-2">
                Menu
              </Link>
              <Link href="/reservations" className="hover:text-accent transition-colors py-2">
                Reservations
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors py-2">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

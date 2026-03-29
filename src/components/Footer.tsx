'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <FadeIn>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-heading mb-4">Cinnamon</h3>
              <p className="text-gray-300 mb-4">
                Authentic Indian cuisine served with love and tradition.
              </p>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-300 hover:text-accent transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/reservations" className="text-gray-300 hover:text-accent transition-colors">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.2}>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>123 Restaurant Street</li>
                <li>City, State 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@cinnamon.com</li>
              </ul>
            </div>
          </FadeIn>

          {/* Hours */}
          <FadeIn delay={0.3}>
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Mon-Thu: 11:00 AM - 10:00 PM</li>
                <li>Fri-Sat: 11:00 AM - 11:00 PM</li>
                <li>Sunday: 12:00 PM - 9:00 PM</li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom */}
        <FadeIn delay={0.4}>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <p className="text-white text-sm order-2 md:order-1">
                &copy; 2026 Cinnamon Indian Cuisine. All rights reserved.
              </p>
              <div className="flex items-center justify-center order-1 md:order-2">
                <span className="text-white/75 text-sm">Powered by LYNKS</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 order-3">
                <a href="/privacy" className="text-white hover:text-accent text-sm transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-white hover:text-accent text-sm transition-colors">Terms of Service</a>
                <a href="/accessibility" className="text-white hover:text-accent text-sm transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="bg-[#6F1E2D] text-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:max-[1350px]:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <FadeIn>
            <div className="text-center">
              <img 
                src="/images/white-logo.png" 
                alt="Cinnamon Logo" 
                className="w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px] xl:w-[350px] h-auto mb-4 mx-auto"
              />
              <p className="text-white text-sm md:text-base lg:text-lg">
                Authentic Indian cuisine served with love and tradition. Experience the rich flavors of India, crafted with aromatic spices and time-honored recipes passed down through generations, bringing the true taste of India to your table.
              </p>
              <div className="flex justify-center items-center gap-4 mt-6">
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/CinnamonIndianRestaurantIOM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/447624253642" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                
                {/* Phone */}
                <a 
                  href="tel:+441624894180" 
                  className="text-white hover:text-accent transition-colors"
                  aria-label="Phone"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:info@cinnamon.com" 
                  className="text-white hover:text-accent transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <div className="text-center">
              <h4 className="mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/reservations" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    Reservations
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-white text-sm md:text-base lg:text-lg hover:text-accent transition-colors">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Contact */}
          <FadeIn delay={0.2}>
            <div className="text-center">
              <h4 className="mb-4">Find Us</h4>
              <div className="bg-white/10 rounded-lg overflow-hidden mb-4">
                <iframe
                  src="https://maps.app.goo.gl/Xe5aeRCVcVF4J6189"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Cinnamon Indian Restaurant on Google Maps"
                  className="w-full"
                ></iframe>
              </div>
              <div className="text-white text-sm md:text-base lg:text-lg">
                <p>31 Malew Street, Castletown</p>
                <p>IM9 1AD, Isle of Man</p>
              </div>
            </div>
          </FadeIn>

          {/* Hours */}
          <FadeIn delay={0.3}>
            <div className="text-center">
              <h4 className="mb-4">Hours</h4>
              <ul className="space-y-1 text-white text-sm md:text-base lg:text-lg">
                <li className="flex justify-between"><span>Monday</span><span>Closed</span></li>
                <li className="flex justify-between"><span>Tuesday</span><span>5:00 PM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Wednesday</span><span>5:00 PM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Thursday</span><span>5:00 PM – 9:00 PM</span></li>
                <li className="flex justify-between"><span>Friday</span><span>5:00 PM – 10:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span>5:00 PM – 10:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>5:00 PM – 9:00 PM</span></li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Bottom */}
        <FadeIn delay={0.4}>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <p className="text-white text-sm md:text-base lg:text-lg">
                &copy; 2026 Cinnamon Indian Cuisine. All rights reserved.
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src="/images/powered-by-lynks.png" 
                  alt="Powered by LYNKS" 
                  className="w-[175px] h-auto"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

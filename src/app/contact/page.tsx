import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Cinnamon | Indian Restaurant Location & Hours",
  description: "Find Cinnamon Indian Cuisine location, hours, and contact information. Visit us for authentic Indian dining.",
  keywords: ["Cinnamon contact", "Indian restaurant location", "restaurant hours", "contact information"],
  openGraph: {
    title: "Contact Cinnamon",
    description: "Find Cinnamon Indian Cuisine location, hours, and contact information.",
    url: "https://cinnamon-indian-cuisine.vercel.app/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <img 
          src="/homepage-slider/cinnamon-4.jpg" 
          alt="Restaurant background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">
                Contact Us
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Get in touch for reservations, inquiries, or catering
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Contact Details */}
              <FadeIn>
                <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Address</h3>
                    <p className="text-gray-600">
                      123 Restaurant Street<br />
                      City, State 12345<br />
                      United Kingdom
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Phone</h3>
                    <p className="text-gray-600">
                      Main: (555) 123-4567<br />
                      Reservations: (555) 123-4568
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Email</h3>
                    <p className="text-gray-600">
                      General: info@cinnamon.com<br />
                      Reservations: reservations@cinnamon.com<br />
                      Catering: catering@cinnamon.com
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-primary">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Thursday: 11:00 AM - 10:00 PM<br />
                      Friday - Saturday: 11:00 AM - 11:00 PM<br />
                      Sunday: 12:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Map Placeholder */}
              <FadeIn delay={0.2}>
                <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl">Find Us</h2>
                <div className="bg-gray-100 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-gray-600 mb-4">
                    Interactive map coming soon!<br />
                    Located in the heart of the city
                  </p>
                  <a 
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Additional Information */}
            <FadeIn delay={0.4} className="mt-12">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="font-bold text-gray-900 mb-4 text-xl md:text-2xl text-center">Private Events & Catering</h2>
                <p className="text-gray-600 text-center mb-6">
                  Host your special events with us! We offer private dining and catering services for 
                  corporate events, weddings, birthday parties, and other celebrations.
                </p>
                <div className="text-center">
                  <a 
                    href="mailto:catering@cinnamon.com"
                    className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    Inquire About Catering
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

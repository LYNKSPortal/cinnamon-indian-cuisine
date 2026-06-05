import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Book a Table - Cinnamon Indian Cuisine | WhatsApp Reservations Peel, Isle of Man",
  description: "Reserve your table at Cinnamon Indian Cuisine in Peel, Isle of Man via WhatsApp. Quick and easy booking for authentic Indian dining experience.",
  keywords: [
    "Indian restaurant reservations Peel",
    "book table Cinnamon",
    "WhatsApp booking Peel",
    "restaurant booking Isle of Man",
    "Cinnamon reservations",
    "authentic Indian cuisine booking",
    "private dining reservations",
    "catering services",
    "Indian restaurant Peel",
    "table booking",
    "restaurant reservations",
    "East Quay",
    "Indian food reservations",
    "family dining reservations",
    "special events booking"
  ],
  openGraph: {
    title: "Book a Table - Cinnamon Indian Cuisine | WhatsApp Reservations Peel, Isle of Man",
    description: "Reserve your table at Cinnamon Indian Cuisine in Peel, Isle of Man via WhatsApp. Quick and easy booking for authentic Indian dining.",
    url: "https://cinnamon-indian-cuisine.vercel.app/reservations",
    siteName: "Cinnamon Indian Cuisine",
    images: [
      {
        url: "/images/Slider/slider-img-01.jpg",
        width: 1200,
        height: 800,
        alt: "Book a Table at Cinnamon Indian Restaurant - Authentic Indian Dining",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Table - Cinnamon Indian Cuisine | WhatsApp Reservations",
    description: "Reserve your table at Cinnamon Indian Cuisine in Peel, Isle of Man via WhatsApp. Quick and easy booking for authentic Indian dining experience.",
    images: ["/images/Slider/slider-img-01.jpg"],
  },
  alternates: {
    canonical: "https://cinnamon-indian-cuisine.vercel.app/reservations",
  },
};

export default function Reservations() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/Slider/slider-img-06.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl">
                Make a Reservation
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Book your table for an unforgettable Indian dining experience
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* WhatsApp Booking Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl lg:text-4xl">
                Book via WhatsApp
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg md:text-xl">
                For the fastest response and to secure your table, please contact us directly via WhatsApp. 
                Our team will confirm your booking immediately.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Click to Book via WhatsApp
                </h3>
                <p className="text-gray-600 mb-8 text-base md:text-lg">
                  Send us a message with your preferred date, time, and number of guests
                </p>
              </div>

              <a 
                href="https://wa.me/447624253642" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 hover:bg-[#128C7E] transition-colors text-lg md:text-xl font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book Now on WhatsApp
              </a>

              <div className="mt-8 text-sm text-gray-500">
                <p>Available: Tuesday-Sunday 5:00 PM - 9:00 PM</p>
                <p>Friday-Saturday 5:00 PM - 10:00 PM</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6F1E2D] text-white rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">Get instant confirmation for your booking</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6F1E2D] text-white rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Booking</h3>
                <p className="text-gray-600 text-sm">Easily modify or cancel your reservation</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6F1E2D] text-white rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Service</h3>
                <p className="text-gray-600 text-sm">Speak directly with our team for special requests</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
            
      <Footer />
    </div>
  );
}

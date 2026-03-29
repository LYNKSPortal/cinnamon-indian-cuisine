import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reservations - Cinnamon | Book a Table",
  description: "Book your table at Cinnamon Indian Cuisine and find our location, hours, and contact information. Reserve your spot for an authentic Indian dining experience.",
  keywords: ["Indian restaurant reservations", "book table", "Cinnamon reservations", "Indian dining", "contact information", "restaurant location"],
  openGraph: {
    title: "Reservations - Cinnamon",
    description: "Book your table at Cinnamon Indian Cuisine and find our location and contact information.",
    url: "https://cinnamon-indian-cuisine.vercel.app/reservations",
  },
};

export default function Reservations() {
  return (
    <div className="min-h-screen bg-white">
      <ReservationForm />
      
      {/* Private Events & Catering Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl lg:text-4xl">
              Private Events & Catering
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Host your special events with us! We offer private dining and catering services for corporate events, weddings, birthday parties, and other celebrations.
            </p>
            <a 
              href="https://wa.me/447624253642" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
            >
              Send us a WhatsApp
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

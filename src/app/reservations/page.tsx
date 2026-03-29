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
      <Footer />
    </div>
  );
}

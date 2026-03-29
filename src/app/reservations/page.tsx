import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reservations - Cinnamon | Book a Table",
  description: "Book your table at Cinnamon Indian Cuisine. Reserve your spot for an authentic Indian dining experience.",
  keywords: ["Indian restaurant reservations", "book table", "Cinnamon reservations", "Indian dining"],
  openGraph: {
    title: "Reservations - Cinnamon",
    description: "Book your table at Cinnamon Indian Cuisine for an authentic dining experience.",
    url: "https://cinnamon-indian-cuisine.vercel.app/reservations",
  },
};

export default function Reservations() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ReservationForm />
      <Footer />
    </div>
  );
}

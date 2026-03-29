import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomepageSlider from '@/components/HomepageSlider';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cinnamon Indian Cuisine - Authentic Indian Restaurant",
  description: "Experience authentic Indian dining at Cinnamon. Traditional recipes, aromatic spices, warm hospitality, and unforgettable culinary experiences.",
  keywords: ["Indian restaurant", "authentic Indian food", "curry", "Cinnamon", "Indian dining", "restaurant reservations", "Indian cuisine", "family dining"],
  openGraph: {
    title: "Cinnamon Indian Cuisine - Authentic Indian Restaurant",
    description: "Experience authentic Indian dining at Cinnamon. Traditional recipes, aromatic spices, and warm hospitality.",
    url: "https://cinnamon-indian-cuisine.vercel.app",
    images: [
      {
        url: "/homepage-slider/cinnamon-1.jpg",
        width: 1200,
        height: 800,
        alt: "Cinnamon Indian Restaurant - Authentic Indian Dining",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Slider Section */}
      <HomepageSlider />

      {/* About Section */}
      <section id="about" className="py-10 md:py-16 lg:py-20 bg-white" aria-labelledby="about-heading">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 id="about-heading" className="font-bold text-gray-900 mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl">Our Story</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-600 text-sm md:text-base">
                  Cinnamon brings the authentic taste of India to your table. Founded with passion, 
                  our restaurant is a celebration of traditional Indian cuisine with aromatic spices 
                  and rich flavors.
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Our chefs, with decades of experience, create dishes that honour the rich 
                  culinary heritage of India while incorporating fresh, locally sourced ingredients 
                  and authentic spices.
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Whether you're joining us for a family dinner, romantic evening, or business lunch, 
                  we promise an unforgettable dining experience filled with warmth and hospitality.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="mt-6 md:mt-8">
                <a 
                  href="/about" 
                  className="inline-block bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 hover:bg-secondary transition-colors font-medium text-sm md:text-base"
                  aria-label="Learn more about our story - Navigate to About page"
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

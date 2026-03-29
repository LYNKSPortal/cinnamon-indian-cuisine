import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Menu - Cinnamon | Indian Cuisine",
  description: "Explore Cinnamon's authentic Indian menu featuring traditional curries, tandoori dishes, biryanis, and vegetarian specialties.",
  keywords: ["Indian menu", "authentic Indian cuisine", "curry", "tandoori", "Indian food", "restaurant"],
  openGraph: {
    title: "Our Menu - Cinnamon",
    description: "Explore Cinnamon's authentic Indian menu featuring traditional dishes.",
    url: "https://cinnamon-indian-cuisine.vercel.app/menu",
  },
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <img 
          src="/homepage-slider/cinnamon-3.jpg" 
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
                Our Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Authentic Indian cuisine crafted with aromatic spices and tradition
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Menu Categories */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Starters */}
            <FadeIn>
              <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl text-center">Starters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Samosa</h3>
                  <p className="text-gray-600 text-sm">Crispy pastry filled with spiced potatoes and peas</p>
                  <p className="text-primary font-bold mt-2">£6.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Onion Bhaji</h3>
                  <p className="text-gray-600 text-sm">Crispy fried onion slices with gram flour and spices</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Chicken Tikka</h3>
                  <p className="text-gray-600 text-sm">Marinated chicken pieces cooked in tandoor</p>
                  <p className="text-primary font-bold mt-2">£7.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Paneer Pakora</h3>
                  <p className="text-gray-600 text-sm">Cottage cheese cubes in spiced batter, deep fried</p>
                  <p className="text-primary font-bold mt-2">£6.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Main Courses */}
            <FadeIn delay={0.2}>
              <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl text-center">Main Courses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Butter Chicken</h3>
                  <p className="text-gray-600 text-sm">Tender chicken in rich, creamy tomato sauce</p>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Lamb Rogan Josh</h3>
                  <p className="text-gray-600 text-sm">Tender lamb in aromatic Kashmiri-style curry</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Chicken Korma</h3>
                  <p className="text-gray-600 text-sm">Mild, creamy curry with chicken and nuts</p>
                  <p className="text-primary font-bold mt-2">£11.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Palak Paneer</h3>
                  <p className="text-gray-600 text-sm">Cottage cheese in creamy spinach curry</p>
                  <p className="text-primary font-bold mt-2">£10.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Vegetable Biryani</h3>
                  <p className="text-gray-600 text-sm">Fragrant rice with mixed vegetables and spices</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Prawn Curry</h3>
                  <p className="text-gray-600 text-sm">Fresh prawns in coconut-based curry</p>
                  <p className="text-primary font-bold mt-2">£14.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Breads and Rice */}
            <FadeIn delay={0.4}>
              <h2 className="font-bold text-gray-900 mb-6 text-2xl md:text-3xl text-center">Breads & Rice</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Naan Bread</h3>
                  <p className="text-gray-600 text-sm">Traditional clay oven bread</p>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Garlic Naan</h3>
                  <p className="text-gray-600 text-sm">Naan bread with fresh garlic and herbs</p>
                  <p className="text-primary font-bold mt-2">£4.45</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Basmati Rice</h3>
                  <p className="text-gray-600 text-sm">Fluffy long-grain rice</p>
                  <p className="text-primary font-bold mt-2">£3.45</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold text-lg mb-2">Pilau Rice</h3>
                  <p className="text-gray-600 text-sm">Basmati rice with aromatic spices</p>
                  <p className="text-primary font-bold mt-2">£3.95</p>
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

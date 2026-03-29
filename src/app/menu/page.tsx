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

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/Slider/slider-img-04.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 className="font-bold text-white mb-3 md:mb-4">
                Our Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Discover authentic Indian flavours, from traditional curries to tandoori specialities
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Menu Categories */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full space-y-20">
            
            {/* Starters */}
            <FadeIn>
              <h2 className="text-gray-900 mb-10 text-left">Starters</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Assorted Pickles</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Mint, Mango, Tamarind, and Onion.</p>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chat Puree</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg"></p>
                  <p className="text-primary font-bold mt-2">£7.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken or Vegetable Pakora</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Vegetable. Cooked in Garlic with Spices, Coated in Batter and Fried.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mixed Platter</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Onion Bhaji, Chicken Tikka, Lamb Tikka, Seek Kebab, Chicken, and Vegetable Pakora.</p>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mix Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lamb Tikka, Chicken Tikka, and Seek Kebab.</p>
                  <p className="text-primary font-bold mt-2">£7.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mushroom Pakora</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Fresh Mushrooms in a Spicy Gram Flour Batter.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Onion Bhaji</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Onion in Spiced Batter.</p>
                  <p className="text-primary font-bold mt-2">£4.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Plain or Masala Poppadom</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg"></p>
                  <p className="text-primary font-bold mt-2">£1.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Punjabi Samosa</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Vegetable or Meat. Fried in a Crisp Pastry.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Reshmi Kebab</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Minced Chicken with Spices, Red and Green Peppers.</p>
                  <p className="text-primary font-bold mt-2">£7.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Seek Kebab</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Minced Lamb with Mixed Spiced and Herbs, Cooked in the Day Oven.</p>
                  <p className="text-primary font-bold mt-2">£6.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Tandoori Specialities */}
            <FadeIn delay={0.2}>
              <h2 className="text-gray-900 mb-10 text-left">Tandoori Specialities</h2>
              <p className="text-left text-gray-600 text-sm md:text-base lg:text-lg mb-6">All main dishes served with curry sauce</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken Tandoori (on the bone)</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Tender Chicken in Yoghurt and Aromatic Spices Cooked in a Tandoor.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken Breast Marinated in Spices and Herbs, Diced, and Barbecued.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">King Prawn Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg"></p>
                  <p className="text-primary font-bold mt-2">£8.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lamb Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with Fried Onion, Yogurt, Almond and a Blend of Spices.</p>
                  <p className="text-primary font-bold mt-2">£7.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Malai Boti</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Creamy Marinated Chicken with Spices and Cooked in a Tandoor.</p>
                  <p className="text-primary font-bold mt-2">£6.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mix Tandoori</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">An Assortment of Kebabs and Tikkas.</p>
                  <p className="text-primary font-bold mt-2">£18.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Shashlick Chicken</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken in Tandoori Spices, Cooked with Peppers, Onion, and Tomato.</p>
                  <p className="text-primary font-bold mt-2">£14.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Shashlick Lamb</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lamb in Tandoori Spices, Cooked with Peppers, Onion, and Tomato.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Mild Special Dishes */}
            <FadeIn delay={0.3}>
              <h2 className="text-gray-900 mb-10 text-left">Mild Special Dishes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Butter Chicken</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A Very Mild Dish Cooked with Butter Cream and Coconut Milk.</p>
                  <p className="text-primary font-bold mt-2">£10.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Masala</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked in Exotic Herb, Coconut Cream, and Masala Sauce.</p>
                  <p className="text-primary font-bold mt-2">£10.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Passanda</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked in Special Creamy Sauce with Ground Almonds.</p>
                  <p className="text-primary font-bold mt-2">£10.50</p>
                </div>
              </div>
            </FadeIn>

            {/* Chef's Specials */}
            <FadeIn delay={0.4}>
              <h2 className="text-gray-900 mb-10 text-left">Chef's Specials</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Balti</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A wonderful combination of flavours, cooked in a cast iron dish and tossed with capsicum and onion and garnished with fresh coriander and bay leaves.</p>
                  <p className="text-primary font-bold mt-2">£10.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Jalfrezi</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with sliced peppers, onions, spices, and green chillies.</p>
                  <p className="text-primary font-bold mt-2">£10.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lahori Karahi</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A spicy traditional dish cooked with fresh onions, garlic, ginger, tomatoes, mixed peppers, green chillies and our blend of spices.</p>
                  <p className="text-primary font-bold mt-2">£10.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Seafood Special */}
            <FadeIn delay={0.5}>
              <h2 className="text-gray-900 mb-10 text-left">Seafood Special</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Fish Haryali</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Pan Seared Fish in Rich Spicy Green Creamy Gravy.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">King Prawn Chilli</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">King Prawns Cooked with Garlic, Fresh Green Chillies, Red Crushed Chillies, with a Touch of Honey.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Biriyani */}
            <FadeIn delay={0.6}>
              <h2 className="text-gray-900 mb-10 text-left">Biriyani</h2>
              <p className="text-left text-gray-600 text-sm md:text-base lg:text-lg mb-6">A Soft Basmati Rice Cooked with Spices and Finely Chopped Onions Served with Vegetable Curry Sauce</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken Biriyani</h4>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">King Prawn Biriyani</h4>
                  <p className="text-primary font-bold mt-2">£15.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lamb Biriyani</h4>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Prawn Biriyani</h4>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Special Mix</h4>
                  <p className="text-primary font-bold mt-2">£15.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Vegetable Biriyani</h4>
                  <p className="text-primary font-bold mt-2">£10.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Special Curries */}
            <FadeIn delay={0.7}>
              <h2 className="text-gray-900 mb-10 text-left">Special Curries</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Afghani Karahi <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Medium strength dish cooked with mixed peppers, jalapeño peppers, sultanas, flaked almonds, served in a rich spicy sauce.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chilli Ginger <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with fresh ginger topped with green peppers.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chilli Masala <span className="text-red-500">🌶️🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Flavoursome dish of chicken tikka, cooked with red and green peppers, onion spiced with dried chilli and special grind of spices madras hot.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Dam Gosht <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Cooked with onion spice to a medium strength.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Goan Curry <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spicy curry cooked with fresh green chillies, coconut milk, mustard seeds, and fresh green herbs.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Hara Masala <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A spicy dish cooked in fresh crushed green chilli fresh mint leaves and madras spice.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Paneer Makani</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Homemade cheese cooked in smooth buttery sauce finish with cream.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Safed Goasht</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Slow cook meat with black pepper and mild spices.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Tandoori Garlic Chilli Chicken <span className="text-red-500">🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Medium hot dish made with strips on tandoori chicken, green chilli, and fresh coriander.</p>
                  <p className="text-primary font-bold mt-2">£14.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Classic Favourite Dishes */}
            <FadeIn delay={0.8}>
              <h2 className="text-gray-900 mb-10 text-left">Classic Favourite Dishes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Bhuna</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with mixed ground spices, finely chopped onions, and tomatoes.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Dansak</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Sweet and sour dish cooked with lentils, pineapples, lemon, sugar, and mixed spices.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Dupiaza</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with chunks of peppers, onions, tomatoes, and spices.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Korma</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Very mild creamy sauce made with coconut.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Madras <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A hot dish made with ground chillies, tomatoes, and mixed spices.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Pathia</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Hot and sweet dish cooked in onions and lemon juice.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Rogan Josh <span className="text-red-500">🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Medium dish cooked in onions, garlic, and spices topped with fresh tomatoes.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Sagwala</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with fresh spinach and mixed spices.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Vindaloo <span className="text-red-500">🌶️🌶️🌶️</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A very hot dish made with ground chillies, spiced potato, tomatoes, and mixed herbs.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Side Dishes */}
            <FadeIn delay={0.9}>
              <h2 className="text-gray-900 mb-10 text-left">Side Dishes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Bindi Bahi</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced Okra.</p>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Bombay Aloo</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced Potato.</p>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chana Masala</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chana Masala.</p>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chips</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg"></p>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Matar Paneer</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Homemade Cheese with Peas.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Riata Onion or Cucumber</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Yoghurt.</p>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Sag Aloo</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced Potato with Fresh Spinach.</p>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Sag Paneer</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced Potato with Fresh Spinach.</p>
                  <p className="text-primary font-bold mt-2">£5.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Tarka Dall</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lentils.</p>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
              </div>
            </FadeIn>

            {/* Breads */}
            <FadeIn delay={1.0}>
              <h2 className="text-gray-900 mb-10 text-left">Breads</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chapatti</h4>
                  <p className="text-primary font-bold mt-2">£1.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Cheese Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Garlic Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Keema Naan</h4>
                  <p className="text-primary font-bold mt-2">£1.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Naan</h4>
                  <p className="text-primary font-bold mt-2">£2.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Peshwari Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Plain Partha</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Stuffed Partha</h4>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Tandoori Roti</h4>
                  <p className="text-primary font-bold mt-2">£2.50</p>
                </div>
              </div>
            </FadeIn>

            {/* Rice */}
            <FadeIn delay={1.1}>
              <h2 className="text-gray-900 mb-10 text-left">Rice</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Boiled Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Egg Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mushroom Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Onion Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.25</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Special Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Vegetable Pilau Rice</h4>
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

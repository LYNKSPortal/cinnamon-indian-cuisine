import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Takeaway Menu - Cinnamon Indian Cuisine | Peel, Isle of Man",
  description: "Order takeaway from Cinnamon Indian Cuisine in Peel, Isle of Man. Authentic Indian dishes including curries, tandoori, biryanis and more. Open Tuesday–Sunday 5pm–10pm.",
  keywords: [
    "Indian takeaway Peel",
    "takeaway menu Isle of Man",
    "Indian food takeaway",
    "curry takeaway Peel",
    "tandoori takeaway",
    "biryani takeaway",
    "Cinnamon takeaway menu",
    "Indian restaurant Peel",
    "chicken tikka takeaway",
    "lamb curry takeaway",
    "vegetarian takeaway",
    "East Quay Peel"
  ],
  openGraph: {
    title: "Takeaway Menu - Cinnamon Indian Cuisine | Peel, Isle of Man",
    description: "Order takeaway from Cinnamon Indian Cuisine in Peel, Isle of Man. Authentic Indian dishes including curries, tandoori, biryanis and more.",
    url: "https://cinnamon-indian-cuisine.vercel.app/takeaway-menu",
    siteName: "Cinnamon Indian Cuisine",
    images: [
      {
        url: "/images/Slider/slider-img-04.jpg",
        width: 1200,
        height: 800,
        alt: "Cinnamon Indian Restaurant Takeaway Menu",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takeaway Menu - Cinnamon Indian Cuisine",
    description: "Order takeaway from Cinnamon Indian Cuisine in Peel, Isle of Man. Authentic Indian dishes, open Tuesday–Sunday 5pm–10pm.",
    images: ["/images/Slider/slider-img-04.jpg"],
  },
  alternates: {
    canonical: "https://cinnamon-indian-cuisine.vercel.app/takeaway-menu",
  },
};

export default function TakeawayMenu() {
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
                Takeaway Menu
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Authentic Indian flavours to enjoy at home — open Tuesday to Sunday, 5pm–10pm
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Info Bar */}
      <div className="bg-[#6F1E2D] text-white py-4 px-4 text-center">
        <FadeIn>
          <p className="text-sm md:text-base lg:text-lg">
            📞 Call to order: <a href="tel:01624875726" className="underline hover:text-gray-200 transition-colors">01624 875726</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
            East Quay, Peel, IM5 1AR
            &nbsp;&nbsp;·&nbsp;&nbsp;
            Tuesday–Sunday &nbsp;5pm–10pm
          </p>
        </FadeIn>
      </div>

      {/* Menu Categories */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="w-full space-y-20">

            {/* Starters */}
            <FadeIn>
              <h2 className="text-gray-900 mb-10 text-left">Starters</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mixed Platter <span className="text-gray-500 font-normal text-sm">(serves two)</span></h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Onion bhaji, chicken tikka, lamb tikka, seek kebab, chicken and vegetable pakora.</p>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Manx Queenies</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lightly spiced with a touch of garlic.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Onion Bhaji</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Onion in spiced batter.</p>
                  <p className="text-primary font-bold mt-2">£4.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Paneer Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Indian cheese cooked in a clay oven, further cooked in a sweet and sour sauce.</p>
                  <p className="text-primary font-bold mt-2">£9.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mushroom Pakora</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Fresh mushrooms in a spicy gram flour batter.</p>
                  <p className="text-primary font-bold mt-2">£6.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Seek Kebab</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Minced lamb with mixed spices and herbs, cooked in the clay oven.</p>
                  <p className="text-primary font-bold mt-2">£7.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mix Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lamb tikka, chicken tikka and seek kebab.</p>
                  <p className="text-primary font-bold mt-2">£8.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Punjabi Samosa</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Vegetable or meat fried in crisp pastry.</p>
                  <p className="text-primary font-bold mt-2">£6.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Plain or Masala Pappadom</h4>
                  <p className="text-primary font-bold mt-2">£1.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Assorted Pickles</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Mint, Mango, Tamarind and Onion.</p>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
              </div>
            </FadeIn>

            {/* Tandoori Specialities */}
            <FadeIn delay={0.2}>
              <h2 className="text-gray-900 mb-10 text-left">Tandoori Specialities</h2>
              <p className="text-left text-gray-600 text-sm md:text-base lg:text-lg mb-6">All main dishes served with curry sauce.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken Tandoori (on the bone)</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Tender chicken in yoghurt and aromatic spices cooked in a tandoor.</p>
                  <p className="text-gray-700 text-sm mt-2">Starter <span className="text-primary font-bold">£6.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£11.50</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken breast marinated in spices and herbs, diced and barbecued.</p>
                  <p className="text-gray-700 text-sm mt-2">Starter <span className="text-primary font-bold">£6.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£11.50</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Malai Boti</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Creamy marinated chicken with spices and cooked in a tandoor.</p>
                  <p className="text-gray-700 text-sm mt-2">Starter <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£12.50</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lamb Dill Passand</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with fried onion, yogurt, almond and blend of spices.</p>
                  <p className="text-gray-700 text-sm mt-2">Starter <span className="text-primary font-bold">£9.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£16.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lamb Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spring lamb chops with dry spices.</p>
                  <p className="text-gray-700 text-sm mt-2">Starter <span className="text-primary font-bold">£11.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£19.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Shashlick Chicken</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken in tandoori spices, cooked with peppers, onion and tomato.</p>
                  <p className="text-primary font-bold mt-2">£14.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Shashlick Lamb</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lamb in tandoori spices, cooked with peppers, onion and tomato.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">King Prawn Tikka</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Tiger king prawn marinated in a special tandoori sauce cooked in a tandoor.</p>
                  <p className="text-gray-700 text-sm mt-2">Starter <span className="text-primary font-bold">£8.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£16.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mix Tandoori</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">An assortment of kebabs and tikkas.</p>
                  <p className="text-primary font-bold mt-2">£19.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Mild Special Dishes */}
            <FadeIn delay={0.3}>
              <h2 className="text-gray-900 mb-10 text-left">Mild Special Dishes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Passanda</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked in special creamy sauce with ground almonds.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Masala</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked in exotic herb, coconut cream and a masala sauce.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Butter Chicken</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A very mild dish cooked with butter cream and coconut milk.</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mt-8 text-sm md:text-base lg:text-lg">
                Chicken Tikka £11.50 &nbsp;·&nbsp; Lamb £12.50 &nbsp;·&nbsp; Vegetable £10.50 &nbsp;·&nbsp; King Prawn Tikka £16.95 &nbsp;·&nbsp; Special Mix £16.95
              </p>
            </FadeIn>

            {/* Chef's Specials */}
            <FadeIn delay={0.4}>
              <h2 className="text-gray-900 mb-10 text-left">Chef&apos;s Specials</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Balti</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A wonderful combination of flavours, cooked in a cast iron dish and tossed with capsicum and onion, garnished with fresh coriander and bay leaves.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lahori Karahi</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A spicy traditional dish cooked with fresh onions, garlic, ginger, tomatoes, mixed peppers, green chillies and our blend of spices.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Jalfrezi</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with sliced peppers, onions, spices and green chillies.</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mt-8 text-sm md:text-base lg:text-lg">
                Chicken £11.95 &nbsp;·&nbsp; Chicken Tikka £12.95 &nbsp;·&nbsp; Lamb £12.50 &nbsp;·&nbsp; King Prawn £16.95 &nbsp;·&nbsp; Prawn £12.95 &nbsp;·&nbsp; Vegetable £10.95
              </p>
            </FadeIn>

            {/* Seafood Special */}
            <FadeIn delay={0.5}>
              <h2 className="text-gray-900 mb-10 text-left">Seafood Special</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Fish Haryali</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Pan-seared fish in rich spicy green creamy gravy.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Fish Lababdar</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Fish cooked with mustard seeds, fresh ginger, spices and coconut milk.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">King Prawn Chilli</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">King prawns cooked with garlic, fresh green chillies, red crushed chillies, with a touch of honey.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Jungli King Prawn</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">King prawns cooked in a smooth hot gravy with sesame oil and combination spice.</p>
                  <p className="text-primary font-bold mt-2">£16.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Biriyani */}
            <FadeIn delay={0.6}>
              <h2 className="text-gray-900 mb-10 text-left">Biriyani</h2>
              <p className="text-left text-gray-600 text-sm md:text-base lg:text-lg mb-6">Soft basmati rice cooked with spices and finely chopped onions, served with vegetable curry sauce.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chicken</h4>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Lamb</h4>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Prawn</h4>
                  <p className="text-primary font-bold mt-2">£12.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">King Prawn</h4>
                  <p className="text-primary font-bold mt-2">£15.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Special Mix</h4>
                  <p className="text-primary font-bold mt-2">£15.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Vegetable</h4>
                  <p className="text-primary font-bold mt-2">£10.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Special Curries */}
            <FadeIn delay={0.7}>
              <h2 className="text-gray-900 mb-10 text-left">Special Curries</h2>
              <p className="text-left text-gray-600 text-sm md:text-base lg:text-lg mb-6">As these dishes are slightly more complex, please allow a little extra time.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Tandoori Garlic Chilli Chicken 🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Medium hot dish made with strips of tandoori chicken, green chilli and fresh coriander.</p>
                  <p className="text-primary font-bold mt-2">£14.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Afghani Karahi 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Medium-strength dish cooked with mixed peppers, jalapeño peppers, sultanas, flaked almonds, served in a rich spicy sauce.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Goan Curry 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Spicy curry cooked with fresh green chillies, coconut milk, mustard seeds and fresh green herbs.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chilli Masala 🌶🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. A flavoursome dish of chicken tikka cooked with red and green peppers, onion, dried chilli, and special ground spices. Madras hot.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Dam Gosht 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Cooked with onion spices to a medium strength.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Safed Gosht</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Slow-cooked meat with black pepper and mild spices.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Hara Masala 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. A spicy dish cooked in fresh crushed green chilli, fresh mint leaves and madras spices.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chilli Ginger 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chicken or Lamb. Cooked with fresh ginger topped with green peppers.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Paneer Makani</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Homemade cheese cooked in smooth buttery sauce finished with cream.</p>
                  <p className="text-primary font-bold mt-2">£13.95</p>
                </div>
              </div>
            </FadeIn>

            {/* Classic Favourite Dishes */}
            <FadeIn delay={0.8}>
              <h2 className="text-gray-900 mb-10 text-left">Classic Favourite Dishes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Korma</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Very mild creamy sauce made with coconut.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Sagwala</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with fresh spinach and mixed spices.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Bhuna</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with mixed ground spices, finely chopped onions and tomatoes.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Dupiaza</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Cooked with chunks of peppers, onions, tomatoes and spices.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Pathia</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Hot and sweet dish cooked in onions and lemon juice.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Rogan Josh 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Medium dish cooked in onions, garlic and spices topped with fresh tomatoes.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Dansak</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Sweet and sour dish cooked with lentils, pineapples, lemon, sugar and mixed spices.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Madras 🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A hot dish made with ground chillies, tomatoes and mixed spices.</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Vindaloo 🌶🌶🌶</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">A very hot dish made with ground chillies, spiced potato, tomatoes and mixed herbs.</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mt-8 text-sm md:text-base lg:text-lg">
                Chicken £10.95 &nbsp;·&nbsp; Chicken Tikka £11.95 &nbsp;·&nbsp; Lamb £11.95 &nbsp;·&nbsp; Vegetable £9.95 &nbsp;·&nbsp; Prawn £11.95 &nbsp;·&nbsp; King Prawn £14.95 &nbsp;·&nbsp; Special Mix £14.95
              </p>
            </FadeIn>

            {/* Side Dishes */}
            <FadeIn delay={0.9}>
              <h2 className="text-gray-900 mb-10 text-left">Side Dishes</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Tarka Dall</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Lentils.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£7.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Matar Paneer</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Homemade cheese with peas.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£10.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Sag Paneer</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Homemade cheese with fresh cooked spinach.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.95</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£10.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Sag Aloo</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced potato with fresh spinach.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£9.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chana Masala</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Chick peas.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£9.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Bombay Aloo</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced potato.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£9.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Mixed Vegetable Curry</h4>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£9.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Bindi Bhaji</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Spiced okra.</p>
                  <p className="text-gray-700 text-sm mt-2">Side <span className="text-primary font-bold">£6.50</span> &nbsp;·&nbsp; Main <span className="text-primary font-bold">£9.95</span></p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Raita Onion or Cucumber</h4>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Yoghurt.</p>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chips</h4>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
              </div>
            </FadeIn>

            {/* Rice */}
            <FadeIn delay={1.0}>
              <h2 className="text-gray-900 mb-10 text-left">Rice</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Boiled Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Special Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£4.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Vegetable Pilau Rice</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
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
              </div>
            </FadeIn>

            {/* Breads */}
            <FadeIn delay={1.1}>
              <h2 className="text-gray-900 mb-10 text-left">Breads</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.00</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Garlic Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Cheese Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Peshwari Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Keema Naan</h4>
                  <p className="text-primary font-bold mt-2">£3.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Chapatti</h4>
                  <p className="text-primary font-bold mt-2">£1.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Plain Paratha</h4>
                  <p className="text-primary font-bold mt-2">£3.95</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Stuffed Paratha</h4>
                  <p className="text-primary font-bold mt-2">£5.50</p>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-semibold mb-2">Tandoori Roti</h4>
                  <p className="text-primary font-bold mt-2">£2.50</p>
                </div>
              </div>
            </FadeIn>

            {/* Allergy Notice */}
            <FadeIn delay={1.2}>
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-center">
                <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                  <span className="font-semibold">Food Allergy Notice:</span> Please ask a member of staff.
                </p>
              </div>
            </FadeIn>

            {/* PDF Download */}
            <FadeIn delay={1.3}>
              <div className="text-center py-4">
                <p className="text-gray-600 mb-6 text-sm md:text-base lg:text-lg">
                  If you&apos;d like to see the PDF version of this menu, please click the button below.
                </p>
                <a
                  href="/pdfs/Cinnamon-Take-Away-Menu.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#6F1E2D] text-white px-6 py-3 hover:bg-[#5a1623] transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM12 17l-4-4h2.5v-4h3v4H16l-4 4z"/>
                  </svg>
                  View PDF Menu
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

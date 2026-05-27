import Footer from '@/components/Footer';
import HomepageSlider from '@/components/HomepageSlider';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cinnamon Indian Cuisine - Best Indian Restaurant in Peel, Isle of Man",
  description: "Discover the best authentic Indian cuisine in Peel, Isle of Man. Cinnamon offers traditional recipes, aromatic spices, warm hospitality, and unforgettable dining experiences. Book your table today!",
  keywords: [
    "best Indian restaurant Peel",
    "Cinnamon Indian Cuisine",
    "authentic Indian food Isle of Man",
    "curry restaurant Peel",
    "Indian dining",
    "restaurant reservations",
    "family dining Peel",
    "traditional Indian recipes",
    "aromatic spices",
    "Nadeem Younus",
    "East Quay",
    "Indian takeaway",
    "private dining",
    "catering services"
  ],
  openGraph: {
    title: "Cinnamon Indian Cuisine - Best Indian Restaurant in Peel, Isle of Man",
    description: "Discover the best authentic Indian cuisine in Peel, Isle of Man. Traditional recipes, aromatic spices, and warm hospitality await you.",
    url: "https://cinnamon-indian-cuisine.vercel.app",
    siteName: "Cinnamon Indian Cuisine",
    images: [
      {
        url: "/homepage-slider/cinnamon-1.jpg",
        width: 1200,
        height: 800,
        alt: "Cinnamon Indian Restaurant - Authentic Indian Dining Experience",
        type: "image/jpeg",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinnamon Indian Cuisine - Best Indian Restaurant in Peel",
    description: "Discover authentic Indian cuisine in Peel, Isle of Man. Traditional recipes, aromatic spices, and warm hospitality.",
    images: ["/homepage-slider/cinnamon-1.jpg"],
  },
  alternates: {
    canonical: "https://cinnamon-indian-cuisine.vercel.app/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Slider Section */}
      <HomepageSlider />

      {/* About Section */}
      <section id="about" className="py-10 md:py-16 lg:py-20 bg-white" aria-labelledby="about-heading">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 id="about-heading" className="font-bold text-gray-900 mb-4 md:mb-6">Cinnamon's Story</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  Cinnamon is a family-run Indian restaurant in Peel, Isle of Man, owned by Nadeem Younus. 
                  Built on a passion for authentic flavours and warm hospitality, Cinnamon blends traditional 
                  Indian recipes with a modern, welcoming setting. Every dish is freshly prepared using 
                  carefully balanced spices, creating food that is both comforting and full of character. 
                  Whether you are dining in or taking away, the focus is always on quality, consistency, 
                  and making every guest feel at home.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="mt-6 md:mt-8">
              <Link 
                href="/about" 
                className="inline-block bg-[#6F1E2D] text-[#ffffff] px-6 py-3 hover:bg-[#5a1623] transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
              >
                Learn More
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

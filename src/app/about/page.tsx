import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Cinnamon - Our Story | Indian Restaurant",
  description: "Learn about Cinnamon's story, our passion for authentic Indian cuisine, and our commitment to excellence.",
  keywords: ["about Cinnamon", "Indian restaurant story", "authentic Indian food", "Indian cuisine", "restaurant history"],
  openGraph: {
    title: "About Cinnamon - Our Story",
    description: "Learn about Cinnamon's story, our passion for authentic Indian cuisine, and our commitment to excellence.",
    url: "https://cinnamon-indian-cuisine.vercel.app/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden" aria-labelledby="about-hero-heading">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/Slider/slider-img-02.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <FadeIn>
              <h1 id="about-hero-heading" className="font-bold text-white mb-3 md:mb-4">
                About Cinnamon
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-white">
                Our story, our passion, our commitment to authentic Indian cuisine
              </p>
            </FadeIn>
          </div>
        </header>
      </section>

      {/* Our Story Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <div className="w-full aspect-square rounded-none overflow-hidden">
                <Image
                  src="/images/outside-restaurant.jpg"
                  alt="Cinnamon Restaurant Exterior"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <h2 className="font-bold text-gray-900 mb-4 md:mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                Cinnamon was created to bring something a little different to Castletown — a place where 
                traditional Indian cooking meets a relaxed, modern dining experience. As a family-run restaurant 
                led by Nadeem Younus, everything we do is rooted in genuine care for both our food and our customers.
              </p>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                From the beginning, the aim has been simple: serve authentic, flavourful dishes using fresh 
                ingredients and time-honoured recipes, while creating an atmosphere where everyone feels welcome. 
                Over time, Cinnamon has grown into a local favourite, known for its friendly service, consistent 
                quality, and the kind of food people come back for again and again.
              </p>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                Whether it is a midweek meal, a weekend catch-up, or a takeaway to enjoy at home, we are proud 
                to be part of the Castletown community.
              </p>
              <div className="mt-6 md:mt-8">
                <Link 
                  href="/menu" 
                  className="inline-block bg-[#6F1E2D] text-[#ffffff] px-6 py-3 hover:bg-[#5a1623] transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
                >
                  View Our Menu
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <FadeIn className="order-1 lg:order-1">
              <h2 className="font-bold text-gray-900 mb-4 md:mb-6">Our Chef</h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                At the heart of Cinnamon is a passion for cooking that goes beyond the plate. Our kitchen is 
                driven by experience, skill, and a deep understanding of traditional Indian flavours, with 
                every dish prepared fresh to order.
              </p>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base lg:text-lg">
                Our chef focuses on balance — blending spices carefully to bring out rich, layered flavours 
                without overpowering the dish. From smoky tandoori specialities to slow-cooked curries, each 
                recipe is crafted with attention to detail and respect for tradition, while still allowing 
                room for a modern touch.
              </p>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                We also understand that everyone's taste is different, which is why many of our dishes can 
                be tailored to suit your preferred level of spice. Whether you enjoy something mild and 
                creamy or bold and fiery, our goal is always the same: to deliver food that is full of 
                flavour and made with care.
              </p>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/reservations" 
                  className="inline-block bg-[#6F1E2D] text-[#ffffff] px-6 py-3 hover:bg-[#5a1623] transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
                >
                  Make a Reservation
                </Link>
                <a 
                  href="https://wa.me/447624253642" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 hover:bg-green-700 transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
                >
                  Send us a WhatsApp
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-2 lg:order-2">
              <div className="w-full aspect-square rounded-none overflow-hidden">
                <Image
                  src="/images/the-chef.jpg"
                  alt="Cinnamon Chef"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-heading mb-6">
            Cinnamon
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Authentic Indian Cuisine
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the rich flavors and aromas of traditional Indian cooking, 
            prepared with love and served with pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/menu"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Menu
            </Link>
            <Link 
              href="/reservations"
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg transition-colors"
            >
              Book Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading text-dark mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to Cinnamon, where every dish tells a story of tradition, 
                passion, and the vibrant culinary heritage of India.
              </p>
              <p className="text-gray-700 mb-6">
                Our chefs bring decades of experience, using authentic spices and 
                time-honored recipes passed down through generations. From the 
                streets of Delhi to the coastal flavors of Goa, we bring the 
                diverse tastes of India to your table.
              </p>
              <Link 
                href="/about"
                className="text-primary hover:text-secondary font-semibold transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-primary/10 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🍛</div>
              <p className="text-xl font-heading text-dark">
                Traditional • Authentic • Delicious
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading text-dark text-center mb-12">
            Featured Dishes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-8 mb-4">
                <div className="text-5xl mb-2">🍗</div>
              </div>
              <h3 className="text-xl font-heading text-dark mb-2">Butter Chicken</h3>
              <p className="text-gray-600">
                Tender chicken in a rich, creamy tomato sauce
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-8 mb-4">
                <div className="text-5xl mb-2">🌶️</div>
              </div>
              <h3 className="text-xl font-heading text-dark mb-2">Lamb Vindaloo</h3>
              <p className="text-gray-600">
                Spicy and tangy Goan-style curry with tender lamb
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-lg p-8 mb-4">
                <div className="text-5xl mb-2">🍤</div>
              </div>
              <h3 className="text-xl font-heading text-dark mb-2">Prawn Curry</h3>
              <p className="text-gray-600">
                Fresh prawns in aromatic coconut-based curry
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

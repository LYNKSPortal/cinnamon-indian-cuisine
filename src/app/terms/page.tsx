import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms and Conditions - Cinnamon | Indian Restaurant",
  description: "Terms and conditions for Cinnamon Indian Restaurant. Read our terms of use for reservations, website usage, and dining services.",
  keywords: ["terms and conditions", "terms of service", "Cinnamon restaurant terms", "reservation terms", "dining policies"],
  openGraph: {
    title: "Terms and Conditions - Cinnamon",
    description: "Terms and conditions for Cinnamon Indian Restaurant.",
    url: "https://cinnamon-indian-cuisine.vercel.app/terms",
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/Slider/slider-img-03.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Terms and Conditions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white">
              Please read our terms carefully
            </p>
          </div>
        </header>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Cinnamon Indian Restaurant. These Terms and Conditions govern your use of our website, our reservation services, and your dining experience at our restaurant. By using our services, you agree to these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reservations</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600"><strong>Booking Requirements:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Reservations can be made online, by phone, or in person</li>
                <li>We require a valid name and contact number for all reservations</li>
                <li>For parties of 8 or more, please call us directly</li>
                <li>Reservations are subject to table availability</li>
              </ul>
              
              <p className="text-gray-600"><strong>Cancellation Policy:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Please cancel at least 2 hours before your reservation time</li>
                <li>Late cancellations or no-shows may affect future booking privileges</li>
                <li>For large parties (8+), please provide 24 hours notice</li>
              </ul>
              
              <p className="text-gray-600"><strong>Arrival Time:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Please arrive within 15 minutes of your reservation time</li>
                <li>Tables will be held for 15 minutes past the reservation time</li>
                <li>After 15 minutes, the reservation may be cancelled</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dining Policies</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600"><strong>Allergies and Dietary Requirements:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Please inform us of any allergies or dietary requirements when booking</li>
                <li>While we take every precaution, we cannot guarantee zero cross-contamination</li>
                <li>Our staff will be happy to provide ingredient information</li>
              </ul>
              
              <p className="text-gray-600"><strong>Children:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Children are welcome at our restaurant</li>
                <li>Parents are responsible for supervising their children</li>
                <li>High chairs are available upon request</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment and Pricing</h2>
            <p className="text-gray-600 mb-4"><strong>Pricing:</strong></p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>All prices displayed include VAT where applicable</li>
              <li>We reserve the right to change prices without prior notice</li>
              <li>Service charges may apply for large parties</li>
            </ul>
            
            <p className="text-gray-600 mb-6"><strong>Payment Methods:</strong></p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>We accept cash, credit/debit cards, and mobile payments</li>
              <li>All payments must be made in Isle of Man currency</li>
              <li>We reserve the right to refuse damaged or invalid payment methods</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Usage</h2>
            <p className="text-gray-600 mb-4">When using our website, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Provide accurate and complete information</li>
              <li>Not use the website for any illegal or unauthorized purpose</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not interfere with the proper working of the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content on this website, including but not limited to text, images, logos, and design, is owned by Cinnamon Indian Restaurant or our content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the fullest extent permitted by law, Cinnamon Indian Restaurant shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability shall not exceed the amount paid for the specific service in question.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
            <p className="text-gray-600 mb-6">
              We shall not be liable for any failure to perform our obligations if such failure is due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, labor disputes, or government regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Isle of Man. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Isle of Man courts.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600"><strong>Cinnamon Indian Restaurant</strong></p>
              <p className="text-gray-600">31 Malew Street, Castletown, IM9 1AD, Isle of Man</p>
              <p className="text-gray-600">Email: info@cinnamon.co.im</p>
              <p className="text-gray-600">Phone: +44 1624 894180</p>
              <p className="text-gray-600">WhatsApp: <a href="https://wa.me/447624253642" target="_blank" rel="noopener noreferrer" className="text-[#6F1E2D] hover:underline">+44 7624 253642</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

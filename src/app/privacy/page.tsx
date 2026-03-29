import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy - Cinnamon | Indian Restaurant",
  description: "Privacy policy for Cinnamon Indian Restaurant. Learn how we collect, use, and protect your personal information when you use our website and services.",
  keywords: ["privacy policy", "data protection", "Cinnamon restaurant privacy", "personal information", "GDPR compliance"],
  openGraph: {
    title: "Privacy Policy - Cinnamon",
    description: "Privacy policy for Cinnamon Indian Restaurant.",
    url: "https://cinnamon-indian-cuisine.vercel.app/privacy",
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/Slider/slider-img-01.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white">
              Your privacy is important to us
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
              Cinnamon ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in a variety of ways, including:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Reservation forms (name, contact details, party size, preferred time)</li>
              <li>Website usage data (IP address, browser type, access times)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Communication with us (emails, phone calls)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Process and confirm restaurant reservations</li>
              <li>Communicate with you about your reservation</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you important updates about our restaurant (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Service providers who assist in operating our website</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-600 mb-6">
              Our website uses cookies to enhance your experience. You can choose to accept or decline cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us:
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

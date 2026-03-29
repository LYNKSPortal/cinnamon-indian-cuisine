import { Metadata } from 'next';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Accessibility - Cinnamon | Indian Restaurant",
  description: "Accessibility statement for Cinnamon Indian Restaurant. Learn about our commitment to making our website and restaurant accessible to everyone.",
  keywords: ["accessibility", "ADA compliance", "inclusive design", "disability access", "Cinnamon restaurant accessibility"],
  openGraph: {
    title: "Accessibility - Cinnamon",
    description: "Accessibility statement for Cinnamon Indian Restaurant.",
    url: "https://cinnamon-indian-cuisine.vercel.app/accessibility",
  },
};

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/Slider/slider-img-05.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
        <header className="relative h-full flex items-center justify-center" style={{ zIndex: 2 }}>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="font-bold text-white mb-3 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Accessibility
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white">
              Committed to accessibility for all
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

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Accessibility</h2>
            <p className="text-gray-600 mb-6">
              At Cinnamon Indian Restaurant, we are committed to ensuring that our website and restaurant facilities are accessible to people with disabilities. We believe everyone should have equal access to our services and information, regardless of their abilities.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Website Accessibility</h2>
            <p className="text-gray-600 mb-4">We strive to make our website accessible by:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Following Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
              <li>Ensuring proper color contrast for text readability</li>
              <li>Providing alternative text for images</li>
              <li>Ensuring keyboard navigation compatibility</li>
              <li>Making content compatible with screen readers</li>
              <li>Using semantic HTML for proper structure</li>
              <li>Providing resizable text without loss of functionality</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Restaurant Accessibility</h2>
            <div className="space-y-4 mb-6">
              <p className="text-gray-600"><strong>Physical Access:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Ground-level entrance with step-free access</li>
                <li>Accessible restroom facilities available</li>
                <li>Wide doorways and aisles for wheelchair access</li>
                <li>Accessible parking spaces nearby</li>
                <li>Lowered counter sections at reception</li>
              </ul>
              
              <p className="text-gray-600"><strong>Dining Accommodations:</strong></p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Wheelchair-accessible tables available</li>
                <li>Large print menus available upon request</li>
                <li>Staff trained to assist customers with disabilities</li>
                <li>Assistance animals welcome in our restaurant</li>
                <li>Flexible seating arrangements to accommodate mobility aids</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Communication Support</h2>
            <p className="text-gray-600 mb-4">We offer various communication support options:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Phone reservations and inquiries</li>
              <li>Email communication for detailed requests</li>
              <li>Staff assistance with menu explanations</li>
              <li>Visual aids for menu items when requested</li>
              <li>Patience and extra time for customers who need it</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-gray-600 mb-4">Our website is designed to work with:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Voice recognition software</li>
              <li>Alternative input devices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Known Accessibility Issues</h2>
            <p className="text-gray-600 mb-6">
              We are continuously working to improve accessibility. If you encounter any issues accessing our website or services, please let us know so we can address them promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Assistance</h2>
            <p className="text-gray-600 mb-6">
              We welcome feedback on the accessibility of our website and restaurant. If you have any questions, concerns, or suggestions, or if you need assistance with accessibility accommodations, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600"><strong>Cinnamon Indian Restaurant</strong></p>
              <p className="text-gray-600">31 Malew Street, Castletown, IM9 1AD, Isle of Man</p>
              <p className="text-gray-600">Email: info@cinnamon.co.im</p>
              <p className="text-gray-600">Phone: +44 1624 894180</p>
              <p className="text-gray-600">WhatsApp: <a href="https://wa.me/447624253642" target="_blank" rel="noopener noreferrer" className="text-[#6F1E2D] hover:underline">+44 7624 253642</a></p>
              <p className="text-gray-600">When contacting us, please specify "Accessibility" in your message</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Please note that some third-party services linked from our website, such as our online ordering platform, may have their own accessibility policies. We encourage you to review their accessibility statements as well.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Commitment</h2>
            <p className="text-gray-600 mb-6">
              We are committed to maintaining and improving accessibility across all aspects of our business. This includes regular testing of our website, staff training on disability awareness, and continuous evaluation of our physical facilities to ensure they meet accessibility standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Improvements</h2>
            <p className="text-gray-600 mb-6">
              We are actively working on further accessibility improvements, including enhanced screen reader compatibility, additional language support, and expanded accessibility features throughout our digital and physical spaces.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

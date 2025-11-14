export default function AboutPage() {
  return (
    <main className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#1C3D8D]">
          About GSTmate
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1C3D8D]">Our Mission</h2>
          <p className="text-gray-700 mb-6" style={{ lineHeight: '1.5' }}>
            GSTmate was created to simplify GST compliance for businesses across India.
            We believe that tax management should be straightforward, accurate, and stress-free.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-[#1C3D8D]">What We Offer</h2>
          <p className="text-gray-700 mb-6" style={{ lineHeight: '1.5' }}>
            Our platform combines powerful automation with intelligent insights to help you:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2" style={{ lineHeight: '1.5' }}>
            <li>Stay compliant with all GST regulations</li>
            <li>Save time on manual calculations and filing</li>
            <li>Reduce errors and avoid penalties</li>
            <li>Get instant answers to GST questions through our AI assistant</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-[#1C3D8D]">Get in Touch</h2>
          <p className="text-gray-700" style={{ lineHeight: '1.5' }}>
            Have questions? Our AI chatbot is available 24/7 to help with GST and finance queries.
            Click the chat icon in the bottom-right corner of your screen!
          </p>
        </div>
      </div>
    </main>
  );
}

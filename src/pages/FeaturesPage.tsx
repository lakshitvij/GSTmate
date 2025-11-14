import { Check } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    'Automated GST calculation for all transaction types',
    'One-click return filing with GSTN integration',
    'Invoice generation with GST compliance',
    'Input Tax Credit (ITC) tracking and reconciliation',
    'Multi-business and multi-GSTIN support',
    'Real-time compliance alerts and reminders',
    'Detailed reports and analytics dashboard',
    'Secure cloud storage for all GST documents',
  ];

  return (
    <main className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#1C3D8D]">
          Powerful Features for GST Management
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
          Everything you need to manage GST compliance efficiently and accurately
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700" style={{ lineHeight: '1.5' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#1C3D8D]">AI-Powered Assistance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Our integrated AI chatbot is here to answer all your GST and finance questions instantly.
            Click the chat icon in the bottom-right corner to get started!
          </p>
        </div>
      </div>
    </main>
  );
}

import { Calculator, FileText, TrendingUp } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#1C3D8D] to-[#2a5ac5] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Simplify Your GST Management</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ lineHeight: '1.5' }}>
            Modern, intelligent GST compliance made easy for businesses of all sizes
          </p>
          <button className="bg-white text-[#1C3D8D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1C3D8D]">
            Why Choose GSTmate?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <Calculator className="h-12 w-12 text-[#1C3D8D] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Calculations</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.5' }}>
                Calculate GST instantly with our smart tools. No manual errors, no hassle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <FileText className="h-12 w-12 text-[#1C3D8D] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Filing</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.5' }}>
                Generate and file returns seamlessly. Stay compliant without the complexity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <TrendingUp className="h-12 w-12 text-[#1C3D8D] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Insights</h3>
              <p className="text-gray-600" style={{ lineHeight: '1.5' }}>
                Track your GST liabilities and claims with live dashboards and reports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

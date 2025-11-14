import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FileText, Calculator, TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ChatBot from './ai_bot/ChatBot';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-[#1C3D8D] text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <FileText className="h-8 w-8" />
                <span className="text-2xl font-bold">GSTmate</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-gray-200 transition">Home</Link>
                <Link to="/features" className="hover:text-gray-200 transition">Features</Link>
                <Link to="/about" className="hover:text-gray-200 transition">About</Link>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="md:hidden pb-4">
                <Link
                  to="/"
                  className="block py-2 hover:text-gray-200 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/features"
                  className="block py-2 hover:text-gray-200 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="block py-2 hover:text-gray-200 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <ChatBot />

        <footer className="bg-[#1C3D8D] text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p>&copy; 2025 GSTmate. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

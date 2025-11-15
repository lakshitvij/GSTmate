import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FileText, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Chat', path: '/chat' },
    { label: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-[#1C3D8D] text-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition">
            <FileText className="h-8 w-8" />
            <span className="text-2xl font-bold">GSTmate</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-[#2a5ac5] rounded-lg transition"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-gray-200 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#2a5ac5]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 hover:text-gray-200 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

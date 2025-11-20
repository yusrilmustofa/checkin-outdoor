'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, Phone, Star } from 'lucide-react';

export default function FloatingNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', href: '/', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'catalog', href: '/catalog', label: 'Catalog', icon: <Package className="w-5 h-5" /> },
    { id: 'packages', href: '/packages', label: 'Packages', icon: <Star className="w-5 h-5" /> },
    { id: 'contact', href: '/contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
  ];

  useEffect(() => {
    if (pathname === '/') setActiveSection('home');
    else if (pathname === '/catalog') setActiveSection('catalog');
    else if (pathname === '/packages') setActiveSection('packages');
    else if (pathname === '/contact') setActiveSection('contact');
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['hero', 'features', 'products', 'cta'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 group"
        >
          <img
            src="/products/icon.jpeg"
            alt="Checkin Outdoor Logo"
            className="w-8 h-8 rounded-full object-cover group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-gray-800">Checkin Outdoor</span>
        </Link>
      </div>

      {/* Floating nav */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-4 space-y-4">
          {navItems.map((item) => (
            <Link key={item.id} href={item.href} className="block group relative" title={item.label}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-green-600 text-white scale-110'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600'
                }`}
              >
                {item.icon}
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {item.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

'use client';

import { Tent, Trees, Users } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import FloatingNav from '@/components/Navigation';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgrounds = [
    '/products/pemandangan.jpg',
    '/products/pemandangan2.jpg',
    '/products/pemandangan3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [backgrounds.length]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={bg}
                alt={`Outdoor Pemandangan ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-600/30 to-green-600/30"></div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-20 text-center text-white px-4">
          <img
            src="/products/icon.jpeg"
            alt="Checkin Outdoor"
            className="w-50 h-50 mx-auto mb-6 rounded-full object-cover"
          />
          <h1 className="text-6xl font-bold mb-4">Checkin Outdoor</h1>
          <p className="text-2xl mb-8 text-gray-100">Sewa Peralatan Outdoor Terbaik Area <b>Turen Malang</b></p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/catalog"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Lihat Katalog
            </Link>
            <Link
              href="/packages"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Pilih Paket
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Mengapa Memilih Kami?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Tent className="w-16 h-16 mx-auto mb-4 text-green-600" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Peralatan Berkualitas</h3>
              <p className="text-gray-600">Semua peralatan kami terawat dengan baik dan berkualitas tinggi untuk keamanan Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Pelayanan Terpercaya</h3>
              <p className="text-gray-600">Tim kami siap membantu Anda memilih peralatan yang tepat untuk kebutuhan outdoor Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <Trees className="w-16 h-16 mx-auto mb-4 text-green-700" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Harga Terjangkau</h3>
              <p className="text-gray-600">Dapatkan harga sewa terbaik dengan kualitas peralatan yang tidak mengecewakan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Produk Populer</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Tenda Camping 4 Orang Double Layer', desc: 'Kapasitas 4 orang, waterproof dan mudah dipasang', price: 'Rp28.000/hari', image: '/products/tenda 4.jpg' },
              { name: 'Sepatu Gunung', desc: 'Sepatu Untuk Hiking', price: 'Rp 20.000/hari', image: '/products/sepatu.jpg' },
              { name: 'Carrier 60L + Cover', desc: 'Cocok untuk hiking', price: 'Rp 25.000/hari', image: '/products/carrier60L.png' },
              { name: 'Hydropack', desc: 'Tas Fleksible untuk hiking', price: 'Rp 10.000/hari', image: '/products/hydro.png' },
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-full h-32 relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                <p className="text-green-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/catalog"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Petualangan Anda?</h2>
         <br />
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
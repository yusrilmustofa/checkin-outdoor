'use client';

import { Search, Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import FloatingNav from '@/components/Navigation';
import { useCart } from '@/context/CartContext';

export default function Catalog() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const products = [
    { id: 1, name: 'Tenda Camping 2 Orang Single Layer', category: 'Tenda', price: 20000, rating: 4.5, desc: 'Tenda kapasitas 2 orang, waterproof dan mudah dipasang', image: '/products/tenda.jpg' },
    { id: 2, name: 'Tenda Camping 4 Orang Double Layer', category: 'Tenda', price: 28000, rating: 4.8, desc: 'Tenda kapasitas 4 orang, waterproof dan mudah dipasang', image: '/products/tenda 4.jpg' },
    { id: 3, name: 'Fly Sheet', category: 'Tenda', price: 10000, rating: 4.6, desc: 'Tenda fly sheet, mudah dipasang dan dipakai', image: '/products/flysheet.jpg' },
    { id: 4, name: 'Carrier 60L + Cover', category: 'Tas', price: 15000, rating: 4.5, desc: 'Carrier 60L dengan cover', image: '/products/carrier60L.png' },
    { id: 5, name: 'Carrier Arei/Consigna', category: 'Tas', price: 25000, rating: 4.7, desc: 'Carrier Arei/Consigna', image: '/products/consina.jpg' },
    { id: 6, name: 'Hydropack', category: 'Tas', price: 10000, rating: 4.4, desc: 'Hydropack', image: '/products/hydro.png' },
    { id: 7, name: 'Daypack', category: 'Tas', price: 10000, rating: 4.5, desc: 'Daypack', image: '/products/daypack.jpeg' },
    { id: 8, name: 'Matras Alumunium', category: 'Semua', price: 10000, rating: 4.5, desc: 'Matras Alumunium', image: '/products/alu.jpg' },
    { id: 9, name: 'Tracking Pole', category: 'Semua', price: 10000, rating: 4.5, desc: 'Tracking Pole', image: '/products/tracking.jpg' },
    { id: 10, name: 'Headlamp LED', category: 'Penerangan', price: 10000, rating: 4.5, desc: 'Headlamp LED', image: '/products/lamp.jpg' },
    { id: 11, name: 'Sepatu Gunung', category: 'Semua', price: 20000, rating: 4.9, desc: 'Sepatu Gunung', image: '/products/sepatu.jpg' },
    { id: 12, name: 'Sleeping Bag', category: 'Alat Tidur', price: 7500, rating: 4.8, desc: 'Sleeping Bag', image: '/products/SB.jpg' },
    { id: 13, name: 'Emergency Blanket', category: 'Alat Tidur', price: 10000, rating: 4.6, desc: 'Emergency Blanket', image: '/products/blanket.jpg' },
    { id: 14, name: 'Lampu Tenda', category: 'Penerangan', price: 10000, rating: 4.7, desc: 'Lampu tenda include baterai', image: '/products/lampu-tenda.png' },
    { id: 15, name: 'Jaket', category: 'Semua', price: 20000, rating: 4.6, desc: 'Jaket Hangat dengan desain modern', image: '/products/jaket.jpg' },
    { id: 16, name: 'Sarung Tangan', category: 'Semua', price: 10000, rating: 4.6, desc: 'Sarung Tangan Hangat', image: '/products/sarungtangan.jpg' },
    { id: 17, name: 'Handwarmer', category: 'Semua', price: 15000, rating: 4.6, desc: 'Penghangat Tangan', image: '/products/hand.jpg' },
    { id: 18, name: 'Cooking Set', category: 'Memasak', price: 10000, rating: 4.6, desc: 'Cooking Set untuk memasak outdoor', image: '/products/cookingset.jpg' },
    { id: 19, name: 'Gas', category: 'Memasak', price: 10000, rating: 4.6, desc: 'Gas untuk memasak outdoor', image: '/products/gas.jpg' },
    { id: 20, name: 'Paket Grill', category: 'Memasak', price: 40000, rating: 4.6, desc: 'Paket Lengkap Grill Outdoor', image: '/products/grill.jpg' },
    { id: 21, name: 'Tripod Bluetooth', category: 'Semua', price: 10000, rating: 4.7, desc: 'Tripod Bluetooth', image: '/products/tripod.jpg' },
    { id: 22, name: 'Meja Lipat', category: 'Semua', price: 15000, rating: 4.7, desc: 'Meja Lipat dengan desain modern', image: '/products/meja.jpg' },
    { id: 23, name: 'Kursi Lipat', category: 'Semua', price: 8000, rating: 4.7, desc: 'Kursi Lipat dengan desain modern', image: '/products/kursi.jpg' },
    { id: 24, name: 'Headlamp Baterai', category: 'Penerangan', price: 8000, rating: 4.7, desc: 'Headlamp Baterai', image: '/products/lamp-baterai.jpg' },
  ];

  const categories = ['Semua', 'Tenda', 'Alat Tidur', 'Tas', 'Memasak', 'Penerangan'];

  const handleAddToCart = (product: any) => {
    addToCart(product, 1, 1); // Default 1 quantity dan 1 rental day
  };

  // Filter products berdasarkan pencarian dan kategori
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <FloatingNav />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-xl text-gray-100">Temukan peralatan outdoor yang Anda butuhkan</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-medium text-gray-700 placeholder-gray-400"
              />
            </div>
            {/* <button className="flex items-center justify-center gap-2 px-6 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
              Filter
            </button> */}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              Ditemukan {filteredProducts.length} produk untuk "{searchTerm}"
            </p>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-bold text-lg">Rp {product.price.toLocaleString('id-ID')}/hari</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors group"
                    title="Tambah ke keranjang"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Tidak ada produk yang ditemukan
            </h3>
            <p className="text-gray-500">
              {searchTerm
                ? `Tidak ada produk yang cocok dengan pencarian "${searchTerm}"`
                : 'Tidak ada produk dalam kategori ini'}
            </p>
          </div>
        )}

        {/* Load More */}
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  Calendar,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';

export default function Cart() {
  const { state, removeFromCart, updateQuantity, updateRentalDays, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative"
        >
          <ShoppingCart className="w-6 h-6" />
          {state.totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
              {state.totalItems}
            </span>
          )}
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Keranjang ({state.totalItems} item)
          </span>
        </button>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Cart Panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Keranjang Belanja
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {state.totalItems > 0 && (
                <p className="text-green-100">
                  {state.totalItems} item • {formatPrice(state.totalPrice)}
                </p>
              )}
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8">
                  <ShoppingCart className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Keranjang Kosong</h3>
                  <p className="text-center mb-6">Tambahkan produk ke keranjang untuk mulai menyewa</p>
                  <Link
                    href="/catalog"
                    onClick={() => setIsOpen(false)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Lihat Katalog
                  </Link>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 mb-1 truncate">{item.name}</h3>
                          {item.category === 'Paket' && (
                            <div className="mb-2">
                              <p className="text-xs font-semibold text-green-700 mb-1">Includes:</p>
                              <div className="bg-green-50 rounded p-2">
                                {item.items && item.items.length > 0 ? (
                                  item.items.map((include, index) => (
                                    <div key={index} className="flex items-start gap-1 text-xs text-gray-700">
                                      <span className="text-green-600 mt-0.5">•</span>
                                      <span>{include.trim()}</span>
                                    </div>
                                  ))
                                ) : (
                                  item.desc.includes(',') ? item.desc.split(',').map((include, index) => (
                                    <div key={index} className="flex items-start gap-1 text-xs text-gray-700">
                                      <span className="text-green-600 mt-0.5">•</span>
                                      <span>{include.trim()}</span>
                                    </div>
                                  )) : (
                                    <div className="flex items-start gap-1 text-xs text-gray-700">
                                      <span className="text-green-600 mt-0.5">•</span>
                                      <span>{item.desc}</span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                          <p className="text-green-600 font-bold">
                            {formatPrice(item.price)}/hari
                          </p>

                          {/* Quantity and Rental Days Controls */}
                          <div className="flex items-center gap-4 mt-3">
                            {/* Quantity */}
                            <div className="flex items-center gap-2 bg-white rounded-lg border-2 border-gray-300 shadow-sm">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 hover:bg-green-100 hover:text-green-700 rounded-l-lg transition-all duration-200 flex items-center justify-center"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-3 py-1.5 font-bold text-sm w-12 text-center bg-gray-100 text-gray-900 border-x border-gray-300">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-green-100 hover:text-green-700 rounded-r-lg transition-all duration-200 flex items-center justify-center"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Rental Days */}
                            <div className="flex items-center gap-2 bg-white rounded-lg border-2 border-gray-300 shadow-sm">
                              <Calendar className="w-4 h-4 text-green-600 ml-2 flex-shrink-0" />
                              <input
                                type="number"
                                min="1"
                                max="30"
                                value={item.rentalDays}
                                onChange={(e) => updateRentalDays(item.id, Math.min(30, Math.max(1, parseInt(e.target.value) || 1)))}
                                className="w-14 px-2 py-1.5 text-sm font-bold text-center bg-gray-100 text-gray-900 border-0 focus:ring-0 focus:bg-white"
                              />
                              <span className="text-xs font-medium text-gray-700 mr-2 bg-green-50 px-2 py-1.5 rounded whitespace-nowrap">hari</span>
                            </div>

                            {/* Remove Button */}
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-all duration-200 ml-auto hover:scale-110"
                              title="Hapus item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Item Total */}
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                              Subtotal:
                              <span className="font-bold text-gray-800 ml-2">
                                {formatPrice(item.price * item.quantity * item.rentalDays)}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-white">
                {/* Total */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-800">Total:</span>
                  <span className="text-2xl font-bold text-green-600">
                    {formatPrice(state.totalPrice)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    Checkout
                    <ChevronRight className="w-5 h-5" />
                  </Link>

                  <button
                    onClick={() => {
                      if (window.confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
                        clearCart();
                      }
                    }}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Kosongkan Keranjang
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
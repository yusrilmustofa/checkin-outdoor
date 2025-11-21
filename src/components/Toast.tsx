'use client';

import { ShoppingCart, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export default function Toast({ message, isVisible, onHide }: ToastProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setTimeout(onHide, 300); // Wait for exit animation
      }, 3000); // Show for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible && !shouldRender) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 transform transition-all duration-300 ${
        shouldRender
          ? 'translate-x-0 opacity-100 scale-100'
          : 'translate-x-full opacity-0 scale-95'
      }`}
    >
      <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] max-w-md">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">Berhasil ditambahkan!</p>
          <p className="text-green-100 text-xs mt-1">{message}</p>
        </div>
        <div className="flex-shrink-0">
          <ShoppingCart className="w-5 h-5 text-green-200" />
        </div>
      </div>
    </div>
  );
}
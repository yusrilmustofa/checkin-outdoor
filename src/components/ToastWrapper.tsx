'use client';

import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Toast from './Toast';

export default function ToastWrapper() {
  const { recentlyAdded, clearRecentlyAdded } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (recentlyAdded) {
      // Small delay to ensure smooth animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [recentlyAdded]);

  const handleHide = () => {
    setIsVisible(false);
    // Clear the recently added after animation completes
    setTimeout(() => {
      clearRecentlyAdded();
    }, 300);
  };

  if (!recentlyAdded) return null;

  const message = recentlyAdded.category === 'Paket'
    ? `${recentlyAdded.name} (Paket) telah ditambahkan ke keranjang`
    : `${recentlyAdded.name} telah ditambahkan ke keranjang`;

  return (
    <Toast
      message={message}
      isVisible={isVisible}
      onHide={handleHide}
    />
  );
}
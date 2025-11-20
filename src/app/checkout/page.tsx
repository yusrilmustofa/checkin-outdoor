"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  ArrowLeft,
  ShoppingCart,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Checkout() {
  const { state, clearCart, addOrder } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    guarantee: "",
    pickupDay: "",
    pickupTime: "",
    needDP: false,
  });
  const [rentalDates, setRentalDates] = useState({
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(Date.now() + 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0], // Default 1 day from tomorrow
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!customerInfo.name.trim()) {
      newErrors.name = "Nama harus diisi";
    }
    if (!customerInfo.phone.trim()) {
      newErrors.phone = "Nomor HP harus diisi";
    }
    if (!customerInfo.address.trim()) {
      newErrors.address = "Alamat harus diisi";
    }
    if (!customerInfo.guarantee.trim()) {
      newErrors.guarantee = "Jaminan harus diisi";
    }
    if (!customerInfo.pickupDay.trim()) {
      newErrors.pickupDay = "Hari pengambilan harus dipilih";
    }
    if (!customerInfo.pickupTime.trim()) {
      newErrors.pickupTime = "Jam pengambilan harus diisi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    const itemsList = state.items
      .map(
        (item) => `• ${item.name} (${item.quantity}x, ${item.rentalDays} hari)`
      )
      .join("\n");

    const message = `🏕️ CHECKIN OUTDOOR 🏕️
Solusi Trabasmu untuk pengalaman alam yang lebih menyenangkan

Silahkan isi data berikut:

Nama : ${customerInfo.name}
Alamat : ${customerInfo.address}
No HP : ${customerInfo.phone}
Barang Sewaan :
${itemsList}
Durasi : ${rentalDates.startDate} - ${rentalDates.endDate}
Jaminan : ${customerInfo.guarantee}
${
  customerInfo.needDP
    ? `DP : ${formatPrice(Math.ceil(state.totalPrice * 0.3))}`
    : "DP : Tidak ada DP"
}

BRI : 058901029374505
BCA: 3170761226
// DHEA BIMANTA PUTRA

${customerInfo.needDP ? "Nb : Sertakan bukti TF" : ""}

Diambil pada :

Hari : ${customerInfo.pickupDay}
Pukul : ${customerInfo.pickupTime}

Total Pembayaran: ${formatPrice(state.totalPrice)}

Terimakasih sudah mempercayakan pengalaman trabasmu pada CheckIn Outdoor☘️`;

    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage();
      const phoneNumber = "6281390957669"; // WhatsApp number from contact page
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

      // Create order
      const order = {
        id: `ORD-${Date.now()}`,
        items: [...state.items],
        customerInfo,
        totalPrice: state.totalPrice,
        orderDate: new Date(),
        status: "pending" as const,
        rentalStartDate: rentalDates.startDate,
        rentalEndDate: rentalDates.endDate,
      };

      // Add order to context
      addOrder(order);

      // Clear cart
      clearCart();

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Show confirmation modal
      showConfirmationModal();
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Terjadi kesalahan saat memproses pesanan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: string,
    value: string | boolean | number
  ) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const showConfirmationModal = () => {
    setShowConfirmation(true);
    // Auto hide modal after 5 seconds and redirect to home
    setTimeout(() => {
      setShowConfirmation(false);
      window.location.href = '/';
    }, 5000);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Keranjang Kosong
            </h2>
            <p className="text-gray-600 mb-8">
              Anda belum memiliki item di keranjang. Silakan tambahkan produk
              terlebih dahulu.
            </p>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
          <h1 className="text-3xl font-bold">Checkout Pemesanan</h1>
          <p className="text-green-100 mt-2">Lengkapi data pemesanan Anda</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
          {/* Customer Information Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
                <User className="w-5 h-5 text-green-600" />
                Informasi Pribadi
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nama *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nomor HP *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="0812-3456-7890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Alamat *
                  </label>
                  <textarea
                    value={customerInfo.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Masukkan alamat lengkap"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Jaminan *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.guarantee}
                    onChange={(e) =>
                      handleInputChange("guarantee", e.target.value)
                    }
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black ${
                      errors.guarantee ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="KTP/SIM/KK/Paspor"
                  />
                  {errors.guarantee && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.guarantee}
                    </p>
                  )}
                </div>
              </div>

              {/* DP Option */}
              <div>
                <br />
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  DP ? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needDP"
                      value="true"
                      checked={customerInfo.needDP === true}
                      onChange={(e) =>
                        handleInputChange("needDP", true)
                      }
                      className="mr-2"
                    />
                    <span className="text-gray-700">Ya, perlu DP (30%)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="needDP"
                      value="false"
                      checked={customerInfo.needDP === false}
                      onChange={(e) => handleInputChange("needDP", false)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Tidak, langsung lunas</span>
                  </label>
                </div>
                {customerInfo.needDP && (
                  <p className="text-sm text-gray-600 mt-2 font-bold">
                    DP: {formatPrice(Math.ceil(state.totalPrice * 0.3))}
                  </p>
                )}
              </div>
            </div>

            {/* Pickup Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
                <Calendar className="w-5 h-5 text-green-600" />
                Informasi Pengambilan
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 text-black">
                    Hari Pengambilan *
                  </label>
                  <select
                    value={customerInfo.pickupDay}
                    onChange={(e) =>
                      handleInputChange("pickupDay", e.target.value)
                    }
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black ${
                      errors.pickupDay ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Pilih hari</option>
                    <option value="Senin">Senin</option>
                    <option value="Selasa">Selasa</option>
                    <option value="Rabu">Rabu</option>
                    <option value="Kamis">Kamis</option>
                    <option value="Jumat">Jumat</option>
                    <option value="Sabtu">Sabtu</option>
                    <option value="Minggu">Minggu</option>
                  </select>
                  {errors.pickupDay && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.pickupDay}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Jam Pengambilan *
                  </label>
                  <input
                    type="time"
                    value={customerInfo.pickupTime}
                    onChange={(e) =>
                      handleInputChange("pickupTime", e.target.value)
                    }
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black ${
                      errors.pickupTime ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.pickupTime && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.pickupTime}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto text-black">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500">
                        {item.quantity}x • {item.rentalDays} hari
                      </p>
                    </div>
                    <span className="font-medium text-gray-800">
                      {formatPrice(
                        item.price * item.quantity * item.rentalDays
                      )}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      {formatPrice(state.totalPrice)}
                    </span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-xs text-green-800">
                    <strong>Informasi Pembayaran:</strong>
                    <br />
                    BRI: 058901029374505
                    <br />
                    BCA: 3170761226
                    <br />
                    a.n. DHEA BIMANTA PUTRA
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Kirim ke WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Data akan dikirim ke WhatsApp untuk konfirmasi pemesanan.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="text-center">
              {/* Success Icon */}
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Pesanan Anda Segera Dikonfirmasi!
              </h3>

              <p className="text-gray-600 mb-6">
                Data pemesanan telah dikirim ke WhatsApp. Tim kami akan segera menghubungi Anda untuk konfirmasi.
              </p>

              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <img
                    src="/products/icon.jpeg"
                    alt="Checkin Outdoor"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Halaman ini akan otomatis tertutup dalam 5 detik...
              </p>

              <button
                onClick={() => {
                  setShowConfirmation(false);
                  window.location.href = '/';
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

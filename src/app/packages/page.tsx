'use client';
import FloatingNav from "@/components/Navigation";
import { Package, Star, ShoppingCart } from "lucide-react";
import { useCart } from '@/context/CartContext';

export default function packages() {
  const { addToCart } = useCart();
  const packages = [
    {
      id: 1,
      name: "Paket Checkin 1",
      desc: "Paket lengkap untuk camping 2 orang dengan Kursi, Meja, dan Tripod",
      price: 25000,
      duration: "1 hari",
      items: ["Kursi 1", "Meja 1 ", "Tripod 1"],
      image: "/products/kursi.jpg",
      popular: false,
    },
    {
      id: 2,
      name: "Paket Checkin 2",
      desc: "Paket lengkap untuk camping 2 orang dengan Kursi, Meja, dan Tripod",
      price: 30000,
      duration: "1 hari",
      items: ["Kursi 2 ", "Meja 1 ", "Tripod 1"],
      image: "/products/meja.jpg",
      popular: true,
    },
    {
      id: 3,
      name: "Paket Checkin 3",
      desc: "Paket lengkap untuk camping dengan Kursi, Meja, Tripod, Nesting, Kompor, Gas, dan Gelas",
      price: 50000,
      duration: "1 hari",
      items: [
        "Kursi 2",
        "Meja 1",
        "Tripod 1",
        "Nesting 1",
        "Kompor 1",
        "Gas 1",
        "Gelas 2",
      ],
      image: "/products/cookingset.jpg",
      popular: false,
    },
    {
      id: 4,
      name: "Paket Pendaki Tektok",
      desc: "Paket untuk para pendaki tektok",
      price: 40000,
      duration: "1 hari",
      items: [
        "Sepatu Gunung 1",
        "Headlamp 1",
        "Tracking Pole 1",
        "Hydropack 1",
      ],
      image: "/products/sepatu.jpg",
      popular: true,
    },
    {
      id: 5,
      name: "Paket Checkin Camp 1",
      desc: "Paket Camping dengan Tenda dan Perlengkapan",
      price: 50000,
      duration: "1 hari",
      items: ["Tenda cap 2 SL 1", "Sleeping Bag 2", "Matras 2", "Lampu Tenda 1"],
      image: "/products/tenda.jpg",
      popular: false,
    },
    {
      id: 6,
      name: "Paket Checkin Camp 2 ",
      desc: "Paket lengkap untuk camping 4 orang",
      price: 80000,
      duration: "1 hari",
      items: ["Tenda cap 4 DL 1", "Sleeping Bag 4", "Matras 4", "Lampu Tenda 1"],
      image: "/products/tenda 4.jpg",
      popular: true,
    },
    {
      id: 7,
      name: "Paket Pendakian 1",
      desc: "Paket Pendakian dengan Tenda dan Perlengkapan",
      price: 100000,
      duration: "1 hari",
      items: ["Tenda cap 2 DL ", "Sleeping Bag 2", "Matras 2", "Lampu Tenda 1","Tas Carrier 60L 2","1 Set Alat Makan"],
      image: "/products/tenda 4.jpg",
      popular: true,
    },
    {
      id: 8,
      name: "Paket Pendakian 2",
      desc: "Paket Pendakian dengan Tenda dan Perlengkapan",
      price: 135000,
      duration: "1 hari",
      items: ["Tenda cap 4 DL ", "Sleeping Bag 4", "Matras 3", "Lampu Tenda 1","Tas Carrier 60L 3","1 Set Alat Makan"],
      image: "/products/tenda 4.jpg",
      popular: true,
    }
  ];

  const handleAddPackageToCart = (pkg: any) => {
    // Create a product object for the package
    const packageProduct = {
      id: pkg.id + 100, // Add 100 to differentiate from regular products
      name: pkg.name,
      category: 'Paket',
      price: pkg.price,
      rating: 4.8,
      desc: pkg.items.join(', '), // Use items array for description
      image: pkg.image,
      items: pkg.items, // Include items array separately
    };

    addToCart(packageProduct, 1, 1); // Default 1 quantity dan 1 rental day
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <FloatingNav />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Paket Penyewaan Checkin Outdoor
          </h1>
          <p className="text-xl text-gray-100">
            Partner terpercaya untuk petualangan outdoor Anda sejak 2022
          </p>
        </div>
      </div>
      {/* Paket Penyewaan Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Paket Penyewaan
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Pilih paket yang sesuai dengan kebutuhan petualangan Anda
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative"
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Populer
                    </span>
                  </div>
                )}

                <div className="h-48 relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Package className="w-8 h-8 mb-2" />
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{pkg.desc}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-green-600">
                        Rp {pkg.price.toLocaleString("id-ID")}
                      </p>
                      <p className="text-sm text-gray-500">{pkg.duration}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">4.8</span>
                      </div>
                      <button
                        onClick={() => handleAddPackageToCart(pkg)}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors group"
                        title="Tambah ke keranjang"
                      >
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Includes:
                    </h4>
                    <div className="space-y-1">
                      {pkg.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Butuh paket custom? Hubungi kami untuk penawaran khusus!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=6281390957669&text=Halo%20Checkin%20Outdoor,%20saya%20mau%20bertanya%20tentang%20paket%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Hubungi untuk Custom Paket
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
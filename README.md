# 🏕️ Checkin Outdoor - Sewa Peralatan Outdoor

**Aplikasi web untuk penyewaan peralatan outdoor terbaik area Turen Malang**

![Checkin Outdoor Logo](/products/icon.jpeg)

## 📋 Deskripsi

Checkin Outdoor adalah platform penyewaan peralatan outdoor yang menyediakan berbagai perlengkapan berkualitas untuk mendukung petualangan Anda. Dari tenda, tas gunung, hingga peralatan memasak outdoor, kami memiliki semua yang Anda butuhkan untuk pengalaman alam yang menyenangkan dan aman.

## ✨ Fitur Utama

### 🛒 **Sistem Belanja Lengkap**
- **Katalog Produk**: Jelajahi berbagai peralatan outdoor dengan kategori terorganisir
- **Keranjang Belanja**: Kelola item sewaan dengan mudah
- **Paket Hemat**: Pilih paket bundling untuk hemat biaya sewa
- **Pencarian & Filter**: Temukan produk yang tepat dengan fitur pencarian dan filter kategori

### 📦 **Manajemen Pesanan**
- **Checkout Mudah**: Proses pemesanan yang sederhana dan user-friendly
- **Opsi DP**: Pilih untuk membayar DP (30%) atau lunas langsung
- **Konfirmasi WhatsApp**: Pesanan langsung terintegrasi dengan WhatsApp
- **Notifikasi Otomatis**: Konfirmasi pesanan real-time

### 🎨 **User Experience**
- **Responsive Design**: Tampilan optimal di desktop, tablet, dan mobile
- **Slideshow Hero**: Tampilan visual menarik dengan gambar outdoor
- **Floating Cart**: Akses keranjang belanja dari halaman mana saja
- **Smooth Animations**: Transisi halus dan interaksi yang responsif

### 📱 **Navigasi & Informasi**
- **Floating Navigation**: Menu navigasi yang selalu terlihat
- **Informasi Lengkap**: Deskripsi detail, rating, dan harga untuk setiap produk
- **Detail Paket**: Lihat semua item yang termasuk dalam setiap paket

## 🛠️ Teknologi

### **Frontend**
- **Next.js 16** - React framework dengan App Router
- **React 19** - Library UI modern dengan hooks
- **TypeScript** - Type safety dan developer experience
- **Tailwind CSS 4** - Utility-first CSS framework

### **State Management**
- **Context API** - Global state untuk cart dan orders
- **Local Storage** - Persistensi data cart dan pesanan
- **useReducer** - State management yang terstruktur

### **UI/UX**
- **Lucide React** - Icon library yang modern dan konsisten
- **Responsive Design** - Mobile-first approach
- **Dark Mode Ready** - Siap untuk implementasi dark mode

## 📁 Struktur Project

```
src/
├── app/                    # Next.js App Router
│   ├── catalog/           # Halaman katalog produk
│   ├── checkout/          # Halaman checkout
│   ├── contact/           # Halaman kontak
│   ├── orders/            # Halaman riwayat pesanan
│   ├── packages/          # Halaman paket bundling
│   ├── layout.tsx         # Root layout dengan providers
│   └── page.tsx           # Halaman beranda
├── components/            # Reusable components
│   ├── Cart.tsx           # Shopping cart component
│   ├── Navigation.tsx     # Floating navigation
│   └── ...
├── context/              # Context providers
│   └── CartContext.tsx    # Cart & order management
└── products/             # Static assets
    └── [image files]
```

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+
- npm atau yarn

### **Installation**

1. **Clone repository**
```bash
git clone <repository-url>
cd checkin-outdoor
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Start development server**
```bash
npm run dev
# atau
yarn dev
```

4. **Open browser**
Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

### **Production Build**

```bash
# Build untuk production
npm run build

# Start production server
npm run start
```

## 📊 Fitur Bisnis

### **Kategori Produk**
- **Tenda**: Single layer, double layer, fly sheet
- **Tas**: Carrier, hydropack, daypack
- **Alat Tidur**: Sleeping bag, emergency blanket, matras
- **Penerangan**: Headlamp, lampu tenda
- **Memasak**: Cooking set, gas, paket grill
- **Lainnya**: Sepatu gunung, jaket, tripod, meja/kursi lipat

### **Paket Bundling**
1. **Paket Checkin 1** - Camping 2 orang basic (Rp25.000/hari)
2. **Paket Checkin 2** - Camping 2 orang extended (Rp30.000/hari)
3. **Paket Checkin 3** - Camping lengkap dengan cooking set (Rp50.000/hari)
4. **Paket Pendaki Tektok** - Gear khusus pendaki (Rp40.000/hari)
5. **Paket Checkin Camp 1** - Camping 2 orang dengan tenda (Rp50.000/hari)
6. **Paket Checkin Camp 2** - Camping 4 orang lengkap (Rp80.000/hari)

### **Sistem Pembayaran**
- **Transfer Bank**: BRI, BCA
- **Opsi DP**: 30% atau lunas langsung
- **Konfirmasi WhatsApp**: Otomatis ke admin

## 🎯 Target Users

- **Pendaki pemula** yang membutuhkan peralatan lengkap
- **Group camping** yang ingin hemat biaya sewa
- **Photographer outdoor** yang butuh gear spesifik
- **Family outing** yang ingin camping bersama
- **Adventure enthusiasts** area Turen Malang dan sekitarnya

## 🔧 Customization

### **Menambah Produk**
Edit file `src/app/catalog/page.tsx`:
```typescript
const products = [
  {
    id: 1,
    name: 'Nama Produk',
    category: 'Kategori',
    price: 20000,
    rating: 4.5,
    desc: 'Deskripsi produk',
    image: '/path/to/image.jpg'
  },
  // ... tambah produk lain
];
```

### **Mengubah Info Kontak**
Edit file `src/app/checkout/page.tsx`:
```typescript
const phoneNumber = "6281234567890"; // Nomor WhatsApp
const bankInfo = {
  bri: "058901029374505",
  bca: "3170761226",
  name: "DHEA BIMANTA PUTRA"
};
```

### **Update Paket**
Edit file `src/app/packages/page.tsx`:
```typescript
const packages = [
  {
    id: 1,
    name: "Nama Paket",
    desc: "Deskripsi paket",
    price: 25000,
    items: ["Item 1", "Item 2", "Item 3"],
    image: "/path/to/image.jpg"
  }
];
```

## 🌟 Highlights

### **Smart Cart System**
- Auto-save ke local storage
- Quantity dan rental day controls
- Package includes visualization
- Real-time price calculation

### **WhatsApp Integration**
- Template pesanan terstruktur
- Auto-format currency (IDR)
- Include customer details
- Package details dalam pesan

### **Responsive Design**
- Mobile-first approach
- Touch-friendly controls
- Optimized images
- Smooth scrolling

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Contact

**Checkin Outdoor**
- 📍 Area: Turen, Malang
- 📱 WhatsApp: +62 813-9095-7669
- 🏦 Bank: BRI 058901029374505, BCA 3170761226
- 👤 a.n. DHEA BIMANTA PUTRA

## 📄 License

Project ini dilindungi oleh hak cipta © 2024 Checkin Outdoor.

---

🏕️ **Checkin Outdoor - Solusi Trabasmu untuk pengalaman alam yang lebih menyenangkan** ☘️
'use client';

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import FloatingNav from "@/components/Navigation";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>
      ),
      title: "Whatsapp",
      info: "+62 813-9095-7669",
      desc: "Hubungi Kami untuk Sewa Peralatan",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
        </svg>
      ),
      title: "Instagram",
      info: "@checkinoutdoor",
      desc: "Follow Instagram Kami",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      info: "Jl. Panglima Sudirman, Turen, Kec. Turen, Kabupaten Malang, Jawa Timur 65175",
      desc: "Temukan Kami di Tempat Ini",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      info: "08:00 - 20:00 WIB",
      desc: "Buka Setiap Hari",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara menyewa peralatan?",
      answer:
        "Anda bisa memesan melalui nomor diatas atau datang langsung ke toko kami. Proses pemesanan mudah dan cepat.",
    },
    {
      question: "Apakah perlu deposit?",
      answer:
        "Ya, kami memerlukan deposit yang akan dikembalikan setelah peralatan dikembalikan dalam kondisi baik.",
    },
    {
      question: "Bagaimana jika peralatan rusak?",
      answer: "Untuk kerusakan ringan bisa ditolerir, namun untuk kerusakan berat akan ada penggantian biaya perbaikan.",
    },
    {
      question: "Apakah ada layanan antar jemput?",
      answer:
        "Ya, kami menyediakan layanan antar jemput untuk area Turen Malang dengan biaya tambahan.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <FloatingNav />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-gray-100">
            Kami siap membantu petualangan outdoor Anda
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {contact.title}
                </h3>
                <p className="text-gray-800 font-medium mb-1">{contact.info}</p>
                <p className="text-gray-500 text-sm">{contact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Social */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Temukan Kami
          </h2>

          {/* Google Maps */}
          <div className="mb-8">
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7250122787445!2d112.417274314777!3d-8.136752994148647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7893b7c5d7e5b9%3A0x1234567890abcdef!2sJl.%20Panglima%20Sudirman%2C%20Turen%2C%20Kec.%20Turen%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur%2065175!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Lokasi Checkin Outdoor"
              ></iframe>
            </div>
            <div className="mt-6 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 mb-2 text-lg">
                    Lokasi Kami
                  </p>
                  <p className="text-gray-600 mb-4">
                    Jl. Panglima Sudirman, Turen, Kec. Turen, Kabupaten Malang,
                    Jawa Timur 65175
                  </p>
                  <a
                    href="https://maps.app.goo.gl/9Fyqyeu73dba6TrQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2"
                  >
                    Buka di Google Maps
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Ikuti Kami
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com/checkinoutdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=6281390957669&text=Halo%20Checkin%20Outdoor,%20saya%20mau%20bertanya%20tentang%20sewa%20peralatan%20outdoor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pertanyaan yang Sering Diajukan
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Segera?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Tim kami siap membantu Anda 24/7 untuk kebutuhan outdoor mendesak
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=6281390957669&text&type=phone_number&app_absent=0"
              className="flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
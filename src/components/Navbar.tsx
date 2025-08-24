"use client"; // State ve event handler (onClick) kullanacağımız için bu satır ZORUNLUDUR.

import Link from "next/link";
import { Menu, X } from "lucide-react"; // Kapatma ikonu için 'X' import edildi.
import { useState } from "react"; // State yönetimi için 'useState' import edildi.
import { motion } from "framer-motion"; // Animasyon için 'motion' import edildi.

export default function Navbar() {
  // Menünün açık (true) veya kapalı (false) durumunu tutan state.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // navLinks dizisini projemizin sayfalarına göre dolduruyoruz.
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Galeri", href: "/galeri" },
    { name: "Ekibimiz", href: "/ekibimiz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    // z-50: Menünün diğer her şeyin üzerinde kalmasını sağlar.
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
          Elara Beauty
        </Link>

        {/* Masaüstü Menüsü (Değişiklik yok) */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Masaüstü Randevu Butonu (Değişiklik yok) */}
        <Link
          href="/randevu"
          className="hidden md:inline-block bg-pink-500 text-white font-medium py-2 px-6 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
        >
          Randevu Al
        </Link>

        {/* Mobil Menü Butonu (Hamburger İkonu) */}
        <button
          className="md:hidden text-gray-800 z-50" // z-50: Açık menünün üzerinde kalması için.
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Tıklandığında state'i tersine çevirir.
        >
          <span className="sr-only">Menüyü aç/kapat</span>
          {/* State'e göre ikonu değiştirir: Açıksa X, kapalıysa Menu */}
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* 
        --------------------
        MOBİL MENÜ PANELİ
        --------------------
        Bu div, sadece mobil görünümde aktiftir ve menü açıldığında görünür.
      */}
      <motion.div
        // Animasyon başlangıç durumu: Görünmez ve ekranın %100 üstünde.
        initial={{ opacity: 0, y: "-100%" }}
        // Animasyon bitiş durumu: 'isMenuOpen' state'ine göre değişir.
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? "0%" : "-100%",
        }}
        // Animasyon geçiş ayarları.
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-screen bg-white md:hidden"
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-3xl font-serif text-gray-800 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)} // Bir linke tıklanınca menüyü otomatik kapatır.
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  // navLinks dizisini projemizin sayfalarına göre dolduruyoruz.
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Galeri", href: "/galeri" },
    { name: "Ekibimiz", href: "/ekibimiz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    // Standart Tailwind sınıfları kullanıldı: bg-white, border-pink-100
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* globals.css'ten gelen .font-serif sınıfı kullanıldı */}
        <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
          Elara Beauty
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* Standart Tailwind sınıfları: text-gray-700, hover:text-pink-600 */}
              <Link
                href={link.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Standart Tailwind sınıfları: bg-pink-500, hover:bg-pink-600 */}
        <Link
          href="/randevu"
          className="hidden md:inline-block bg-pink-500 text-white font-medium py-2 px-6 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
        >
          Randevu Al
        </Link>

        <button className="md:hidden text-gray-800">
          <span className="sr-only">Menüyü aç</span>
          <Menu size={28} />
        </button>
      </nav>
    </header>
  );
}

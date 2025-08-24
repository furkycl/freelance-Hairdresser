import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Galeri", href: "/galeri" },
    { name: "Ekibimiz", href: "/ekibimiz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="bg-arka-plan/80 backdrop-blur-md sticky top-0 z-50 border-b border-ana">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-ikincil">
          Elara Beauty
        </Link>

        {/* Masaüstü Menü */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="font-sans text-metin hover:text-vurgu transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Harekete Geçirici Buton */}
        <Link
          href="/randevu"
          className="hidden md:inline-block bg-vurgu text-white font-sans font-medium py-2 px-6 rounded-full hover:bg-vurgu-dark transition-all duration-300 transform hover:scale-105"
        >
          Randevu Al
        </Link>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden text-ikincil">
          <span className="sr-only">Menüyü aç</span>{" "}
          {/* Ekran okuyucu için metin */}
          <Menu size={28} />
        </button>
      </nav>
    </header>
  );
}

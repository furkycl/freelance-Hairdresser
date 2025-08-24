import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    // Standart Tailwind sınıfları: bg-gray-800, text-white
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            {/* globals.css'ten gelen .font-serif sınıfı */}
            <h3 className="text-2xl font-serif font-bold mb-2">Elara Beauty</h3>
            <p className="text-gray-400">
              Güzelliğinize sanatsal bir dokunuş katmak için buradayız.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Bize Ulaşın</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-pink-300 transition-colors">
                <Mail size={18} />
                <a href="mailto:info@elarabeauty.com">info@elarabeauty.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-pink-300 transition-colors">
                <Phone size={18} />
                <a href="tel:+905551234567">+90 555 123 45 67</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Takip Edin</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="hover:text-pink-300 transition-transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-pink-300 transition-transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Elara Beauty Studio. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

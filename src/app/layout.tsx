import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// DEĞİŞKENLER BURADA, FONKSİYONUN DIŞINDA TANIMLANMALI
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Elara Beauty Studio | Güzelliğinize Sanatsal Dokunuş",
  description: "Modern saç kesimi, renklendirme ve özel gün tasarımları.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Değişkenler dışarıda tanımlandığı için burada sorunsuzca kullanılabilirler
    <html lang="tr" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-arka-plan font-sans text-metin">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

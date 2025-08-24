"use client"; // Animasyon gibi client-side interaktivite için bu satır gerekli.
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Bu dosya SADECE Hero bileşenini dışarı aktarır.
export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-background.jpg"
        alt="Kuaför salonunun modern ve şık iç mekanı"
        fill // layout="fill" yerine Next.js'in yeni standardı 'fill'
        style={{ objectFit: "cover" }} // objectFit artık style objesi içinde
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 z-10"></div>
      <motion.div
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg">
          Güzelliğinize Sanatsal Dokunuş
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
          Deneyimli ekibimiz ve kaliteli ürünlerimizle hayalinizdeki görünüme
          kavuşun.
        </p>
        <Link
          href="/randevu"
          className="mt-8 inline-block bg-pink-500 text-white font-medium py-3 px-10 rounded-full text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Hemen Randevu Al
        </Link>
      </motion.div>
    </section>
  );
}

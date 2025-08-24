"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

// Instagram'dan geliyormuş gibi görünecek sahte resim verileri
const galleryImages = [
  { src: "/insta1.jpg", alt: "Modern balyaj çalışması" },
  { src: "/insta2.jpg", alt: "Şık bir topuz modeli" },
  { src: "/insta3.jpg", alt: "Kısa ve modern saç kesimi" },
  { src: "/insta4.jpg", alt: "Profesyonel gelin makyajı" },
  { src: "/insta5.jpg", alt: "Canlı renkte bir saç boyama işlemi" },
  { src: "/insta6.jpg", alt: "Örgü detaylı özel gün saçı" },
];

export default function InstagramGallery() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
          Bizi Instagram'da Takip Edin
        </h2>
        <Link
          href="#"
          className="text-pink-600 font-bold text-lg hover:underline mb-12 inline-block"
        >
          @elarabeautystudio
        </Link>

        {/* Galeri Grid'i */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-500"
              />
              {/* Resmin üzerine gelince beliren Instagram ikonu */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
                <Instagram className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

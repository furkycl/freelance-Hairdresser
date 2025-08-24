"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Tüm galeri resimlerini kategorileriyle birlikte burada tanımlıyoruz.
// Ana sayfadaki Instagram resimlerini burada da kullanabiliriz.
const allImages = [
  {
    id: 1,
    src: "/hero.jpg",
    category: "Renklendirme",
    alt: "Modern balyaj çalışması",
  },
  {
    id: 2,
    src: "/hero.jpg",
    category: "Topuz",
    alt: "Şık bir topuz modeli",
  },
  {
    id: 3,
    src: "/hero.jpg",
    category: "Kesim",
    alt: "Kısa ve modern saç kesimi",
  },
  {
    id: 4,
    src: "/hero.jpg",
    category: "Makyaj",
    alt: "Profesyonel gelin makyajı",
  },
  {
    id: 5,
    src: "/hero.jpg",
    category: "Renklendirme",
    alt: "Canlı renkte bir saç boyama işlemi",
  },
  {
    id: 6,
    src: "/hero.jpg",
    category: "Topuz",
    alt: "Örgü detaylı özel gün saçı",
  },
  // Daha fazla resim ekleyebiliriz...
  {
    id: 7,
    src: "/hero.jpg",
    category: "Kesim",
    alt: "Salondan bir görünüm",
  },
];

const categories = ["Tümü", "Kesim", "Renklendirme", "Topuz", "Makyaj"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredImages =
    activeCategory === "Tümü"
      ? allImages
      : allImages.filter((image) => image.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Sayfa Başlığı Alanı */}
      <div className="bg-pink-50 py-16 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-serif text-gray-800"
          >
            Portfolyomuz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Sanatımızı ve yeteneğimizi sergilediğimiz çalışmalarımıza göz atın.
          </motion.p>
        </div>
      </div>

      {/* Galeri Alanı */}
      <div className="container mx-auto px-6 py-20">
        {/* Filtre Butonları */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-6 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-pink-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resim Grid'i */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

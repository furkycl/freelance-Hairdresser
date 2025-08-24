"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Lightbox kütüphanesini ve stillerini import ediyoruz
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
  const [open, setOpen] = useState(false); // Lightbox'ın açık/kapalı durumu
  const [currentIndex, setCurrentIndex] = useState(0); // Hangi resmin açılacağı

  const filteredImages =
    activeCategory === "Tümü"
      ? allImages
      : allImages.filter((image) => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Sayfa Başlığı Alanı (Değişiklik yok) */}
      <div className="bg-pink-50 py-16 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            /* ... */ className="text-4xl md:text-5xl font-serif text-gray-800"
          >
            Portfolyomuz
          </motion.h1>
          <motion.p
            /* ... */ className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Sanatımızı ve yeteneğimizi sergilediğimiz çalışmalarımıza göz atın.
          </motion.p>
        </div>
      </div>

      {/* Galeri Alanı */}
      <div className="container mx-auto px-6 py-20">
        {/* Filtre Butonları (Değişiklik yok) */}
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
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
                onClick={() => openLightbox(index)} // Tıklandığında Lightbox'ı açar
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Bileşeni */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={filteredImages}
        index={currentIndex}
      />
    </div>
  );
}

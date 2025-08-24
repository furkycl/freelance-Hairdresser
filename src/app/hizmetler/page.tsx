"use client"; // Animasyon için

import { motion } from "framer-motion";
import { Scissors, Paintbrush, Sparkles, Droplet, Sun } from "lucide-react";
import React from "react";

// Tüm hizmetlerimizi kategorilere ayırarak burada tanımlıyoruz
const serviceCategories = [
  {
    category: "Kesim & Şekillendirme",
    services: [
      { name: "Kadın Saç Kesim", price: "450 TL'den itibaren" },
      { name: "Fön & Şekillendirme", price: "200 TL'den itibaren" },
      { name: "Özel Gün Topuzu", price: "700 TL'den itibaren" },
    ],
    icon: Scissors,
  },
  {
    category: "Renklendirme",
    services: [
      { name: "Dip Boya", price: "500 TL'den itibaren" },
      { name: "Balyaj / Ombre", price: "1500 TL'den itibaren" },
      { name: "Komple Renk Değişimi", price: "1200 TL'den itibaren" },
    ],
    icon: Paintbrush,
  },
  {
    category: "Bakım & Tedaviler",
    services: [
      { name: "Keratin Bakımı", price: "1000 TL'den itibaren" },
      { name: "Saç Botoksu", price: "800 TL'den itibaren" },
      { name: "Nem Terapisi", price: "600 TL'den itibaren" },
    ],
    icon: Droplet,
  },
];

export default function ServicesPage() {
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
            Sunduğumuz Hizmetler
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Alanında uzman ekibimizle, güzelliğinizi ve tarzınızı ön plana
            çıkaracak tüm hizmetler bir arada.
          </motion.p>
        </div>
      </div>

      {/* Hizmet Listesi Alanı */}
      <div className="container mx-auto px-6 py-20">
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-pink-500 mr-4" />
                <h2 className="text-2xl md:text-3xl font-serif text-gray-800">
                  {category.category}
                </h2>
              </div>
              <ul className="divide-y divide-pink-100 border-t border-b border-pink-100">
                {category.services.map((service) => (
                  <li
                    key={service.name}
                    className="flex justify-between items-center py-4 px-2 hover:bg-pink-50 transition-colors"
                  >
                    <span className="text-gray-700">{service.name}</span>
                    <span className="font-medium text-gray-800">
                      {service.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

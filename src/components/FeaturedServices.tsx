"use client"; // Animasyon kullanacağımız için bu gerekli.

import { motion } from "framer-motion";
import { Scissors, Paintbrush, Sparkles } from "lucide-react"; // Şık ikonlarımızı import ediyoruz.
import React from "react"; // Iconları component olarak kullanmak için React'i import edelim.

// Hizmet verilerimizi bir dizi olarak tanımlıyoruz. Bu, kodu daha temiz ve yönetilebilir hale getirir.
const services = [
  {
    icon: Scissors,
    title: "Modern Saç Kesimi",
    description:
      "Yüz şeklinize ve tarzınıza en uygun modern kesimlerle stilinizi yenileyin.",
  },
  {
    icon: Paintbrush,
    title: "Profesyonel Renklendirme",
    description:
      "Balyaj, ombre ve en son trend renklerle saçlarınıza sanatsal bir dokunuş katın.",
  },
  {
    icon: Sparkles,
    title: "Özel Gün Tasarımları",
    description:
      "Düğün, nişan ve özel davetleriniz için unutulmaz saç tasarımları ve makyaj hizmetleri.",
  },
];

export default function FeaturedServices() {
  // Animasyon varyantları: Kartların ekrana giriş animasyonunu kontrol edecek
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Başlangıçta görünmez ve 50px aşağıda
    visible: { opacity: 1, y: 0 }, // Bitişte tamamen görünür ve orijinal pozisyonunda
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
          Hizmetlerimiz
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Güzelliğinizi ortaya çıkarmak için sunduğumuz popüler hizmetlerimize
          göz atın.
        </p>

        {/* Hizmet Kartlarının Bulunduğu Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              // whileInView: Element ekrana girdiğinde animasyonu tetikler.
              whileInView="visible"
              // viewport: Animasyonun sadece bir kere tetiklenmesini sağlar.
              viewport={{ once: true }}
              // transition: Kartların art arda gelmesi için küçük bir gecikme ekler.
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  {/* İkonu dinamik olarak oluşturuyoruz */}
                  <service.icon className="h-8 w-8 text-pink-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

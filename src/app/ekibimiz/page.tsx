"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

// Ekip üyelerinin verilerini burada saklıyoruz
const teamMembers = [
  {
    name: "Selin Yılmaz",
    role: "Kurucu & Usta Stilist",
    image: "/amandalowery.webp",
    bio: "Selin, 15 yılı aşkın tecrübesiyle saç kesimi ve renklendirme sanatında bir uzmandır. Güzellik vizyonunu Elara Beauty'de hayata geçirmiştir.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Beren Kaya",
    role: "Renk Uzmanı",
    image: "/amandalowery.webp",
    bio: "Beren, en son balyaj ve ombre tekniklerinde ustalaşmıştır. Saçınıza en uygun renk tonunu bularak doğal ve ışıltılı bir görünüm kazandırır.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Elif Aydın",
    role: "Genç Stilist & Makyaj Sanatçısı",
    image: "/amandalowery.webp",
    bio: "Elif, dinamik ve modern saç tasarımlarının yanı sıra özel gün makyajı konusundaki yeteneğiyle ekibimizin parlayan yıldızıdır.",
    social: { instagram: "#", linkedin: "#" },
  },
];

export default function TeamPage() {
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
            Profesyonel Ekibimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Güzelliğiniz, sanata tutkuyla bağlı, deneyimli ve güler yüzlü
            ekibimize emanet.
          </motion.p>
        </div>
      </div>

      {/* Ekip Üyeleri Alanı */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-pink-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.instagram}
                  className="text-gray-500 hover:text-pink-500 transition-colors"
                >
                  <Instagram />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-gray-500 hover:text-pink-500 transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

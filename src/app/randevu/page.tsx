"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Instagram } from "lucide-react";
import Link from "next/link";

export default function AppointmentPage() {
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
            Randevu Alın
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Size en uygun zaman için yerinizi ayırtın. Randevu almak için
            aşağıdaki yöntemlerden birini kullanabilirsiniz.
          </motion.p>
        </div>
      </div>

      {/* Randevu Yöntemleri Alanı */}
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Telefonla Arama */}
          <motion.div
            whileHover={{ y: -5 }}
            className="border border-pink-200 p-8 rounded-lg"
          >
            <Phone className="h-12 w-12 mx-auto mb-4 text-pink-500" />
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
              Telefonla Arayın
            </h3>
            <p className="text-gray-600 mb-4">
              En hızlı ve doğrudan yöntem. Hemen arayarak müsaitlik durumu
              hakkında bilgi alın.
            </p>
            <a
              href="tel:+905551234567"
              className="inline-block bg-pink-500 text-white font-medium py-2 px-6 rounded-full hover:bg-pink-600 transition-colors"
            >
              +90 555 123 45 67
            </a>
          </motion.div>

          {/* WhatsApp Mesajı */}
          <motion.div
            whileHover={{ y: -5 }}
            className="border border-pink-200 p-8 rounded-lg"
          >
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-pink-500" />
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
              WhatsApp'tan Yazın
            </h3>
            <p className="text-gray-600 mb-4">
              Müsait olmadığınızda veya yazarak iletişim kurmayı tercih
              ettiğinizde ideal çözüm.
            </p>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white font-medium py-2 px-6 rounded-full hover:bg-green-600 transition-colors"
            >
              Mesaj Gönder
            </a>
          </motion.div>

          {/* Instagram DM */}
          <motion.div
            whileHover={{ y: -5 }}
            className="border border-pink-200 p-8 rounded-lg"
          >
            <Instagram className="h-12 w-12 mx-auto mb-4 text-pink-500" />
            <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
              Instagram'dan Ulaşın
            </h3>
            <p className="text-gray-600 mb-4">
              Çalışmalarımızı inceledikten sonra doğrudan Instagram DM üzerinden
              bize ulaşabilirsiniz.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              @elarabeautystudio
            </a>
          </motion.div>
        </div>
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Randevu iptallerinizi en az 24 saat öncesinden bildirmenizi rica
            ederiz.
          </p>
        </div>
      </div>
    </div>
  );
}

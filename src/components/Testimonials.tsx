"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react"; // Yorumlar için tırnak işareti ikonu

// Yorum verilerini temiz bir şekilde burada tutuyoruz
const testimonials = [
  {
    quote:
      "Hayatımda aldığım en iyi saç kesimiydi! Ekip hem çok profesyonel hem de çok samimi. Kesinlikle tavsiye ederim.",
    name: "Ayşe K.",
  },
  {
    quote:
      "Renk konusunda tam bir sanatçılar. Saçlarım hiç bu kadar sağlıklı ve parlak görünmemişti. Teşekkürler Elara!",
    name: "Fatma S.",
  },
  {
    quote:
      "Düğün saçı ve makyajım için tercih ettim ve sonuç inanılmazdı. Kendimi prensesler gibi hissettim. Herkese öneriyorum.",
    name: "Zeynep T.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-pink-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
          Müşterilerimiz Ne Diyor?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Memnun müşterilerimizden gelen yorumlarla neden doğru adres olduğumuzu
          görün.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-left"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Quote className="h-8 w-8 text-pink-300 mb-4" />
              <p className="text-gray-600 italic mb-6 before:content-['\201C'] after:content-['\201D']">
                {testimonial.quote}
              </p>
              <p className="font-bold text-gray-800 text-right">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

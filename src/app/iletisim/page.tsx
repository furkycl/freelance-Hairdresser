"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

type FormInputs = {
  from_name: string;
  from_email: string;
  message: string;
};

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setIsSending(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // EmailJS'ten aldığın Service ID
        "YOUR_TEMPLATE_ID", // EmailJS'ten aldığın Template ID
        data,
        "YOUR_PUBLIC_KEY" // EmailJS'ten aldığın Public Key (User ID)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSuccess(true);
          setIsSending(false);
          reset(); // Formu temizle
        },
        (err) => {
          console.log("FAILED...", err);
          setIsSuccess(false);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="bg-white">
      {/* Sayfa Başlığı Alanı */}
      <div className="bg-pink-50 py-16 text-center">
        {/* ... (Başlık kısmı diğerleriyle aynı) ... */}
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800">
          Bize Ulaşın
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Sorularınız, önerileriniz veya randevu talepleriniz için buradayız.
        </p>
      </div>

      {/* İletişim Alanı */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sol Taraf: İletişim Bilgileri */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-gray-800">
              İletişim Bilgileri
            </h2>
            <div className="flex items-center text-gray-700">
              <MapPin className="h-6 w-6 mr-4 text-pink-500" />
              <span>Güzellik Caddesi No:12, Beşiktaş, İstanbul</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Phone className="h-6 w-6 mr-4 text-pink-500" />
              <a href="tel:+905551234567" className="hover:text-pink-600">
                +90 555 123 45 67
              </a>
            </div>
            <div className="flex items-center text-gray-700">
              <Mail className="h-6 w-6 mr-4 text-pink-500" />
              <a
                href="mailto:info@elarabeauty.com"
                className="hover:text-pink-600"
              >
                info@elarabeauty.com
              </a>
            </div>
            {/* Buraya bir Google Haritası eklenebilir */}
            <div className="aspect-video w-full bg-gray-200 rounded-lg mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.208154784947!2d29.00359961541093!3d41.04253307929738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a2a0139b8b%3A0x8e57564d36324d45!2sBe%C5%9Fikta%C5%9F!5e0!3m2!1str!2str!4v1672844578135!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Sağ Taraf: İletişim Formu */}
          <div>
            <h2 className="text-2xl font-serif text-gray-800 mb-6">
              Mesaj Gönderin
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="mb-4">
                <label htmlFor="from_name" className="block text-gray-700 mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="from_name"
                  {...register("from_name", {
                    required: "İsim alanı zorunludur.",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                />
                {errors.from_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.from_name.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="from_email"
                  className="block text-gray-700 mb-2"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="from_email"
                  {...register("from_email", {
                    required: "E-posta alanı zorunludur.",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Geçerli bir e-posta adresi girin.",
                    },
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                />
                {errors.from_email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.from_email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: "Mesaj alanı zorunludur.",
                  })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-pink-500 text-white font-medium py-3 px-8 rounded-full hover:bg-pink-600 transition-colors disabled:bg-pink-300"
              >
                {isSending ? "Gönderiliyor..." : "Gönder"}
              </button>
              {isSuccess === true && (
                <p className="text-green-600 mt-4">
                  Mesajınız başarıyla gönderildi!
                </p>
              )}
              {isSuccess === false && (
                <p className="text-red-600 mt-4">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        // Renk paletimiz
        ana: "#F1D4D4", // Toz Pembe
        ikincil: "#36454F", // Antrasit
        vurgu: "#B48F68", // Altın Sarısı
        "vurgu-dark": "#A07E5B", // Vurgu renginin koyu tonu (hover için)
        metin: "#333333", // Koyu Gri Metin
        "arka-plan": "#F8F8F8", // Kırık Beyaz Arka Plan
      },
    },
  },
  plugins: [],
};
export default config;

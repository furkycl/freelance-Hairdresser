import type { Config } from "tailwindcss";

const config: Config = {
  // Bu content kısmı, Tailwind'in hangi dosyaları tarayacağını bilmesi için zorunludur.
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Theme kısmına hiçbir şey eklemiyoruz, varsayılan ayarları kullanacak.
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;

import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <InstagramGallery />
    </main>
  );
}

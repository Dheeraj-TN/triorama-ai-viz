import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import ImageSection from "@/components/ImagesSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#f5f5f5]">
      <Header />
      <Hero />
      <ImageSection />
    </div>
  );
}

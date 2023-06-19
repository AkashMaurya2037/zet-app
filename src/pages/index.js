import Navbar from "../components/Navbar"
import BrandSlider from "@/components/BrandSlider";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (<>
  <Navbar />
  {/* ======================== Hero Section ======================== */}
    <HeroSection />
    {/* ======================== Brands Section ======================== */}
     <BrandSlider />

     <ProductCard />
  </>);
}
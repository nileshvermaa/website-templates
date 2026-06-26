import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Products from "@/components/Products";
import UnifiedPlatform from "@/components/UnifiedPlatform";
import Industry from "@/components/Industry";
import Customers from "@/components/Customers";
import Developer from "@/components/Developer";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <Products />
      <UnifiedPlatform />
      <Industry />
      <Customers />
      <Developer />
      <Insights />
      <CTA />
      <Footer />
    </>
  );
}

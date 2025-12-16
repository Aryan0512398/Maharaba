import Hero from "@/components/Hero";
import StepsSection from "@/components/StepsSection";
import OurServices from "@/components/OurServices";
import SpecialOffers from "@/components/SpecialOffers";
import TrustedByPilgrims from "@/components/TrustedByPilgrims";
import FeaturedPackages from "@/components/FeaturedPackages";
import CompleteUmrahServices from "@/components/CompleteUmrahServices";
import Testimonials from "@/components/Testimonials";
import GuidesResources from "@/components/GuidesResources";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StatsBar from "@/components/process";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <StatsBar />
      <StepsSection />
      <OurServices />
      <SpecialOffers />
      <TrustedByPilgrims />
      <FeaturedPackages />
      <CompleteUmrahServices />
      <Testimonials />
      <GuidesResources />
      <FAQSection />
      <Footer />
    </main>
  );
}

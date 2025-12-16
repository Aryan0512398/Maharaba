import UmrahHero from "@/components/umrah/UmrahHero";
import UmrahPackageCard from "@/components/umrah/UmrahPackageCard";
import WhyChooseUmrah from "@/components/umrah/WhyChooseUmrah";
import Footer from "@/components/Footer";

export default function UmrahPackagesPage() {
  return (
    <main className="bg-white">
      <UmrahHero />

      <section className="px-6 py-6 md:py-12 ">
        <div className="mx-auto grid max-w-[99vw] gap-8 md:grid-cols-3">
          <UmrahPackageCard
            title="Group Umrah Packages"
            description="Join fellow pilgrims in comprehensive guided group experiences"
            image="/image4.png"
            includes={[
              "Shared accommodations",
              "24/7 group coordinator",
              "Group transportation",
              "Professional guide",
              "Ziarath tours included",
            ]}
            price="₹70,000"
            duration="15–20 Days"
            type="Fixed"
            buttonText="Explore Group Packages"
            keyBenefits={[
              "Cost-effective pricing",
              "Social spiritual experience",
              "Expert guidance",
              "Safety in numbers",
            ]}
          />

          <UmrahPackageCard
            title="Short Independent Package"
            description="Pre-curated Umrah packages based on popular customer plans"
            image="/image4.png"
            includes={[
              "Private accommodations",
              "Flexible itinerary",
              "Custom meal plans",
              "Private transportation",
              "Personalized services",
            ]}
            price="₹62,000"
            duration="3–10 Days"
            type="Fixed"
            badge="Most Popular"
            buttonText="Explore Short Packages"
            keyBenefits={[
              "Cost-effective pricing",
              "Social spiritual experience",
              "Expert guidance",
              "Safety in numbers",
            ]}
          />

          <UmrahPackageCard
            title="Build Your Own Umrah Package"
            description="Create a fully personalized Umrah journey"
            image="/image4.png"
            includes={[
              "Choose flights",
              "Select hotels in Makkah & Madinah",
              "Visa processing",
              "Transport options",
              "Add-on services",
            ]}
            price="Custom Pricing"
            duration="Any Duration"
            type="Flexible"
            keyBenefits={[
              "Cost-effective pricing",
              "Social spiritual experience",
              "Expert guidance",
              "Safety in numbers",
            ]}
            buttonText="Start Building Your Package"
          />
        </div>
      </section>

      <WhyChooseUmrah />
      <Footer />
    </main>
  );
}

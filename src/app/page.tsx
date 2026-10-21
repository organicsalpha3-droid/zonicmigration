import React from "react";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import DestinationsExplorer from "@/components/home/DestinationsExplorer";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PermitGallery from "@/components/home/PermitGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OfficesSection from "@/components/home/OfficesSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <DestinationsExplorer />
      <ProcessTimeline />
      <PermitGallery />
      <WhyChooseUs />
      <OfficesSection />
      <CtaBanner />
    </>
  );
}

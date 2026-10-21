import React from "react";
import type { Metadata } from "next";
import DestinationsExplorer from "@/components/home/DestinationsExplorer";
import CtaBanner from "@/components/home/CtaBanner";
import { Globe2, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Destinations — Immigration Across 4 Economic Regions",
  description: "Explore immigration and visa pathways for the UK, Europe, the Gulf & Middle East, Asia, and Oceania with Zonic Migration.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Editorial Header */}
      <section className="bg-[#F7F5F0] pb-16 sm:pb-24 border-b border-[#E7EAEC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Where We Guide
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#29333A] tracking-tight leading-tight">
              Strategic Immigration Destinations Worldwide.
            </h1>

            <p className="text-base sm:text-lg text-[#4A5964] leading-relaxed">
              We focus on countries with stable legal frameworks, vibrant employment ecosystems, and clear routes for skilled professionals, entrepreneurs, students, and families.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-[#29333A]">
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E7EAEC]">
                Gulf & Middle East (3 Hubs)
              </span>
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E7EAEC]">
                Europe (6 Countries)
              </span>
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E7EAEC]">
                Asia (4 Nations)
              </span>
              <span className="bg-white px-3.5 py-1.5 rounded-full border border-[#E7EAEC]">
                Oceania (Australia & NZ)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Explorer Component */}
      <DestinationsExplorer isFullPage={true} />

      <CtaBanner />
    </div>
  );
}

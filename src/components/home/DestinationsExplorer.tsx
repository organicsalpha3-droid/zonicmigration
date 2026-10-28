"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl, DestinationItem } from "@/config/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const REGIONS = [
  "All",
  "Gulf & Middle East",
  "Europe",
  "Asia",
  "Oceania",
] as const;

type SelectedRegion = (typeof REGIONS)[number];

export default function DestinationsExplorer({ isFullPage = false }: { isFullPage?: boolean }) {
  const [selectedRegion, setSelectedRegion] = useState<SelectedRegion>("All");

  const filteredDestinations =
    selectedRegion === "All"
      ? siteConfig.destinations
      : siteConfig.destinations.filter((d) => d.region === selectedRegion);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F7F5F0]" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll variant="up">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Global Destinations
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#29333A] tracking-tight text-balance">
              Explore Key Immigration Hubs
            </h2>
            <p className="text-xs sm:text-base text-[#4A5964] leading-relaxed text-pretty">
              Targeted visa solutions across four prominent economic regions. Explore pathways matching your skills, education, and career aspirations.
            </p>

            {/* Regional Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-3 sm:pt-4">
              {REGIONS.map((region) => {
                const active = selectedRegion === region;
                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`tap-feedback px-3 py-1.5 min-[360px]:px-4 min-[360px]:py-2 rounded-full text-[11px] min-[360px]:text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 ${
                      active
                        ? "bg-[#29333A] text-white shadow-xs"
                        : "bg-white text-[#4A5964] hover:bg-white/80 hover:text-[#111417] border border-[#E7EAEC]"
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Destination Cards Grid with Staggered Entrance & Card Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredDestinations.map((dest, idx) => (
            <RevealOnScroll
              key={dest.id}
              delay={idx * 50}
              variant="up"
              className="h-full"
            >
              <div
                className="group relative h-full bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-4.5 sm:p-6 lg:p-7 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover card-lift flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Hairline Accent */}
                <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/50 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                {/* Ambient Corner Aura */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#A9C1D0]/5 blur-lg pointer-events-none group-hover:bg-[#A9C1D0]/15 transition-all duration-300" />

                <div className="relative z-10">
                  {/* Card Top: Circular Flag + Country + Region */}
                  <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 border border-[#E7EAEC] bg-white overflow-hidden shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-[#A9C1D0] transition-all duration-300">
                      <Image
                        src={`/images/destinations/${dest.code.toLowerCase()}.svg`}
                        alt={`${dest.country} Flag`}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B9EAE] block">
                        {dest.region}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-[#29333A] leading-snug">
                        {dest.country}
                      </h3>
                    </div>
                  </div>

                  {/* Country Overview */}
                  <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed mb-3.5 sm:mb-4 text-pretty">
                    {dest.overview}
                  </p>

                  {/* Key Visa Streams */}
                  <div className="space-y-1.5 pt-1 mb-4 sm:mb-5">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#111417]">
                      Popular Visa Streams:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {dest.popularVisas.map((visa, vIdx) => (
                        <span
                          key={vIdx}
                          className="inline-flex items-center text-[10px] sm:text-[11px] leading-tight bg-white text-[#29333A] px-2 sm:px-2.5 py-1 rounded-md border border-[#E7EAEC] shadow-2xs group-hover:border-[#C5D8E4] transition-colors"
                        >
                          {visa}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-[#E7EAEC]/80 mt-auto">
                  <a
                    href={getWhatsAppUrl(`Hello Zonic Migration, I am interested in immigration pathways for ${dest.country}. Please guide me on current requirements.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-feedback w-full inline-flex items-center justify-between text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors py-1"
                  >
                    <span>Request {dest.country} Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {!isFullPage && (
          <RevealOnScroll variant="up" delay={150}>
            <div className="mt-8 sm:mt-12 text-center">
              <Link
                href="/destinations"
                className="tap-feedback inline-flex items-center gap-2 bg-white text-[#29333A] hover:bg-[#F7F5F0] border border-[#E7EAEC] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 hover:border-[#A9C1D0] sm:hover:-translate-y-0.5 sm:hover:shadow-subtle"
              >
                <span>View All 15 Destination Profiles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl, DestinationItem } from "@/config/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="py-20 bg-[#F7F5F0]" id="destinations">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
              Global Destinations
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#29333A] tracking-tight">
            Explore Key Immigration Hubs
          </h2>
          <p className="text-base text-[#4A5964] leading-relaxed">
            Targeted visa solutions across four prominent economic regions. Explore pathways matching your skills, education, and career aspirations.
          </p>

          {/* Regional Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {REGIONS.map((region) => {
              const active = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
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

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover flex flex-col justify-between overflow-hidden"
            >
              {/* Top Subtle Hairline Accent */}
              <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/50 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

              {/* Ambient Corner Aura */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#A9C1D0]/5 blur-lg pointer-events-none group-hover:bg-[#A9C1D0]/15 transition-all duration-300" />

              <div className="relative z-10">
                {/* Card Top: Circular Flag + Country + Region */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="relative w-12 h-12 rounded-full p-0.5 border border-[#E7EAEC] bg-white overflow-hidden shrink-0 shadow-2xs group-hover:scale-105 group-hover:border-[#A9C1D0] transition-all duration-300">
                    <Image
                      src={`/images/destinations/${dest.code.toLowerCase()}.svg`}
                      alt={`${dest.country} Flag`}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B9EAE]">
                      {dest.region}
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#29333A]">
                      {dest.country}
                    </h3>
                  </div>
                </div>

                {/* Country Overview */}
                <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed mb-4">
                  {dest.overview}
                </p>

                {/* Key Visa Streams */}
                <div className="space-y-1.5 pt-2 mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#111417]">
                    Popular Visa Streams:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dest.popularVisas.map((visa, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-[11px] bg-white text-[#29333A] px-2.5 py-1 rounded-md border border-[#E7EAEC] shadow-2xs group-hover:border-[#C5D8E4] transition-colors"
                      >
                        {visa}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-4 border-t border-[#E7EAEC]/80 mt-auto">
                <a
                  href={getWhatsAppUrl(`Hello Zonic Migration, I am interested in immigration pathways for ${dest.country}. Please guide me on current requirements.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors py-1"
                >
                  <span>Request {dest.country} Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {!isFullPage && (
          <div className="mt-12 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 bg-white text-[#29333A] hover:bg-[#F7F5F0] border border-[#E7EAEC] px-6 py-3 rounded-full text-sm font-semibold transition-all hover:border-[#A9C1D0]"
            >
              <span>View All 15 Destination Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  Briefcase,
  Award,
  GraduationCap,
  Compass,
  TrendingUp,
  Users,
  Home,
  ShieldCheck,
  ArrowRight,
  Info,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-4 h-4 text-[#29333A]" />,
  Award: <Award className="w-4 h-4 text-[#29333A]" />,
  GraduationCap: <GraduationCap className="w-4 h-4 text-[#29333A]" />,
  Compass: <Compass className="w-4 h-4 text-[#29333A]" />,
  TrendingUp: <TrendingUp className="w-4 h-4 text-[#29333A]" />,
  Users: <Users className="w-4 h-4 text-[#29333A]" />,
  Home: <Home className="w-4 h-4 text-[#29333A]" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#29333A]" />,
};

const SERVICE_IMAGES: Record<string, string> = {
  "work-permits": "/images/services/work-permits.webp",
  "skilled-worker": "/images/services/skilled-worker.webp",
  "study-visas": "/images/services/study-visas.webp",
  "visit-visas": "/images/services/visit-visas.webp",
  "business-investor": "/images/services/business-investor.webp",
  "family-dependant": "/images/services/family-dependant.webp",
  "permanent-residency": "/images/services/permanent-residency.webp",
  "citizenship-naturalization": "/images/services/citizenship-naturalization.webp",
};

export default function ServicesGrid({ isFullPage = false }: { isFullPage?: boolean }) {
  return (
    <section className="relative py-20 bg-white border-y border-[#E7EAEC] overflow-hidden" id="services">
      {/* Delicate background pattern overlay */}
      <div className="absolute inset-0 pattern-delicate-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E7EAEC] shadow-2xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
              Our Expertise
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#29333A] tracking-tight">
            Comprehensive Immigration & Visa Pathways
          </h2>
          <p className="text-base text-[#4A5964] leading-relaxed">
            From professional employment permits to permanent settlement, we guide you through each stage with structured, individualized advisory.
          </p>
        </div>

        {/* 8 Service Cards Grid (Image-Led) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.services.map((service, index) => {
            const icon = ICON_MAP[service.iconName] || <Briefcase className="w-4 h-4 text-[#29333A]" />;
            const imageSrc = SERVICE_IMAGES[service.id] || "/images/services/work-permits.webp";

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-5 sm:p-5.5 border border-[#E7EAEC] bg-gradient-to-b from-white via-[#FCFAF7] to-[#F7F5F0] hover:from-white hover:to-[#FAF8F5] transition-all duration-300 hover:border-[#A9C1D0]/70 card-refined card-refined-hover hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Subtle Hairline Accent */}
                <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/40 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                <div className="relative z-10">
                  {/* Clean Photographic Header Banner */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 border border-[#E7EAEC]/90 bg-[#FAF8F5] shadow-2xs">
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/35 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Icon Box */}
                    <div className="absolute top-2.5 left-2.5 z-10 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-xs border border-white/60 flex items-center justify-center shadow-xs">
                      {icon}
                    </div>

                    {/* Stream Number Badge */}
                    <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-mono font-bold text-[#29333A] bg-white/95 backdrop-blur-xs border border-white/60 px-2 py-0.5 rounded shadow-2xs">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-[#29333A] group-hover:text-[#111417] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4A5964] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#E7EAEC]/80 mt-auto">
                  <a
                    href={getWhatsAppUrl(`Hello Zonic Migration, I would like to inquire about ${service.title}. Please provide assessment details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29333A] group-hover:text-[#7B9EAE] transition-colors"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Callout Banner */}
        <div className="mt-12 bg-[#F7F5F0] rounded-xl p-5 border border-[#E7EAEC] flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-[#7B9EAE] shrink-0 mt-0.5" />
          <p className="text-xs text-[#4A5964] leading-relaxed">
            <strong className="text-[#29333A]">Important Regulatory Note:</strong> Service availability and statutory qualification criteria strictly depend on each host country&apos;s sovereign immigration acts, quotas, and current immigration policies. Zonic Migration provides lawful procedural guidance and does not issue or guarantee visa approvals.
          </p>
        </div>

        {!isFullPage && (
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#29333A] hover:text-[#6A8B9E] transition-colors"
            >
              <span>Explore complete breakdown of all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

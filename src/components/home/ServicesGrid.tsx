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

import RevealOnScroll from "@/components/ui/RevealOnScroll";

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
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white border-y border-[#E7EAEC] overflow-hidden" id="services">
      {/* Delicate background pattern overlay */}
      <div className="absolute inset-0 pattern-delicate-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="up">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E7EAEC] shadow-2xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Our Expertise
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#29333A] tracking-tight text-balance">
              Comprehensive Immigration & Visa Pathways
            </h2>
            <p className="text-xs sm:text-base text-[#4A5964] leading-relaxed text-pretty">
              From professional employment permits to permanent settlement, we guide you through each stage with structured, individualized advisory.
            </p>
          </div>
        </RevealOnScroll>

        {/* 8 Service Cards Grid (Image-Led with Staggered Entrance & Card Lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.services.map((service, index) => {
            const icon = ICON_MAP[service.iconName] || <Briefcase className="w-4 h-4 text-[#29333A]" />;
            const imageSrc = SERVICE_IMAGES[service.id] || "/images/services/work-permits.webp";

            return (
              <RevealOnScroll
                key={service.id}
                delay={index * 60}
                variant="up"
                className="h-full"
              >
                <div
                  className="group relative h-full rounded-2xl p-4 sm:p-5 lg:p-5.5 border border-[#E7EAEC] bg-gradient-to-b from-white via-[#FCFAF7] to-[#F7F5F0] hover:from-white hover:to-[#FAF8F5] transition-all duration-350 hover:border-[#A9C1D0]/80 card-refined card-refined-hover card-lift flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Subtle Hairline Accent */}
                  <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/40 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                  <div className="relative z-10">
                    {/* Clean Photographic Header Banner */}
                    <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-3.5 sm:mb-4 border border-[#E7EAEC]/90 bg-[#FAF8F5] shadow-2xs">
                      <Image
                        src={imageSrc}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/35 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Icon Box */}
                      <div className="absolute top-2.5 left-2.5 z-10 w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg bg-white/95 backdrop-blur-xs border border-white/60 flex items-center justify-center shadow-xs">
                        {icon}
                      </div>

                      {/* Stream Number Badge */}
                      <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-mono font-bold text-[#29333A] bg-white/95 backdrop-blur-xs border border-white/60 px-2 py-0.5 rounded shadow-2xs">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-[#29333A] group-hover:text-[#111417] transition-colors leading-snug mb-1.5 sm:mb-2 text-balance">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#4A5964] leading-relaxed mb-3 sm:mb-4 text-pretty">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-[#E7EAEC]/80 mt-auto">
                    <a
                      href={getWhatsAppUrl(`Hello Zonic Migration, I would like to inquire about ${service.title}. Please provide assessment details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#29333A] group-hover:text-[#7B9EAE] tap-feedback transition-colors py-1"
                    >
                      <span>Check Eligibility</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Compliance Callout Banner */}
        <RevealOnScroll variant="up" delay={150}>
          <div className="mt-8 sm:mt-12 bg-[#F7F5F0] rounded-xl p-4 sm:p-5 border border-[#E7EAEC] flex items-start gap-3 max-w-4xl mx-auto shadow-2xs">
            <Info className="w-5 h-5 text-[#7B9EAE] shrink-0 mt-0.5" />
            <p className="text-xs text-[#4A5964] leading-relaxed text-pretty">
              <strong className="text-[#29333A]">Important Regulatory Note:</strong> Service availability and statutory qualification criteria strictly depend on each host country&apos;s sovereign immigration acts, quotas, and current immigration policies. Zonic Migration provides lawful procedural guidance and does not issue or guarantee visa approvals.
            </p>
          </div>
        </RevealOnScroll>

        {!isFullPage && (
          <RevealOnScroll variant="up" delay={200}>
            <div className="mt-8 sm:mt-10 text-center">
              <Link
                href="/services"
                className="tap-feedback inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#29333A] hover:text-[#111417] sm:hover:-translate-y-0.5 sm:hover:shadow-subtle transition-all duration-300 py-2.5 px-5 rounded-full border border-[#E7EAEC] bg-white hover:bg-[#F7F5F0]"
              >
                <span>Explore complete breakdown of all services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}

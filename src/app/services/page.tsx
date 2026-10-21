import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import CtaBanner from "@/components/home/CtaBanner";
import {
  Briefcase,
  Award,
  GraduationCap,
  Compass,
  TrendingUp,
  Users,
  Home,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Immigration Services — Comprehensive Visa Advisory",
  description: "Explore Zonic Migration's 8 comprehensive visa and immigration consultancy service streams, from work permits and skilled workers to permanent residency.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6 text-[#29333A]" />,
  Award: <Award className="w-6 h-6 text-[#29333A]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#29333A]" />,
  Compass: <Compass className="w-6 h-6 text-[#29333A]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#29333A]" />,
  Users: <Users className="w-6 h-6 text-[#29333A]" />,
  Home: <Home className="w-6 h-6 text-[#29333A]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#29333A]" />,
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

export default function ServicesPage() {
  return (
    <div className="pt-20 sm:pt-32">
      {/* Header */}
      <section className="bg-[#F7F5F0] pb-10 sm:pb-16 lg:pb-24 border-b border-[#E7EAEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Our Services
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#29333A] tracking-tight leading-tight">
              Specialized Pathways Tailored to Your Goals.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#4A5964] leading-relaxed">
              We provide structured guidance across 8 primary immigration categories. Every consultation begins with an honest evaluation of your credentials against host nation statutory criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            {siteConfig.services.map((service, index) => {
              const icon = ICON_MAP[service.iconName] || <Briefcase className="w-6 h-6" />;
              const imageSrc = SERVICE_IMAGES[service.id] || "/images/services/work-permits.webp";
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover overflow-hidden transition-all duration-300"
                >
                  {/* Top Subtle Hairline Accent */}
                  <div className="absolute top-0 inset-x-6 sm:inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/60 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                  {/* Ambient Corner Aura */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#A9C1D0]/5 blur-2xl pointer-events-none group-hover:bg-[#A9C1D0]/15 transition-all duration-500" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left: Icon & Main Details */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-all duration-300">
                          {icon}
                        </div>
                        <span className="text-xs font-mono font-bold text-[#7B9EAE] bg-white border border-[#E7EAEC] px-2.5 py-0.5 rounded-md">
                          Stream 0{index + 1}
                        </span>
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#29333A]">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-[#4A5964] leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#111417] mb-2">
                          Key Advisory Components:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-[#29333A] bg-white/70 px-3 py-2 rounded-lg border border-[#E7EAEC]/70">
                              <CheckCircle2 className="w-4 h-4 text-[#7B9EAE] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Preview Image, Who It Is For & Action */}
                    <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-6 lg:p-7 border border-[#E7EAEC] shadow-2xs space-y-4 sm:space-y-5 card-refined group-hover:border-[#C5D8E4] transition-colors">
                      {/* Service Preview Image */}
                      <div className="relative w-full h-36 sm:h-44 rounded-xl overflow-hidden border border-[#E7EAEC] bg-[#FAF8F5] shadow-2xs">
                        <Image
                          src={imageSrc}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 35vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/35 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B9EAE] block mb-1">
                          Ideal Profile:
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-[#29333A] leading-relaxed">
                          {service.bestFor}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#E7EAEC]">
                        <a
                          href={getWhatsAppUrl(`Hello Zonic Migration, I would like to request an assessment for ${service.title}.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#29333A] hover:bg-[#111417] text-white font-medium text-xs sm:text-sm py-3 sm:py-3.5 px-4 sm:px-6 rounded-full transition-all shadow-sm active:scale-95"
                        >
                          <span>Request Assessment via WhatsApp</span>
                          <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Regulatory Notice Banner */}
          <div className="mt-10 sm:mt-16 bg-[#F7F5F0] rounded-2xl p-4.5 sm:p-6 lg:p-8 border border-[#E7EAEC] flex items-start gap-3.5 sm:gap-4 max-w-4xl mx-auto">
            <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B9EAE] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-[#4A5964] leading-relaxed">
              <strong className="text-[#29333A] text-xs sm:text-sm block">
                Statutory Authority Disclaimer
              </strong>
              <p>
                All immigration categories, occupational quotas, points thresholds, and procedural requirements are governed exclusively by sovereign immigration acts and government border controls of the destination country. Zonic Migration is a private consultancy that assists in document preparation and procedural compliance; we never promise or guarantee visa issuance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

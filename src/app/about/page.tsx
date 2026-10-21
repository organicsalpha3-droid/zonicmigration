import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import OfficesSection from "@/components/home/OfficesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CtaBanner from "@/components/home/CtaBanner";
import { Shield, Eye, Lock, CheckCircle2, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Our Ethical Consultancy Philosophy",
  description: "Learn about Zonic Migration's ethical, transparent approach to global immigration guidance, documentation support, and client privacy.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-32">
      {/* Editorial Header */}
      <section className="bg-[#F7F5F0] pb-10 sm:pb-16 lg:pb-24 border-b border-[#E7EAEC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                  About Zonic Migration
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#29333A] tracking-tight leading-tight">
                A Direct, Transparent Approach to Global Mobility.
              </h1>

              <p className="text-xs sm:text-base lg:text-lg text-[#4A5964] leading-relaxed">
                Zonic Migration was founded on the conviction that navigating international immigration should be transparent, methodical, and free from misleading guarantees. We partner with individuals, skilled professionals, students, and families to demystify complex immigration rules and build rigorous application dossiers.
              </p>
            </div>

            {/* Editorial Feature Image */}
            <div className="lg:col-span-5">
              <div className="relative h-56 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E7EAEC] shadow-card group">
                <Image
                  src="/images/editorial/global-mobility.webp"
                  alt="Global Mobility and International Travel"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/70 via-[#111417]/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10px] sm:text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9C1D0]" />
                    <span>Cross-Border Migration</span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#A9C1D0] font-mono tracking-wider font-semibold">EST. GLOBAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover space-y-3.5 sm:space-y-4 overflow-hidden">
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/60 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />
              <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-all duration-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B9EAE]" />
              </div>
              <h3 className="relative z-10 font-display text-lg sm:text-xl font-bold text-[#29333A]">
                100% Uncompromised Integrity
              </h3>
              <p className="relative z-10 text-xs sm:text-sm text-[#4A5964] leading-relaxed">
                We believe in genuine advisory. If a candidate is not eligible under statutory immigration policies, we explain the gaps openly rather than offering false hope.
              </p>
            </div>

            <div className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover space-y-3.5 sm:space-y-4 overflow-hidden">
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/60 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />
              <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-all duration-300">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B9EAE]" />
              </div>
              <h3 className="relative z-10 font-display text-lg sm:text-xl font-bold text-[#29333A]">
                Confidentiality First
              </h3>
              <p className="relative z-10 text-xs sm:text-sm text-[#4A5964] leading-relaxed">
                Your personal credentials, financial disclosures, and family records are handled with rigorous data security and protected client confidentiality at all times.
              </p>
            </div>

            <div className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover space-y-3.5 sm:space-y-4 overflow-hidden">
              <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/60 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />
              <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-all duration-300">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B9EAE]" />
              </div>
              <h3 className="relative z-10 font-display text-lg sm:text-xl font-bold text-[#29333A]">
                Meticulous Verification
              </h3>
              <p className="relative z-10 text-xs sm:text-sm text-[#4A5964] leading-relaxed">
                Most visa refusals occur due to minor documentation inconsistencies. We conduct comprehensive pre-submission audits to maximize compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Detailed */}
      <WhyChooseUs isFullPage={true} />

      {/* Verified Global Offices */}
      <OfficesSection />

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import DestinationOrbit from "./DestinationOrbit";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#F7F5F0] pt-[76px] min-[360px]:pt-[82px] sm:pt-28 lg:pt-36 pb-6 sm:pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-2 xs:gap-3 sm:gap-6 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions (Side-by-side on mobile) */}
          <div className="col-span-7 sm:col-span-7 lg:col-span-6 space-y-2 sm:space-y-6 lg:space-y-8 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-0.5 sm:py-1.5 rounded-full bg-white border border-[#E7EAEC] shadow-2xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#7B9EAE] animate-pulse" />
              <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-medium text-[#4A5964] whitespace-nowrap">
                Trusted Global Advisory
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-[18px] min-[360px]:text-[21px] min-[390px]:text-[24px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#29333A] tracking-tight leading-[1.12] sm:leading-[1.12]">
              {siteConfig.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-[11px] min-[360px]:text-xs sm:text-base lg:text-lg text-[#4A5964] leading-relaxed line-clamp-3 sm:line-clamp-none max-w-xl">
              {siteConfig.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col min-[390px]:flex-row items-stretch min-[390px]:items-center gap-1.5 sm:gap-4 pt-0.5 sm:pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2.5 bg-[#29333A] hover:bg-[#111417] text-white font-medium text-[10px] min-[360px]:text-xs sm:text-sm lg:text-base px-2.5 py-2 min-[360px]:px-4 min-[360px]:py-2.5 sm:px-7 sm:py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-card active:scale-95 whitespace-nowrap"
              >
                <span>Free Assessment</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A9C1D0]" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-white hover:bg-[#F7F5F0] text-[#29333A] font-medium text-[10px] min-[360px]:text-xs sm:text-sm lg:text-base px-2.5 py-1.5 min-[360px]:px-3.5 min-[360px]:py-2 sm:px-7 sm:py-3.5 rounded-full border border-[#E7EAEC] transition-all duration-200 hover:border-[#A9C1D0] whitespace-nowrap"
              >
                <span>Services</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#4A5964]" />
              </Link>
            </div>

            {/* Key Trust Highlights Strip (Desktop & tablet) */}
            <div className="hidden sm:flex pt-4 border-t border-[#E7EAEC]/80 flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#4A5964]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7B9EAE]" />
                <span>100% Confidential Handling</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7B9EAE]" />
                <span>Verified Documentation Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7B9EAE]" />
                <span>UK & Indonesia Verified Offices</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Destination Orbit (Side-by-side with text on mobile) */}
          <div className="col-span-5 sm:col-span-5 lg:col-span-6 flex items-center justify-center">
            <DestinationOrbit />
          </div>

          {/* Key Trust Highlights Strip (Mobile only - placed cleanly beneath the side-by-side row) */}
          <div className="col-span-12 sm:hidden pt-3 border-t border-[#E7EAEC]/80 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-[10px] text-[#4A5964]">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#7B9EAE]" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#7B9EAE]" />
              <span>Verified Docs</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#7B9EAE]" />
              <span>UK & ID Offices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

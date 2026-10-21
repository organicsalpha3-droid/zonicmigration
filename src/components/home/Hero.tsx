"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import DestinationOrbit from "./DestinationOrbit";
import { ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#F7F5F0] pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7EAEC] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#7B9EAE] animate-pulse" />
              <span className="text-xs font-medium text-[#4A5964]">
                Trusted Global Immigration Advisory
              </span>
            </div>

            {/* Main Headline (Inspired by reference layout) */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#29333A] tracking-tight leading-[1.12]">
              {siteConfig.headline}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#4A5964] leading-relaxed max-w-xl">
              {siteConfig.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#29333A] hover:bg-[#111417] text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-card active:scale-95"
              >
                <span>Start Your Free Assessment</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F5F0] text-[#29333A] font-medium text-sm sm:text-base px-7 py-3.5 rounded-full border border-[#E7EAEC] transition-all duration-200 hover:border-[#A9C1D0]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#4A5964]" />
              </Link>
            </div>

            {/* Key Trust Highlights Strip */}
            <div className="pt-4 border-t border-[#E7EAEC]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#4A5964]">
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

          {/* Right Column: Floating Circular Destination Orbit */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <DestinationOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}

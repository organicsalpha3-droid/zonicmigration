"use client";

import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, CheckCircle2, FileSearch, MessagesSquare, FolderCheck, Send } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const STEP_ICONS = [
  <FileSearch key="1" className="w-5 h-5 text-[#29333A]" />,
  <MessagesSquare key="2" className="w-5 h-5 text-[#29333A]" />,
  <FolderCheck key="3" className="w-5 h-5 text-[#29333A]" />,
  <Send key="4" className="w-5 h-5 text-[#29333A]" />,
];

export default function ProcessTimeline({ isFullPage = false }: { isFullPage?: boolean }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-[#E7EAEC]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <RevealOnScroll variant="up">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E7EAEC]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Our Methodology
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#29333A] tracking-tight text-balance">
              A Clear, Structured Four-Step Advisory Process
            </h2>
            <p className="text-xs sm:text-base text-[#4A5964] leading-relaxed text-pretty">
              We simplify global immigration into a transparent, step-by-step roadmap designed to give you clarity and confidence from day one.
            </p>
          </div>
        </RevealOnScroll>

        {/* Process Steps Cards with Staggered Entrance & Card Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {/* Subtle horizontal track connector on desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px border-t border-dashed border-[#E7EAEC] pointer-events-none" />

          {siteConfig.processSteps.map((step, idx) => (
            <RevealOnScroll
              key={step.step}
              delay={idx * 70}
              variant="up"
              className="h-full"
            >
              <div
                className="group relative h-full bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-4.5 sm:p-6 lg:p-7 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover card-lift flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Top Subtle Hairline Accent */}
                <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/50 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                <div className="relative z-10">
                  {/* Step indicator header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/50 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-all duration-300">
                      {STEP_ICONS[idx]}
                    </div>
                    <span className="text-xl sm:text-2xl font-bold font-display text-[#7B9EAE] group-hover:text-[#29333A] transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B9EAE] block mb-1">
                    Step {step.step} • {step.subtitle}
                  </span>

                  <h3 className="font-display text-base sm:text-lg font-bold text-[#29333A] mb-2 sm:mb-3 text-balance leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed mb-4 sm:mb-6 text-pretty">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-[#E7EAEC]/80 mt-auto">
                  <a
                    href={getWhatsAppUrl(`Hello Zonic Migration, I would like to begin Step ${step.step} (${step.title}). Please advise on requirements.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-feedback w-full inline-flex items-center justify-between text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors py-1"
                  >
                    <span>{step.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Simple Customer Journey Banner */}
        <RevealOnScroll variant="up" delay={150}>
          <div className="mt-8 sm:mt-14 max-w-4xl mx-auto bg-gradient-to-b from-white via-[#FCFAF7] to-[#F7F5F0] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-[#E7EAEC] shadow-2xs text-center space-y-3.5 sm:space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7B9EAE]">
              The Journey Roadmap
            </span>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-[#29333A]">
              <span className="bg-white px-3 py-2 sm:px-4 rounded-xl sm:rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors text-center">
                1. Assessment
              </span>
              <span className="bg-white px-3 py-2 sm:px-4 rounded-xl sm:rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors text-center">
                2. Consultation
              </span>
              <span className="bg-white px-3 py-2 sm:px-4 rounded-xl sm:rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors text-center">
                3. Documentation
              </span>
              <span className="bg-white px-3 py-2 sm:px-4 rounded-xl sm:rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors text-center">
                4. Guidance
              </span>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-feedback inline-flex items-center gap-2 bg-[#29333A] hover:bg-[#111417] text-white text-xs sm:text-sm font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-card sm:hover:-translate-y-0.5 active:scale-95"
              >
                <span>Begin Your Free Assessment Today</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

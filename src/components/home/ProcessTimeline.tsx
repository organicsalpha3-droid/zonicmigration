"use client";

import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, CheckCircle2, FileSearch, MessagesSquare, FolderCheck, Send } from "lucide-react";

const STEP_ICONS = [
  <FileSearch key="1" className="w-5 h-5 text-[#29333A]" />,
  <MessagesSquare key="2" className="w-5 h-5 text-[#29333A]" />,
  <FolderCheck key="3" className="w-5 h-5 text-[#29333A]" />,
  <Send key="4" className="w-5 h-5 text-[#29333A]" />,
];

export default function ProcessTimeline({ isFullPage = false }: { isFullPage?: boolean }) {
  return (
    <section className="py-20 bg-white border-t border-[#E7EAEC]" id="process">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E7EAEC]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
              Our Methodology
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#29333A] tracking-tight">
            A Clear, Structured Four-Step Advisory Process
          </h2>
          <p className="text-base text-[#4A5964] leading-relaxed">
            We simplify global immigration into a transparent, step-by-step roadmap designed to give you clarity and confidence from day one.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle horizontal track connector on desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px border-t border-dashed border-[#E7EAEC] pointer-events-none" />

          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Subtle Hairline Accent */}
              <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/50 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

              <div className="relative z-10">
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/50 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-all duration-300">
                    {STEP_ICONS[idx]}
                  </div>
                  <span className="text-2xl font-bold font-display text-[#7B9EAE] group-hover:text-[#29333A] transition-colors">
                    0{step.step}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B9EAE] block mb-1">
                  Step {step.step} • {step.subtitle}
                </span>

                <h3 className="font-display text-lg font-bold text-[#29333A] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[#E7EAEC]/80 mt-auto">
                <a
                  href={getWhatsAppUrl(`Hello Zonic Migration, I would like to begin Step ${step.step} (${step.title}). Please advise on requirements.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors"
                >
                  <span>{step.actionLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Customer Journey Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-b from-white via-[#FCFAF7] to-[#F7F5F0] rounded-3xl p-7 sm:p-9 border border-[#E7EAEC] shadow-2xs text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7B9EAE]">
            The Journey Roadmap
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-[#29333A]">
            <span className="bg-white px-4 py-2 rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors">
              1. Free Assessment
            </span>
            <span className="text-[#A9C1D0]">&rarr;</span>
            <span className="bg-white px-4 py-2 rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors">
              2. Consultation
            </span>
            <span className="text-[#A9C1D0]">&rarr;</span>
            <span className="bg-white px-4 py-2 rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors">
              3. Documentation
            </span>
            <span className="text-[#A9C1D0]">&rarr;</span>
            <span className="bg-white px-4 py-2 rounded-full border border-[#E7EAEC] shadow-2xs hover:border-[#A9C1D0] transition-colors">
              4. Application Guidance
            </span>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#29333A] hover:bg-[#111417] text-white text-xs sm:text-sm font-medium px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-card"
            >
              <span>Begin Your Free Assessment Today</span>
              <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

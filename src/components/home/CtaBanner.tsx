import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-[#E7EAEC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card near footer: Premium Graphite-to-Slate Gradient with Soft Ice-Blue Ambient Lighting & Flowing Translucent Wave Textures */}
        <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-white overflow-hidden bg-gradient-to-br from-[#111417] via-[#1A232A] to-[#253038] border border-white/15 shadow-[0_24px_50px_-12px_rgba(17,20,23,0.45),0_8px_20px_-6px_rgba(41,51,58,0.25),inset_0_1px_1.5px_rgba(255,255,255,0.2),inset_0_-1px_1.5px_rgba(0,0,0,0.3)]">
          {/* Top Subtle Hairline Accent */}
          <div className="absolute top-0 inset-x-8 sm:inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/80 to-transparent" />

          {/* Soft Ice-Blue Ambient Lighting Spotlights */}
          <div className="absolute -top-28 -right-28 w-[420px] h-[420px] bg-[#A9C1D0]/18 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] bg-[#7B9EAE]/14 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-[#8CAABF]/[0.08] rounded-full blur-[90px] pointer-events-none" />

          {/* Elegant Flowing Translucent Wave Textures */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-45">
            <svg
              className="absolute w-full h-full object-cover"
              viewBox="0 0 1000 400"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="cta-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A9C1D0" stopOpacity="0.14" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#7B9EAE" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="cta-wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
                  <stop offset="50%" stopColor="#A9C1D0" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Soft flowing wave 1 */}
              <path
                d="M-50,220 C200,320 400,120 700,240 C850,300 950,200 1050,230 L1050,400 L-50,400 Z"
                fill="url(#cta-wave-grad-1)"
              />
              {/* Delicate translucent wave 2 */}
              <path
                d="M-50,170 C240,270 460,90 740,210 C870,260 970,170 1050,200"
                stroke="url(#cta-wave-grad-2)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              {/* Delicate translucent wave 3 */}
              <path
                d="M-50,280 C180,180 390,300 680,160 C830,95 930,225 1050,175"
                stroke="rgba(169, 193, 208, 0.18)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Flowing Glass Sheen Texture */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-white/[0.04] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-[11px] sm:text-xs text-[#A9C1D0] font-medium shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compliant & Confidential Assessment</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Begin Your Global Relocation With Experienced Guidance
            </h2>

            <p className="text-xs sm:text-base text-[#E7EAEC]/80 leading-relaxed">
              Every successful visa application begins with a rigorous, honest profile assessment. Send us your inquiry via WhatsApp to discuss your eligibility, timelines, and documentation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F7F5F0] hover:bg-white text-[#29333A] font-semibold text-xs sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#29333A]" />
                <span>Start Your Free Assessment</span>
                <ArrowUpRight className="w-4 h-4 text-[#6A8B9E]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

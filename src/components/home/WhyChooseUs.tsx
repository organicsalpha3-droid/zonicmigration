import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { UserCheck, MessageSquare, Files, ShieldCheck, HelpCircle, ArrowUpRight } from "lucide-react";

const PILLARS = [
  {
    title: "Personalized Guidance",
    desc: "Every applicant’s background, career history, and relocation goals are unique. We tailor our recommendations to your specific legal and professional qualifications.",
    icon: <UserCheck className="w-5 h-5 text-[#29333A]" />,
  },
  {
    title: "Clear Communication",
    desc: "No confusing bureaucratic jargon. We explain requirements, realistic processing intervals, and potential roadblocks in straightforward language.",
    icon: <MessageSquare className="w-5 h-5 text-[#29333A]" />,
  },
  {
    title: "Organized Documentation Support",
    desc: "Application refusals most often stem from incomplete or misaligned records. We assist you in collecting, formatting, and auditing your dossier before submission.",
    icon: <Files className="w-5 h-5 text-[#29333A]" />,
  },
  {
    title: "Confidential Handling",
    desc: "Your personal identity documents, financial statements, and biometric details are treated under strict privacy safeguards and protected compliance systems.",
    icon: <ShieldCheck className="w-5 h-5 text-[#29333A]" />,
  },
  {
    title: "Transparent Explanations",
    desc: "We provide an honest assessment of your chances under prevailing statutory rules. We never make ungrounded promises or misrepresent sovereign policies.",
    icon: <HelpCircle className="w-5 h-5 text-[#29333A]" />,
  },
];

export default function WhyChooseUs({ isFullPage = false }: { isFullPage?: boolean }) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white border-t border-[#E7EAEC] overflow-hidden" id="about">
      {/* Delicate background texture */}
      <div className="absolute inset-0 pattern-delicate-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Brand Philosophy */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E7EAEC] shadow-2xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#29333A] tracking-tight leading-tight">
              Ethical Advisory. Grounded in Integrity and Precision.
            </h2>

            <p className="text-xs sm:text-base text-[#4A5964] leading-relaxed">
              At Zonic Migration, we believe immigration consulting should be transparent, methodical, and respectful of every client&apos;s life aspirations. Moving across borders represents a major personal and financial commitment—our duty is to ensure your preparation is rigorous and compliant.
            </p>

            {/* Editorial Advisory Image */}
            <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden border border-[#E7EAEC] shadow-card group">
              <Image
                src="/images/editorial/advisory-meeting.webp"
                alt="Zonic Migration Consultation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/75 via-[#111417]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10px] sm:text-[11px] font-medium tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9C1D0]" />
                  <span>One-on-One Senior Advisory</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-[#A9C1D0] font-mono tracking-wider uppercase font-semibold">Verified Compliance</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed">
              We operate exclusively through direct, personal advisory without unnecessary complexity, automated runarounds, or false guarantees.
            </p>

            {/* Emblem / Badge Card */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-white via-[#FCFAF7] to-[#F7F5F0] rounded-2xl border border-[#E7EAEC] shadow-2xs card-refined flex items-center gap-3.5 sm:gap-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                <Image
                  src="/images/logo-mark.png"
                  alt="Zonic Migration"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-display text-xs sm:text-sm font-bold text-[#29333A]">
                  Direct WhatsApp Assessment
                </h4>
                <p className="text-[11px] sm:text-xs text-[#4A5964]">
                  Connect immediately with our consultancy team for an initial profile evaluation.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#29333A] hover:bg-[#111417] text-white text-xs sm:text-sm font-medium px-6 py-3 sm:px-7 sm:py-3.5 rounded-full transition-all shadow-sm hover:shadow-card active:scale-95"
              >
                <span>Request Your Free Profile Review</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </a>
            </div>
          </div>

          {/* Right Column: 5 Pillars of Consultancy */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7B9EAE] mb-2 sm:mb-4">
              What Guides Every Consultation
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-r from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl p-4 sm:p-6 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_8px_24px_-4px_rgba(41,51,58,0.06)] sm:hover:translate-x-1.5 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle left accent highlight on hover */}
                  <div className="absolute left-0 inset-y-3 w-1 rounded-r-full bg-gradient-to-b from-[#A9C1D0] to-[#7B9EAE] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shrink-0 shadow-2xs transition-all duration-300">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-[#29333A] mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

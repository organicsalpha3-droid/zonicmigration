import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import CtaBanner from "@/components/home/CtaBanner";
import {
  FileSearch,
  MessagesSquare,
  FolderCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our 4-Step Process — Structured Immigration Advisory",
  description: "Learn how Zonic Migration guides your application from Free Assessment to Final Application Guidance with total transparency.",
};

const DETAILED_STEPS = [
  {
    step: 1,
    title: "Free Assessment",
    subtitle: "Understanding Your Profile",
    description: "We evaluate your current qualifications, educational credentials, work experience, age, and destination preferences to establish preliminary legal pathways.",
    deliverables: [
      "Initial eligibility check",
      "Identification of feasible visa classes",
      "Transparent assessment of statutory constraints",
    ],
    clientAction: "Provide accurate resume and brief overview of goals via WhatsApp or consultation form.",
  },
  {
    step: 2,
    title: "Consultation",
    subtitle: "Strategic Option Mapping",
    description: "We conduct an in-depth advisory session to compare viable immigration streams, financial thresholds, official quota limits, and processing timelines.",
    deliverables: [
      "Customized roadmap tailored to your timeline",
      "Cost breakdown and government fee transparency",
      "Analysis of primary applicant and dependent eligibility",
    ],
    clientAction: "Select your preferred pathway and confirm commitment to procedural requirements.",
  },
  {
    step: 3,
    title: "Documentation",
    subtitle: "Rigorous Audit & Portfolio Assembly",
    description: "Our documentation specialists review every supporting certificate, bank confirmation, credential evaluation, and identity document to ensure alignment with statutory standards.",
    deliverables: [
      "Comprehensive document checklist",
      "Format and translation verification",
      "Audit for common discrepancy pitfalls",
    ],
    clientAction: "Gather official records and submit copies for verification.",
  },
  {
    step: 4,
    title: "Application Guidance",
    subtitle: "Submission & Post-Filing Support",
    description: "We guide you through the formal filing process with the designated sovereign portal or embassy, providing assistance with biometrics appointments and follow-up communications.",
    deliverables: [
      "Application dossier review",
      "Embassy / biometrics booking guidelines",
      "Interview preparation guidance where applicable",
    ],
    clientAction: "Attend biometric appointments and await sovereign processing results.",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Editorial Header */}
      <section className="bg-[#F7F5F0] pb-16 sm:pb-24 border-b border-[#E7EAEC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                  Our Process
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#29333A] tracking-tight leading-tight">
                A Four-Step Framework Built on Clarity.
              </h1>

              <p className="text-base sm:text-lg text-[#4A5964] leading-relaxed">
                We remove ambiguity from international immigration. By adhering to a rigorous, structured methodology, we help you prepare a compliant, audit-ready application without unnecessary guesswork.
              </p>
            </div>

            {/* Editorial Feature Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden border border-[#E7EAEC] shadow-card group">
                <Image
                  src="/images/editorial/advisory-meeting.webp"
                  alt="Zonic Migration Advisory Process"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/70 via-[#111417]/15 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9C1D0]" />
                    <span>Methodical Consultation</span>
                  </div>
                  <span className="text-xs text-[#A9C1D0] font-mono tracking-wider font-semibold">STRUCTURED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline Section */}
      <ProcessTimeline isFullPage={true} />

      {/* Detailed Step-by-Step Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#29333A] tracking-tight">
              What to Expect at Each Stage
            </h2>
            <p className="text-base text-[#4A5964]">
              Clear expectations build reliable outcomes. Here is what we deliver and what is required from you at every phase.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {DETAILED_STEPS.map((s) => (
              <div
                key={s.step}
                className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover overflow-hidden transition-all duration-300"
              >
                {/* Top Subtle Hairline Accent */}
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/50 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#29333A] text-white flex items-center justify-center font-bold text-sm">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#29333A]">
                        {s.title}
                      </h3>
                      <span className="text-xs text-[#7B9EAE] font-semibold">
                        {s.subtitle}
                      </span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hello Zonic Migration, I am interested in Step ${s.step} (${s.title}). Please advise on next steps.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors"
                  >
                    <span>Initiate Step {s.step}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-[#4A5964] leading-relaxed mb-6">
                  {s.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E7EAEC]">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111417] mb-2">
                      Our Deliverables:
                    </h4>
                    <ul className="space-y-1.5">
                      {s.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#29333A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#7B9EAE] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#E7EAEC]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111417] mb-1">
                      Applicant Contribution:
                    </h4>
                    <p className="text-xs text-[#4A5964] leading-relaxed">
                      {s.clientAction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

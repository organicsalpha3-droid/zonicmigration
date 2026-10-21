"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ShieldAlert, Eye, Lock, CheckCircle2, X } from "lucide-react";

export default function PermitGallery() {
  const [selectedPermit, setSelectedPermit] = useState<string | null>(null);

  const activeModalPermit = siteConfig.permitSamples.find(
    (p) => p.id === selectedPermit
  );

  return (
    <section className="py-20 bg-[#F7F5F0] border-t border-[#E7EAEC]" id="permits">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
            <Lock className="w-3.5 h-3.5 text-[#7B9EAE]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
              Client Records & Previews
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#29333A] tracking-tight">
            Work Permits & Visas Document Gallery
          </h2>
          <p className="text-base text-[#4A5964] leading-relaxed">
            Previews of genuine work authorizations and residence permits handled by our team. All personal identifying data is permanently redacted to uphold our strict client confidentiality standards.
          </p>
        </div>

        {/* Gallery Grid (Compact 6-Card Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.permitSamples.map((permit) => (
            <div
              key={permit.id}
              className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-3xl p-5 sm:p-6 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover flex flex-col justify-between overflow-hidden cursor-pointer"
              onClick={() => setSelectedPermit(permit.id)}
            >
              {/* Top Subtle Hairline Accent */}
              <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/50 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

              <div className="relative z-10">
                {/* Document Preview Frame */}
                <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F2EFE9] border border-[#E7EAEC] mb-4 group-hover:border-[#A9C1D0] transition-colors shadow-inner">
                  {/* Delicate security grid background */}
                  <div className="absolute inset-0 pattern-delicate-grid opacity-30 pointer-events-none" />

                  <Image
                    src={`/images/permits/${permit.imageFileName}`}
                    alt={`${permit.title} - ${permit.country}`}
                    fill
                    className="object-contain p-2 group-hover:scale-102 transition-transform duration-300 relative z-10"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-20 bg-[#29333A]/20 opacity-0 group-hover:opacity-100 backdrop-blur-2xs flex items-center justify-center transition-opacity">
                    <span className="inline-flex items-center gap-1.5 bg-white text-[#29333A] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Document</span>
                    </span>
                  </div>
                </div>

                {/* Minimal Meta */}
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-bold uppercase tracking-wider text-[#7B9EAE]">
                    {permit.country}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-white border border-[#E7EAEC] text-[#29333A] px-2 py-0.5 rounded-full font-medium shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-[#7B9EAE]" />
                    <span>Redacted</span>
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-[#29333A] group-hover:text-[#111417] leading-snug">
                  {permit.title}
                </h3>
                <p className="text-xs text-[#4A5964] mt-1">
                  {permit.permitType}
                </p>
              </div>

              {/* Redaction Notice */}
              <div className="relative z-10 pt-3 border-t border-[#E7EAEC]/80 mt-4 flex items-center justify-between text-[11px] text-[#4A5964]">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-[#7B9EAE]" />
                  <span>Confidential Data Protected</span>
                </span>
                <span className="text-[#7B9EAE] font-semibold group-hover:translate-x-0.5 transition-transform">
                  View &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal & Privacy Disclosure Notice */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-[#E7EAEC] max-w-4xl mx-auto flex items-start gap-3.5 shadow-2xs">
          <ShieldAlert className="w-5 h-5 text-[#7B9EAE] shrink-0 mt-0.5" />
          <div className="text-xs text-[#4A5964] leading-relaxed space-y-1">
            <p>
              <strong className="text-[#29333A]">Privacy & Authenticity Protocol:</strong> In accordance with global data protection statutes and our client privacy covenants, all identifying information—including full names, facial photos, passport numbers, identification digits, signatures, QR codes, and barcodes—has been permanently redacted prior to publication.
            </p>
            <p className="text-[11px] text-[#4A5964]/80">
              *Displayed documents serve as evidentiary samples of authorized visa categories. Zonic Migration is a consultancy and does not issue permits or imply governmental endorsement.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Document Viewer */}
      {activeModalPermit && (
        <div
          className="fixed inset-0 z-50 bg-[#111417]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPermit(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#E7EAEC] relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPermit(null)}
              className="absolute top-4 right-4 p-2 text-[#4A5964] hover:text-[#111417] rounded-full hover:bg-[#F7F5F0]"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#7B9EAE]">
              <Lock className="w-4 h-4" />
              <span>{activeModalPermit.country} • Confidential Client Document</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#29333A] mb-1">
              {activeModalPermit.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5964] mb-6">
              Official classification: {activeModalPermit.permitType}
            </p>

            <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden bg-[#F7F5F0] border border-[#E7EAEC] mb-6">
              <Image
                src={`/images/permits/${activeModalPermit.imageFileName}`}
                alt={activeModalPermit.title}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A5964] pt-4 border-t border-[#E7EAEC]">
              <p>
                Permanent redaction applied. Official permits are deposited directly with the client.
              </p>
              <button
                type="button"
                onClick={() => setSelectedPermit(null)}
                className="bg-[#29333A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#111417] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

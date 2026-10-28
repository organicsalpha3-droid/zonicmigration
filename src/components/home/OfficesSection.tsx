import React from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { MapPin, Globe2, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function OfficesSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#F7F5F0] border-t border-[#E7EAEC] overflow-hidden" id="offices">
      {/* Delicate background texture */}
      <div className="absolute inset-0 pattern-delicate-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="up">
          <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
              <Globe2 className="w-3.5 h-3.5 text-[#7B9EAE]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Global Presence
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#29333A] tracking-tight text-balance">
              Our Two Official Office Locations
            </h2>
            <p className="text-xs sm:text-base text-[#4A5964] leading-relaxed text-pretty">
              Zonic Migration operates exclusively through two strategic international hubs, coordinating UK, European, and Asia-Pacific immigration operations.
            </p>
          </div>
        </RevealOnScroll>

        {/* The Exactly Two Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {siteConfig.offices.map((office, idx) => {
            const coordinates =
              office.id === "uk-hq"
                ? "51.5074° N, 0.1278° W"
                : "6.2088° S, 106.8456° E";

            return (
              <RevealOnScroll key={office.id} variant="up" delay={idx * 80}>
                <div
                  className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-lift flex flex-col justify-between overflow-hidden h-full"
                >
                  {/* Top Subtle Hairline Accent */}
                  <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/70 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                  {/* Subtle Architectural Coordinate & Grid Watermark (hidden on narrow screens to prevent clash) */}
                  <div className="hidden sm:block absolute top-6 right-6 select-none pointer-events-none text-right">
                    <span className="font-mono text-[10px] tracking-widest text-[#4A5964]/25 uppercase block">
                      {coordinates}
                    </span>
                    <div className="w-16 h-16 mt-1 ml-auto rounded-full border border-[#A9C1D0]/15 border-dashed" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/50 shadow-2xs flex items-center justify-center transition-colors">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#7B9EAE]" />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border shadow-2xs ${
                          office.isHeadquarters
                            ? "bg-[#29333A] text-white border-[#29333A]"
                            : "bg-white text-[#29333A] border-[#E7EAEC]"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            office.isHeadquarters
                              ? "bg-[#A9C1D0] animate-pulse"
                              : "bg-[#7B9EAE]"
                          }`}
                        />
                        <span>{office.type}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#29333A] mb-0.5 sm:mb-1 text-balance">
                      {office.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#7B9EAE] mb-2 sm:mb-3">
                      {office.city}, {office.country}
                    </p>

                    <p className="text-xs sm:text-sm text-[#4A5964] leading-relaxed mb-4 sm:mb-6 text-pretty">
                      {office.note}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 sm:pt-6 border-t border-[#E7EAEC]/80 flex flex-col min-[390px]:flex-row min-[390px]:items-center justify-between gap-2.5">
                    <span className="text-[11px] sm:text-xs text-[#4A5964]">
                      Direct advisory available
                    </span>
                    <a
                      href={getWhatsAppUrl(`Hello Zonic Migration, I am contacting regarding services through your ${office.name} office.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between min-[390px]:justify-start gap-1.5 text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors py-1 tap-feedback active:scale-95"
                    >
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#7B9EAE]" />
                        <span>Connect with Office</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Central Inquiries Strip */}
        <RevealOnScroll variant="fade" delay={120}>
          <div className="mt-8 sm:mt-12 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 text-xs text-[#4A5964] text-center">
            <span className="font-medium text-[#29333A]">Official Support:</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors tap-feedback"
            >
              <Mail className="w-3.5 h-3.5 text-[#7B9EAE]" />
              <span>{siteConfig.email}</span>
            </a>
            <span className="hidden sm:inline text-[#E7EAEC]">&bull;</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors tap-feedback"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#7B9EAE]" />
              <span>WhatsApp: {siteConfig.whatsApp.displayNumber}</span>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import {
  MessageCircle,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
  Send,
  Building2,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState(siteConfig.services[0].title);
  const [selectedDestination, setSelectedDestination] = useState(siteConfig.destinations[0].country);
  const [clientName, setClientName] = useState("");

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = `Hello Zonic Migration, I would like to request a free immigration assessment for ${selectedDestination} regarding ${selectedService}.${
      clientName ? ` My name is ${clientName}.` : ""
    } Please guide me through the next steps.`;

    window.open(getWhatsAppUrl(customMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-24 sm:pt-32">
      {/* Editorial Header */}
      <section className="bg-[#F7F5F0] pb-16 sm:pb-24 border-b border-[#E7EAEC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7EAEC]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                Contact Us
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#29333A] tracking-tight leading-tight">
              Start Your Free Assessment With Our Advisors.
            </h1>

            <p className="text-base sm:text-lg text-[#4A5964] leading-relaxed">
              We connect directly with clients through our verified UK and Indonesia offices. Reach out via WhatsApp for immediate assessment routing, or review our office locations below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Direct Contact Channels Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-14">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover flex items-center justify-between transition-all duration-300 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#7B9EAE]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B9EAE] block mb-0.5">
                    Official WhatsApp
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-[#29333A]">
                    {siteConfig.whatsApp.displayNumber}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#29333A] group-hover:text-[#7B9EAE] transition-colors">
                <span className="hidden sm:inline">Connect on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover flex items-center justify-between transition-all duration-300 shadow-2xs"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/60 group-hover:bg-[#EAF2F6] flex items-center justify-center shadow-2xs transition-colors">
                  <Mail className="w-5 h-5 text-[#7B9EAE]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7B9EAE] block mb-0.5">
                    Direct Email Inquiries
                  </span>
                  <span className="font-display text-base sm:text-lg font-bold text-[#29333A]">
                    {siteConfig.email}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#29333A] group-hover:text-[#7B9EAE] transition-colors">
                <span className="hidden sm:inline">Send Mail</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Instant WhatsApp Assessment Dispatcher */}
            <div className="lg:col-span-6 relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#E7EAEC] card-refined overflow-hidden shadow-card">
              {/* Top Subtle Hairline Accent */}
              <div className="absolute top-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-[#A9C1D0]/70 to-transparent" />
              {/* Corner Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#A9C1D0]/8 blur-xl pointer-events-none" />

              <div className="relative z-10 flex items-center gap-2.5 mb-6 text-[#29333A]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E7EAEC] flex items-center justify-center shadow-2xs">
                  <MessageCircle className="w-5 h-5 text-[#7B9EAE]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    Fast Assessment Dispatcher
                  </h3>
                  <span className="text-xs text-[#4A5964]">
                    Direct connection to our immigration team
                  </span>
                </div>
              </div>

              <form onSubmit={handleWhatsAppRedirect} className="relative z-10 space-y-5">
                <div>
                  <label
                    htmlFor="clientName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#111417] mb-2"
                  >
                    Your Full Name (Optional)
                  </label>
                  <input
                    id="clientName"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-[#E7EAEC] rounded-xl px-4 py-3 text-sm text-[#29333A] placeholder-[#4A5964]/60 focus:outline-none focus:border-[#29333A] focus:ring-1 focus:ring-[#29333A] shadow-2xs transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceSelect"
                    className="block text-xs font-bold uppercase tracking-wider text-[#111417] mb-2"
                  >
                    Select Visa / Service Stream
                  </label>
                  <select
                    id="serviceSelect"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-[#E7EAEC] rounded-xl px-4 py-3 text-sm text-[#29333A] focus:outline-none focus:border-[#29333A] focus:ring-1 focus:ring-[#29333A] shadow-2xs transition-all"
                  >
                    {siteConfig.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="destSelect"
                    className="block text-xs font-bold uppercase tracking-wider text-[#111417] mb-2"
                  >
                    Target Destination Country
                  </label>
                  <select
                    id="destSelect"
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full bg-white border border-[#E7EAEC] rounded-xl px-4 py-3 text-sm text-[#29333A] focus:outline-none focus:border-[#29333A] focus:ring-1 focus:ring-[#29333A] shadow-2xs transition-all"
                  >
                    {siteConfig.destinations.map((d) => (
                      <option key={d.id} value={d.country}>
                        {d.country} ({d.region})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Pre-fill Preview */}
                <div className="bg-white/90 p-4 rounded-xl border border-[#E7EAEC] text-xs text-[#4A5964] space-y-1 shadow-2xs">
                  <span className="font-semibold text-[#29333A] block">
                    Pre-filled WhatsApp Message:
                  </span>
                  <p className="italic">
                    &ldquo;Hello Zonic Migration, I would like to request a free immigration assessment for {selectedDestination} regarding {selectedService}.{clientName ? ` My name is ${clientName}.` : ""} Please guide me through the next steps.&rdquo;
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#29333A] hover:bg-[#111417] text-white font-semibold text-sm py-4 px-6 rounded-full transition-all shadow-sm hover:shadow-card active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#A9C1D0]" />
                  <span>Send Free Assessment on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>

              <div className="relative z-10 mt-6 pt-5 border-t border-[#E7EAEC] flex items-center gap-2 text-xs text-[#4A5964]">
                <ShieldCheck className="w-4 h-4 text-[#7B9EAE] shrink-0" />
                <span>Your contact data is treated strictly under our privacy policy.</span>
              </div>
            </div>

            {/* Right: Exactly Two Verified Offices */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5F0] border border-[#E7EAEC] mb-3 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-[#7B9EAE]" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7B9EAE]">
                    Two Verified Locations
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#29333A]">
                  Official Global Offices
                </h2>
                <p className="text-sm text-[#4A5964] mt-2 leading-relaxed">
                  Zonic Migration maintains exactly two official premises. Unverified third-party representatives or locations not listed here are not authorized by Zonic Migration.
                </p>
              </div>

              <div className="space-y-6">
                {siteConfig.offices.map((office) => {
                  const coordinates =
                    office.id === "uk-hq"
                      ? "51.5074° N, 0.1278° W"
                      : "6.2088° S, 106.8456° E";

                  return (
                    <div
                      key={office.id}
                      className="group relative bg-gradient-to-b from-white via-[#FCFAF7] to-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E7EAEC] hover:border-[#A9C1D0]/80 card-refined card-refined-hover space-y-4 overflow-hidden"
                    >
                      {/* Top Subtle Hairline Accent */}
                      <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#A9C1D0]/60 to-transparent group-hover:via-[#7B9EAE] transition-all duration-300" />

                      {/* Coordinates watermark */}
                      <span className="absolute top-4 right-6 font-mono text-[9px] tracking-widest text-[#4A5964]/25 uppercase pointer-events-none">
                        {coordinates}
                      </span>

                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-white border border-[#E7EAEC] group-hover:border-[#A9C1D0]/50 shadow-2xs flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-[#7B9EAE]" />
                          </div>
                          <h4 className="font-display text-lg font-bold text-[#29333A]">
                            {office.name}
                          </h4>
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

                      <div className="relative z-10 text-xs sm:text-sm text-[#4A5964] space-y-1 pl-12">
                        <p className="font-medium text-[#29333A]">
                          {office.city}, {office.country}
                        </p>
                        <p>{office.note}</p>
                      </div>

                      <div className="relative z-10 pt-3 border-t border-[#E7EAEC]/80 pl-12 flex items-center justify-between">
                        <span className="text-xs text-[#4A5964]">
                          Support: Monday – Friday
                        </span>
                        <a
                          href={getWhatsAppUrl(`Hello Zonic Migration, I am contacting your ${office.name} office.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#29333A] hover:text-[#7B9EAE] transition-colors"
                        >
                          <span>Message Office</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Notice regarding third parties */}
              <div className="bg-[#F7F5F0] rounded-xl p-4 border border-[#E7EAEC] text-xs text-[#4A5964] leading-relaxed">
                <strong className="text-[#29333A]">Official Advisory Notice:</strong> Please note that Zonic Migration does not operate any office in Qatar. Qatar immigration matters are handled remotely via our UK and Indonesia advisory teams.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

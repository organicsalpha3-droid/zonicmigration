import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { MapPin, MessageCircle, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E7EAEC] pt-16 pb-12 text-[#29333A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <Image
                  src="/images/logo-mark.png"
                  alt="Zonic Migration Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-[#29333A]">
                  Zonic <span className="text-[#6A8B9E] font-medium">Migration</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#6A8B9E] font-semibold -mt-0.5">
                  Immigration Consultancy
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#4A5964] max-w-sm leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#4A5964]/80 max-w-sm leading-relaxed">
              Providing personalized, transparent, and structured immigration advisory services across the UK, Europe, the Gulf, Asia, and Oceania.
            </p>

            {/* Direct Contact Badges: WhatsApp & Email */}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#F7F5F0] hover:bg-[#EAF2F6] border border-[#E7EAEC] text-[#29333A] text-xs font-semibold px-4 py-2 rounded-full transition-colors w-fit group"
              >
                <MessageCircle className="w-4 h-4 text-[#7B9EAE] group-hover:text-[#29333A] transition-colors" />
                <span>WhatsApp: {siteConfig.whatsApp.displayNumber}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#4A5964]" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2.5 bg-[#F7F5F0] hover:bg-[#EAF2F6] border border-[#E7EAEC] text-[#29333A] text-xs font-semibold px-4 py-2 rounded-full transition-colors w-fit group"
              >
                <Mail className="w-4 h-4 text-[#7B9EAE] group-hover:text-[#29333A] transition-colors" />
                <span>Email: {siteConfig.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#4A5964]" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111417]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#4A5964]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#111417] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111417]">
              Key Services
            </h4>
            <ul className="space-y-2 text-sm text-[#4A5964]">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="hover:text-[#111417] transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#6A8B9E] hover:underline"
                >
                  View All 8 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Global Offices (Exactly Two Offices) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111417]">
              Office Locations
            </h4>
            <div className="space-y-3">
              {siteConfig.offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-[#F7F5F0] p-3 rounded-lg border border-[#E7EAEC]"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#29333A]">
                    <MapPin className="w-3.5 h-3.5 text-[#7B9EAE] shrink-0" />
                    <span>{office.name}</span>
                    <span className="text-[10px] text-[#6A8B9E] font-normal">
                      ({office.type})
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5964] mt-1 pl-5">
                    {office.city}, {office.country}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compliance and Legal Disclaimer Banner */}
        <div className="pt-8 border-t border-[#E7EAEC] text-xs text-[#4A5964] leading-relaxed">
          <div className="flex items-start gap-2.5 bg-[#F7F5F0] p-4 rounded-xl border border-[#E7EAEC] mb-6">
            <ShieldCheck className="w-5 h-5 text-[#7B9EAE] shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong className="text-[#29333A]">Compliance Notice:</strong>{" "}
              {siteConfig.legalDisclaimer}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-[#4A5964]/80">
            <p>
              &copy; {new Date().getFullYear()} Zonic Migration. All rights reserved.
            </p>
            <p className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3">
              <span>United Kingdom (HQ)</span>
              <span>&bull;</span>
              <span>Indonesia (Branch)</span>
              <span>&bull;</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#6A8B9E] hover:text-[#29333A] hover:underline transition-colors"
              >
                {siteConfig.email}
              </a>
              <span>&bull;</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A8B9E] hover:text-[#29333A] hover:underline transition-colors"
              >
                WhatsApp: {siteConfig.whatsApp.displayNumber}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

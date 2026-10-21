"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E7EAEC] shadow-xs py-2.5 sm:py-3"
            : "bg-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo-mark.png"
                alt="Zonic Migration Ribbon Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-xl font-bold tracking-tight text-[#29333A] leading-tight">
                Zonic <span className="text-[#6A8B9E] font-medium">Migration</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6A8B9E] font-semibold -mt-0.5">
                Immigration Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#111417] font-semibold"
                      : "text-[#4A5964] hover:text-[#111417]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#29333A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp Consultation Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#29333A] hover:bg-[#1C242A] text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              <span>Free Assessment</span>
              <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
            </a>
          </div>

          {/* Mobile Menu Trigger (44x44px touch area) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-white/90 border border-[#E7EAEC] flex items-center justify-center text-[#29333A] hover:bg-white hover:text-[#111417] active:scale-95 transition-all shadow-2xs"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-[#111417]/50 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sliding Panel */}
          <div className="relative z-10 bg-[#F7F5F0] border-b border-[#E7EAEC] shadow-2xl px-5 pt-4 pb-6 animate-in slide-in-from-top duration-300 max-h-[92vh] overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E7EAEC]/80 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative w-7 h-7 shrink-0">
                  <Image
                    src="/images/logo-mark.png"
                    alt="Zonic Migration"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-display text-base font-bold text-[#29333A]">
                  Zonic <span className="text-[#6A8B9E] font-medium">Migration</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl bg-white border border-[#E7EAEC] flex items-center justify-center text-[#4A5964] hover:text-[#111417] active:scale-95 transition-all shadow-2xs"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-1.5 mb-5">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-white text-[#29333A] shadow-xs border border-[#E7EAEC]"
                        : "text-[#4A5964] hover:bg-white/60 hover:text-[#111417]"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-colors ${isActive ? "text-[#7B9EAE]" : "text-[#4A5964]/40"}`} />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Drawer Actions & Contact */}
            <div className="pt-4 border-t border-[#E7EAEC] space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#29333A] hover:bg-[#111417] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-sm active:scale-98 transition-all"
              >
                <span>Start Free WhatsApp Assessment</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </a>

              <div className="flex items-center justify-between text-[11px] text-[#4A5964] px-1 pt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#29333A] underline underline-offset-2"
                >
                  {siteConfig.email}
                </a>
                <span>UK & Indonesia Offices</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

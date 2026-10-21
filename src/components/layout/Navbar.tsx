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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E7EAEC] shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo-mark.png"
              alt="Zonic Migration Ribbon Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#29333A] leading-tight">
              Zonic <span className="text-[#6A8B9E] font-medium">Migration</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#6A8B9E] font-semibold -mt-0.5">
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

        {/* Right Action: WhatsApp Consultation Button (VisaFlow Pill Style) */}
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

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#29333A] hover:text-[#111417] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5F0] border-b border-[#E7EAEC] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white text-[#111417] font-semibold shadow-xs"
                      : "text-[#4A5964] hover:bg-white/60 hover:text-[#111417]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#E7EAEC]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#29333A] text-white text-sm font-medium py-3 rounded-xl shadow-sm"
              >
                <span>Start Free Assessment on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#A9C1D0]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import React, { useState } from "react";
import { getWhatsAppUrl } from "@/config/site";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3">
      {/* Pop-up bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#29333A] py-2.5 px-4 rounded-2xl shadow-card border border-[#E7EAEC] text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>Need visa assessment? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#4A5964] hover:text-[#111417] ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Zonic Migration on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#29333A] hover:bg-[#111417] text-white rounded-full shadow-hover transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A9C1D0] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#8CAABF]"></span>
        </span>
        <MessageCircle className="w-6 h-6 text-[#A9C1D0] group-hover:text-white transition-colors" />
      </a>
    </div>
  );
}

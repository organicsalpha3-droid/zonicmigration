"use client";

import React from "react";
import Image from "next/image";

interface DestinationOrb {
  id: string;
  image: string;
  alt: string;
  sizeClasses: string;
  imageSizes: string;
  position: {
    top: string;
    left: string;
  };
  animationClass: string;
  animationDelay: string;
  zIndex: number;
}

const DESTINATION_ORBS: DestinationOrb[] = [
  {
    id: "london",
    image: "/images/destinations/photos/london.webp",
    alt: "London Tower Bridge over Thames",
    sizeClasses: "w-[60px] h-[60px] sm:w-[76px] sm:h-[76px] lg:w-[94px] lg:h-[94px]",
    imageSizes: "(max-width: 640px) 60px, (max-width: 1024px) 76px, 94px",
    position: { top: "4%", left: "14%" },
    animationClass: "animate-float-orb-1",
    animationDelay: "0s",
    zIndex: 14,
  },
  {
    id: "paris",
    image: "/images/destinations/photos/paris.webp",
    alt: "Paris Eiffel Tower vista",
    sizeClasses: "w-[66px] h-[66px] sm:w-[84px] sm:h-[84px] lg:w-[102px] lg:h-[102px]",
    imageSizes: "(max-width: 640px) 66px, (max-width: 1024px) 84px, 102px",
    position: { top: "8%", left: "46%" },
    animationClass: "animate-float-orb-2",
    animationDelay: "-2.4s",
    zIndex: 20,
  },
  {
    id: "barcelona",
    image: "/images/destinations/photos/barcelona.webp",
    alt: "Barcelona classical European architecture",
    sizeClasses: "w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] lg:w-[66px] lg:h-[66px]",
    imageSizes: "(max-width: 640px) 44px, (max-width: 1024px) 54px, 66px",
    position: { top: "5%", left: "74%" },
    animationClass: "animate-float-orb-3",
    animationDelay: "-6.2s",
    zIndex: 12,
  },
  {
    id: "tokyo",
    image: "/images/destinations/photos/tokyo.webp",
    alt: "Tokyo historic Yasaka pagoda",
    sizeClasses: "w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] lg:w-[86px] lg:h-[86px]",
    imageSizes: "(max-width: 640px) 56px, (max-width: 1024px) 70px, 86px",
    position: { top: "33%", left: "3%" },
    animationClass: "animate-float-orb-3",
    animationDelay: "-4.5s",
    zIndex: 16,
  },
  {
    id: "sydney",
    image: "/images/destinations/photos/sydney.webp",
    alt: "Sydney Opera House and Harbour",
    sizeClasses: "w-[62px] h-[62px] sm:w-[78px] sm:h-[78px] lg:w-[96px] lg:h-[96px]",
    imageSizes: "(max-width: 640px) 62px, (max-width: 1024px) 78px, 96px",
    position: { top: "37%", left: "32%" },
    animationClass: "animate-float-orb-4",
    animationDelay: "-1.6s",
    zIndex: 22,
  },
  {
    id: "dubai",
    image: "/images/destinations/photos/dubai.webp",
    alt: "Dubai Arabian coastline and Burj Al Arab",
    sizeClasses: "w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] lg:w-[86px] lg:h-[86px]",
    imageSizes: "(max-width: 640px) 56px, (max-width: 1024px) 70px, 86px",
    position: { top: "33%", left: "69%" },
    animationClass: "animate-float-orb-5",
    animationDelay: "-3.5s",
    zIndex: 15,
  },
  {
    id: "rome",
    image: "/images/destinations/photos/rome.webp",
    alt: "Rome Colosseum architecture",
    sizeClasses: "w-[50px] h-[50px] sm:w-[64px] sm:h-[64px] lg:w-[78px] lg:h-[78px]",
    imageSizes: "(max-width: 640px) 50px, (max-width: 1024px) 64px, 78px",
    position: { top: "62%", left: "9%" },
    animationClass: "animate-float-orb-2",
    animationDelay: "-5.2s",
    zIndex: 18,
  },
  {
    id: "singapore",
    image: "/images/destinations/photos/singapore.webp",
    alt: "Singapore Marina Bay skyline",
    sizeClasses: "w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] lg:w-[84px] lg:h-[84px]",
    imageSizes: "(max-width: 640px) 54px, (max-width: 1024px) 68px, 84px",
    position: { top: "65%", left: "40%" },
    animationClass: "animate-float-orb-1",
    animationDelay: "-3.9s",
    zIndex: 19,
  },
  {
    id: "alps",
    image: "/images/destinations/photos/alps.webp",
    alt: "Swiss Alps mountains and chalets",
    sizeClasses: "w-[48px] h-[48px] sm:w-[58px] sm:h-[58px] lg:w-[72px] lg:h-[72px]",
    imageSizes: "(max-width: 640px) 48px, (max-width: 1024px) 58px, 72px",
    position: { top: "63%", left: "71%" },
    animationClass: "animate-float-orb-5",
    animationDelay: "-1.8s",
    zIndex: 13,
  },
];

export default function DestinationOrbit() {
  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[530px] h-[340px] sm:h-[400px] lg:h-[460px] mx-auto select-none pointer-events-auto flex items-center justify-center"
      aria-label="Scenic destination photographs"
    >
      {/* Soft ambient center glow to gently illuminate behind the cluster */}
      <div className="absolute inset-4 rounded-full bg-[#A9C1D0]/15 blur-3xl pointer-events-none" />
      <div className="absolute inset-16 rounded-full bg-[#8CAABF]/10 blur-2xl pointer-events-none" />

      {/* Floating 9-orb destination composition */}
      <div className="relative w-full h-full">
        {DESTINATION_ORBS.map((orb) => (
          <div
            key={orb.id}
            className={`absolute ${orb.sizeClasses} ${orb.animationClass} transition-transform duration-300 ease-out`}
            style={{
              top: orb.position.top,
              left: orb.position.left,
              zIndex: orb.zIndex,
              animationDelay: orb.animationDelay,
            }}
          >
            <div className="group relative w-full h-full rounded-full p-[2.5px] bg-gradient-to-b from-white/95 via-white/60 to-white/30 backdrop-blur-xs shadow-[0_12px_28px_-6px_rgba(41,51,58,0.16),0_3px_8px_rgba(41,51,58,0.06)] hover:shadow-[0_20px_40px_-6px_rgba(41,51,58,0.24)] hover:scale-108 transition-all duration-400 ease-out cursor-pointer overflow-hidden">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#FAF8F5]">
                <Image
                  src={orb.image}
                  alt={orb.alt}
                  fill
                  sizes={orb.imageSizes}
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  priority={orb.id === "paris" || orb.id === "london"}
                />
                {/* Delicate glass specular highlight inset */}
                <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.75),inset_0_-1px_2px_rgba(41,51,58,0.12)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

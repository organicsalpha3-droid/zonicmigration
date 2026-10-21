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
    sizeClasses: "w-[26px] h-[26px] min-[360px]:w-[30px] min-[360px]:h-[30px] sm:w-[60px] sm:h-[60px] lg:w-[94px] lg:h-[94px]",
    imageSizes: "(max-width: 640px) 30px, (max-width: 1024px) 60px, 94px",
    position: { top: "3%", left: "10%" },
    animationClass: "animate-float-orb-1",
    animationDelay: "0s",
    zIndex: 14,
  },
  {
    id: "paris",
    image: "/images/destinations/photos/paris.webp",
    alt: "Paris Eiffel Tower vista",
    sizeClasses: "w-[30px] h-[30px] min-[360px]:w-[36px] min-[360px]:h-[36px] sm:w-[68px] sm:h-[68px] lg:w-[102px] lg:h-[102px]",
    imageSizes: "(max-width: 640px) 36px, (max-width: 1024px) 68px, 102px",
    position: { top: "5%", left: "42%" },
    animationClass: "animate-float-orb-2",
    animationDelay: "-2.4s",
    zIndex: 20,
  },
  {
    id: "barcelona",
    image: "/images/destinations/photos/barcelona.webp",
    alt: "Barcelona classical European architecture",
    sizeClasses: "w-[22px] h-[22px] min-[360px]:w-[26px] min-[360px]:h-[26px] sm:w-[44px] sm:h-[44px] lg:w-[66px] lg:h-[66px]",
    imageSizes: "(max-width: 640px) 26px, (max-width: 1024px) 44px, 66px",
    position: { top: "4%", left: "74%" },
    animationClass: "animate-float-orb-3",
    animationDelay: "-6.2s",
    zIndex: 12,
  },
  {
    id: "tokyo",
    image: "/images/destinations/photos/tokyo.webp",
    alt: "Tokyo historic Yasaka pagoda",
    sizeClasses: "w-[25px] h-[25px] min-[360px]:w-[29px] min-[360px]:h-[29px] sm:w-[56px] sm:h-[56px] lg:w-[86px] lg:h-[86px]",
    imageSizes: "(max-width: 640px) 29px, (max-width: 1024px) 56px, 86px",
    position: { top: "34%", left: "2%" },
    animationClass: "animate-float-orb-3",
    animationDelay: "-4.5s",
    zIndex: 16,
  },
  {
    id: "sydney",
    image: "/images/destinations/photos/sydney.webp",
    alt: "Sydney Opera House and Harbour",
    sizeClasses: "w-[28px] h-[28px] min-[360px]:w-[33px] min-[360px]:h-[33px] sm:w-[62px] sm:h-[62px] lg:w-[96px] lg:h-[96px]",
    imageSizes: "(max-width: 640px) 33px, (max-width: 1024px) 62px, 96px",
    position: { top: "36%", left: "32%" },
    animationClass: "animate-float-orb-4",
    animationDelay: "-1.6s",
    zIndex: 22,
  },
  {
    id: "dubai",
    image: "/images/destinations/photos/dubai.webp",
    alt: "Dubai Arabian coastline and Burj Al Arab",
    sizeClasses: "w-[25px] h-[25px] min-[360px]:w-[29px] min-[360px]:h-[29px] sm:w-[56px] sm:h-[56px] lg:w-[86px] lg:h-[86px]",
    imageSizes: "(max-width: 640px) 29px, (max-width: 1024px) 56px, 86px",
    position: { top: "34%", left: "68%" },
    animationClass: "animate-float-orb-5",
    animationDelay: "-3.5s",
    zIndex: 15,
  },
  {
    id: "rome",
    image: "/images/destinations/photos/rome.webp",
    alt: "Rome Colosseum architecture",
    sizeClasses: "w-[24px] h-[24px] min-[360px]:w-[28px] min-[360px]:h-[28px] sm:w-[50px] sm:h-[50px] lg:w-[78px] lg:h-[78px]",
    imageSizes: "(max-width: 640px) 28px, (max-width: 1024px) 50px, 78px",
    position: { top: "65%", left: "8%" },
    animationClass: "animate-float-orb-2",
    animationDelay: "-5.2s",
    zIndex: 18,
  },
  {
    id: "singapore",
    image: "/images/destinations/photos/singapore.webp",
    alt: "Singapore Marina Bay skyline",
    sizeClasses: "w-[24px] h-[24px] min-[360px]:w-[28px] min-[360px]:h-[28px] sm:w-[54px] sm:h-[54px] lg:w-[84px] lg:h-[84px]",
    imageSizes: "(max-width: 640px) 28px, (max-width: 1024px) 54px, 84px",
    position: { top: "66%", left: "40%" },
    animationClass: "animate-float-orb-1",
    animationDelay: "-3.9s",
    zIndex: 19,
  },
  {
    id: "alps",
    image: "/images/destinations/photos/alps.webp",
    alt: "Swiss Alps mountains and chalets",
    sizeClasses: "w-[23px] h-[23px] min-[360px]:w-[27px] min-[360px]:h-[27px] sm:w-[48px] sm:h-[48px] lg:w-[72px] lg:h-[72px]",
    imageSizes: "(max-width: 640px) 27px, (max-width: 1024px) 48px, 72px",
    position: { top: "64%", left: "70%" },
    animationClass: "animate-float-orb-5",
    animationDelay: "-1.8s",
    zIndex: 13,
  },
];

export default function DestinationOrbit() {
  return (
    <div
      className="relative w-full max-w-[125px] min-[360px]:max-w-[145px] min-[390px]:max-w-[165px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[530px] h-[145px] min-[360px]:h-[165px] min-[390px]:h-[185px] sm:h-[280px] md:h-[350px] lg:h-[460px] mx-auto select-none pointer-events-auto flex items-center justify-center"
      aria-label="Scenic destination photographs"
    >
      {/* Soft ambient center glow to gently illuminate behind the cluster */}
      <div className="absolute inset-1 sm:inset-4 rounded-full bg-[#A9C1D0]/15 blur-lg sm:blur-3xl pointer-events-none" />
      <div className="absolute inset-3 sm:inset-16 rounded-full bg-[#8CAABF]/10 blur-md sm:blur-2xl pointer-events-none" />

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

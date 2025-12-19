"use client";
import React from "react";
import { useState, useEffect } from "react";

interface Member {
  number: string;
  name: string;
  description: string;
}

interface HeroProps {
  member: Member;
}
const Hero = ({ member }: HeroProps) => {
  const [displayText, setDisplayText] = useState("");
  const fullText = `CASE FILE: ${member.name.toUpperCase()}. ${member.description.toUpperCase()}`;

  useEffect(() => {
    setDisplayText("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [member]);
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#C41E3A]/20">
      {/* Background Image - High-contrast B&W */}
      <div className="absolute inset-0 z-0">
        <img
          src={`https://picsum.photos/seed/${member.number}/1920/1080?grayscale`}
          alt={member.name}
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/80"></div>
      </div>

      {/* Giant Red Number Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden">
        <span className="impact-headline text-[#C41E3A]/10 text-[60vw] select-none leading-none">
          No.{member.number}
        </span>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h2 className="mono-body text-[#F5F5DC]/60 tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
          Blacklist Target // No. {member.number} // Clearance Level 5
        </h2>
        <h1 className="impact-headline text-6xl md:text-9xl text-[#F5F5DC] mb-6 drop-shadow-2xl">
          {member.name.toUpperCase()}
        </h1>
        <p className="mono-body text-sm md:text-lg text-[#F5F5DC]/80 h-24 max-w-2xl mx-auto italic overflow-hidden">
          {displayText}
          <span className="animate-pulse">_</span>
        </p>
      </div>

      {/* Classified Stamps */}
      <div className="absolute bottom-12 right-12 opacity-10 rotate-12 pointer-events-none">
        <div className="border-4 border-[#C41E3A] text-[#C41E3A] px-6 py-2 impact-headline text-4xl">
          CLASSIFIED
        </div>
      </div>
    </section>
  );
};

export default Hero;

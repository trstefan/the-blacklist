"use client";
import { useEffect, useState } from "react";
import GridBackground from "../components/GridBackground";
import Link from "next/link";

export default function Home() {
  const [step, setStep] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const introLines = [
    "ESTABLISHING SECURE CONNECTION...",
    "HANDSHAKE VERIFIED: POST OFFICE BLACKSITE",
    "ACCESSING REDDINGTON'S ARCHIVE",
    "WARNING: CLASSIFIED MATERIALS AHEAD",
    "WELCOME TO THE BLACKLIST.",
  ];

  useEffect(() => {
    if (step < introLines.length) {
      let i = 0;
      const fullText = introLines[step];
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(timer);
          setTimeout(() => {
            setStep((s) => s + 1);
          }, 1000);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [step]);

  return (
    <div className="fixed inset-0 z-100 bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center">
      <GridBackground />

      {/* Background Silhouette */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <h1 className="impact-headline text-[30vw] text-[#C41E3A] select-none">
          Blacklist
        </h1>
      </div>

      <div className="relative z-10 space-y-8 max-w-2xl">
        <div className="mono-body text-xs md:text-sm text-[#708090] tracking-widest uppercase animate-pulse">
          Secure Terminal // Session Active
        </div>

        <div className="h-24 flex items-center justify-center">
          <h2 className="mono-body text-lg md:text-2xl text-[#F5F5DC] italic h-full flex items-center">
            {displayText}
            <span className="inline-block w-2 h-6 bg-[#C41E3A] ml-2 animate-pulse"></span>
          </h2>
        </div>

        {step >= introLines.length && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Link
              href="/dossier"
              className="group relative bg-transparent border-2 border-[#C41E3A] text-[#C41E3A] px-12 py-5 impact-headline text-3xl md:text-5xl transition-all hover:bg-[#C41E3A] hover:text-[#F5F5DC] shadow-[0_0_30px_rgba(196,30,58,0.2)]"
            >
              <span className="relative z-10">ENTER THE BLACKLIST</span>
              <div className="absolute inset-0 bg-[#C41E3A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <p className="mt-12 mono-body text-[10px] text-[#708090] uppercase tracking-[0.4em]">
              Authorization Required // Level 4 Clearance
            </p>
          </div>
        )}
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-[#2F4F4F]/30"></div>
      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#2F4F4F]/30"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#2F4F4F]/30"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-[#2F4F4F]/30"></div>
    </div>
  );
}

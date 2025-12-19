import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <div className="fixed inset-0 z-100 bg-[#0a0a0a] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* Glitch Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      {/* Giant Background Error Code */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.05] pointer-events-none">
        <h1 className="impact-headline text-[60vw] text-[#C41E3A] select-none leading-none">
          404
        </h1>
      </div>

      <div className="relative z-20 space-y-10 max-w-3xl">
        <div className="inline-block border-4 border-[#C41E3A] px-8 py-4 rotate-3 shadow-[0_0_50px_rgba(196,30,58,0.2)]">
          <h2 className="impact-headline text-5xl md:text-8xl text-[#C41E3A] uppercase tracking-tighter">
            Access Denied
          </h2>
        </div>

        <div className="space-y-4">
          <h3 className="mono-body text-xl md:text-2xl text-[#F5F5DC] uppercase tracking-[0.2em]">
            Error Code: <span className="text-[#C41E3A]">File_Expunged</span>
          </h3>
          <p className="mono-body text-sm md:text-base text-[#708090] max-w-xl mx-auto leading-relaxed italic">
            "The document you are looking for does not exist in our archives.
            Either it has been purged by the Cabal, or you lack the necessary
            level of clearance to view these sensitive materials."
          </p>
        </div>

        <div className="pt-10">
          <Link
            href="/"
            className="group relative bg-[#C41E3A] text-white px-10 py-4 impact-headline text-2xl md:text-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(196,30,58,0.3)]"
          >
            RETURN TO BLACKSITE
            <div className="absolute -bottom-2 -right-2 w-full h-full border border-[#F5F5DC]/20 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
          </Link>
        </div>

        <div className="flex justify-center gap-8 pt-8">
          <div className="flex flex-col items-center opacity-30">
            <div className="w-12 h-1 bg-[#2F4F4F] mb-2"></div>
            <span className="mono-body text-[10px] uppercase">
              Tracing IP...
            </span>
          </div>
          <div className="flex flex-col items-center opacity-30">
            <div className="w-12 h-1 bg-[#C41E3A] mb-2 animate-pulse"></div>
            <span className="mono-body text-[10px] uppercase">Signal Lost</span>
          </div>
        </div>
      </div>

      {/* Warning Tape Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[#C41E3A] flex items-center overflow-hidden opacity-20 pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="impact-headline text-black text-xl px-4 italic"
            >
              RESTRICTED AREA // DO NOT ENTER // CLASSIFIED // RESTRICTED AREA
              // DO NOT ENTER // CLASSIFIED //
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default notFound;

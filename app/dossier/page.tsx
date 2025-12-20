"use client";
import { blacklistData } from "@/blacklist-data";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] py-20 px-6 md:px-12 lg:px-24">
      <div className="relative z-10 mb-16 text-center">
        <h2 className="mono-body text-[#C41E3A] text-sm tracking-[0.5em] uppercase mb-4">
          Bureau Archive // Classified
        </h2>
        <h1 className="impact-headline text-6xl md:text-8xl text-[#F5F5DC] uppercase">
          The Blacklist
        </h1>
        <div className="w-24 h-1 bg-[#C41E3A] mx-auto mt-6"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blacklistData.members.map((member) => (
          <Link
            href={`/dossier/${member.number}`}
            key={member.number}
            className="group relative aspect-[3/4] bg-[#1a1a1a] border border-[#2F4F4F]/30 overflow-hidden transition-all duration-500 hover:border-[#C41E3A] hover:shadow-[0_0_30px_rgba(196,30,58,0.2)]"
          >
            {/* Mugshot Image */}
            <img
              src={`https://picsum.photos/seed/${member.number}/600/800?grayscale`}
              alt={member.name}
              className="w-full h-full object-cover opacity-50 grayscale contrast-125 transition-all duration-700 group-hover:scale-110 group-hover:opacity-80 group-hover:mix-blend-luminosity"
            />

            {/* Overlay Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>

            {/* Large Number Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 transition-opacity group-hover:opacity-20">
              <span className="impact-headline text-[15vw] leading-none pointer-events-none">
                {member.number}
              </span>
            </div>

            {/* Member Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="impact-headline text-[#C41E3A] text-4xl mb-1 flex items-center gap-2">
                <span className="text-sm border border-[#C41E3A] px-1">
                  NO.
                </span>{" "}
                {member.number}
              </div>
              <div className="impact-headline text-[#F5F5DC] text-2xl uppercase tracking-tighter mb-2 truncate">
                {member.name}
              </div>
              <div className="mono-body text-[10px] text-[#708090] uppercase tracking-widest flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    member.status === "Active"
                      ? "bg-green-500 animate-pulse"
                      : "bg-red-600"
                  }`}
                ></span>
                Status: {member.status}
              </div>
            </div>

            {/* Scanline Effect on Hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-size-[100%_2px,3px_100%]"></div>
          </Link>
        ))}
      </div>

      {/* Decorative Stamp */}
      <div className="fixed bottom-10 right-10 opacity-5 pointer-events-none -rotate-12 z-0">
        <div className="border-8 border-[#F5F5DC] p-4 impact-headline text-9xl">
          TOP SECRET
        </div>
      </div>
    </div>
  );
};

export default Page;

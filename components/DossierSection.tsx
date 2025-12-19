import React from "react";
import RedactedText from "./RedactedText";

interface Member {
  number: string;
  name: string;
  status: string;
  episode_revealed: string;
  description: string;
}

interface DossierSectionProps {
  member: Member;
}

const DossierSection = ({ member }: DossierSectionProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* Dossier Card */}
      <div className="bg-[#E0DCD1] text-[#0a0a0a] p-8 md:p-12 shadow-2xl relative rotate-1 hover:rotate-0 transition-all duration-500 border border-[#0a0a0a]/20 w-full">
        <div className="absolute top-0 right-0 bg-[#C41E3A] text-white px-4 py-1 impact-headline text-xl transform -translate-y-1/2 translate-x-4">
          LIST NO. {member.number}
        </div>

        <div className="border-b-2 border-[#0a0a0a] pb-4 mb-8">
          <h3 className="impact-headline text-5xl mb-2 uppercase">
            {member.name}
          </h3>
          <p className="mono-body text-sm font-bold uppercase tracking-tight">
            REVEALED: {member.episode_revealed} // STATUS:{" "}
            <span
              className={
                member.status === "Deceased" ? "text-red-700" : "text-green-700"
              }
            >
              {member.status}
            </span>
          </p>
        </div>

        <div className="space-y-8 mono-body text-base leading-relaxed">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-32 h-32 bg-[#0a0a0a] shrink-0 flex items-center justify-center text-[#F5F5DC] p-1 overflow-hidden shadow-lg">
              <img
                src={`https://api.dicebear.com/7.x/identicon/svg?seed=${member.number}&backgroundColor=0a0a0a&color=f5f5dc`}
                alt="Digital Fingerprint"
                className="opacity-50 w-full h-full"
              />
            </div>
            <div className="flex-1">
              <p className="font-bold mb-3 text-lg uppercase underline decoration-[#C41E3A] decoration-2">
                Summary of Intelligence:
              </p>
              <p className="mb-4">{member.description}</p>
              <p>
                Subject shows significant operational capacity and potential
                ties to <RedactedText text="The Cabal" /> as well as various{" "}
                <RedactedText text="clandestine networks" /> across the globe.
              </p>
            </div>
          </div>

          <div className="border-t border-b border-[#0a0a0a]/10 py-6">
            <p className="mb-4">
              Intelligence asset <strong>{member.name}</strong> (designated
              Subject #{member.number}) has been identified as a key node in
              <RedactedText text="The Fulcrum" /> conspiracy. Surveillance data
              suggests access to
              <RedactedText text="Level 6 encrypted channels" /> and direct
              communication with
              <RedactedText text="Katarina Rostova" />.
            </p>
          </div>

          <div className="bg-[#0a0a0a]/5 p-6 border-l-8 border-[#C41E3A] shadow-inner">
            <p className="text-sm uppercase font-bold mb-3 text-[#C41E3A] tracking-widest">
              Post Office Protocol // Restricted:
            </p>
            <p className="text-base italic">
              "Subject is to be engaged only under direct supervision of the
              task force. Do not attempt{" "}
              <RedactedText text="unilateral extraction" />. All biological
              samples must be delivered to <RedactedText text="The Stewmaker" />{" "}
              for forensic analysis in the event of a lethal encounter."
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
          <div className="opacity-30 -rotate-6 border-4 border-[#0a0a0a] px-6 py-2 text-4xl impact-headline uppercase">
            REDACTED
          </div>
          <div className="text-xs text-center sm:text-right font-mono text-[#0a0a0a]/60">
            <p className="font-bold">DOCUMENT ID: FBI-TF-{member.number}-REV</p>
            <p>FILED: [TIMESTAMP_REDACTED]</p>
            <p>SIG: RR_ARCHIVE_VERIFIED</p>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Stamp */}
      <div className="mt-16 opacity-10 select-none">
        <p className="impact-headline text-7xl tracking-tighter">
          PROPERTY OF US GOVERNMENT
        </p>
      </div>
    </div>
  );
};

export default DossierSection;

import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DossierSection from "@/components/DossierSection";

import { blacklistData } from "@/blacklist-data";
import type { BlacklistMember } from "@/type";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    number: string;
  }>;
}


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { number } = await params;
  const member = blacklistData.members.find(
    (m) => m.number === number
  );

  if (!member) {
    return {
      title: "Blacklist Dossier",
    };
  }

  return {
    title: `Blacklist No. ${member.number} — ${member.name}`,
    description: member.description,
  };
}


export default async function Page({ params }: PageProps) {
  const { number } = await params;
  const member: BlacklistMember | undefined = blacklistData.members.find(
    (m) => m.number === number
  );

  if (!member) {
    notFound();
  }

  

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#F5F5DC] overflow-hidden">
      {/* Back Button */}
      <Link
        href="/dossier"
        className="fixed top-6 right-6 z-50 bg-[#C41E3A] text-white px-6 py-2 impact-headline text-xl hover:bg-[#A31830] transition-all shadow-[0_0_20px_rgba(196,30,58,0.4)] flex items-center gap-2 group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        Back to Blacklist
      </Link>

      <main className="relative z-10 w-full">
        <Hero member={member} />

        <div className="px-6 md:px-12 lg:px-24 py-20 flex justify-center">
          <div className="w-full max-w-4xl">
            <DossierSection member={member} />
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

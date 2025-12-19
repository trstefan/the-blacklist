import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import DossierSection from "@/components/DossierSection";
import Link from "next/link";

interface Member {
  number: string;
  name: string;
  status: string;
  episode_revealed: string;
  description: string;
}

const Page = async ({ params }: { params: Promise<{ number: string }> }) => {
  const { number } = await params;
  const { blacklistData } = await import("@/blacklist-data");

  const member = blacklistData.members.find((m) => m.number === number);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#F5F5DC] overflow-hidden">
      {/* Back Button Overlay */}
      <Link
        href="/dossier"
        className="fixed top-6 right-6 z-60 bg-[#C41E3A] text-white px-6 py-2 impact-headline text-xl hover:bg-[#A31830] transition-all shadow-[0_0_20px_rgba(196,30,58,0.4)] flex items-center gap-2 group"
      >
        <span className="transform group-hover:-translate-x-1 transition-transform">
          ←
        </span>{" "}
        Back to Blacklist
      </Link>

      {/* Content Area */}
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
};

export default Page;

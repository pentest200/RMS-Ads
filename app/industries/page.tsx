import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/cta-section";
import { industriesData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve | RMS Ads",
  description:
    "Tailored 360° digital marketing solutions across EdTech, test prep, startups, consumer brands, higher education, and digital platforms.",
};

export default function IndustriesPage() {
  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">WHO WE PARTNER WITH</span>
          <h1>
            AMBITIOUS BRANDS.
            <br />
            <em>REAL AUDIENCES.</em>
          </h1>
          <p>
            Different markets, one simple objective: making the right connections
            count. We bring specialized vertical expertise and channel
            architecture to each sector we champion.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#030b19]">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind, idx) => (
              <div
                key={ind.id}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#21d9f6]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#21d9f6]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-xs text-slate-500 uppercase">
                      Sector Focus
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-3">
                    {ind.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {ind.highlights?.map((f: string) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-xs text-slate-400"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#21d9f6] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#21d9f6] transition-colors"
                  >
                    <span>Launch in {ind.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

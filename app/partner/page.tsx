import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Video, Network as NetworkIcon, Users, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/cta-section";
import Network from "@/components/network";

export const metadata: Metadata = {
  title: "Partner With Us | Creator & Media Network | RMS Ads",
  description:
    "Join the RMS Ads creator & media partner ecosystem. We collaborate with verified tech educators, influencers, and digital publishers on top brand campaigns.",
};

export default function PartnerPage() {
  const partnerTypes = [
    {
      title: "Content Creators & Influencers",
      desc: "For educators, career mentors, and niche creators seeking consistent, high-impact brand collaborations with major industry players.",
      benefits: [
        "Transparent campaign terms",
        "Creative alignment & support",
        "Brand whitelisting options",
        "Long-term multi-cohort retainers",
      ],
      icon: Video,
    },
    {
      title: "Media Networks & Platforms",
      desc: "For digital publications, student communities, and education portals looking to coordinate high-relevance sponsored features.",
      benefits: [
        "Curated brand collaborations",
        "High editorial integrity",
        "Direct access to enterprise briefs",
        "Scalable campaign rollout",
      ],
      icon: NetworkIcon,
    },
    {
      title: "Agency & Ecosystem Partners",
      desc: "For boutique consultancies and technology platforms seeking specialized performance media and multi-platform distribution.",
      benefits: [
        "Collaborative campaign architecture",
        "Shared performance analytics",
        "Dedicated account coordination",
        "Fast turnaround on live briefs",
      ],
      icon: Users,
    },
  ];

  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">05 / OUR CONNECTED WORLD</span>
          <h1>
            ONE NETWORK.
            <br />
            <em>ENDLESS CONNECTIONS.</em>
          </h1>
          <p>
            Communities, creators, student audiences and brand teams. One
            coordinated ecosystem built around relevance, trust, and shared
            success.
          </p>
        </div>
      </section>

      {/* Network Visual */}
      <Network />

      {/* Categories */}
      <section className="py-24 bg-[#030b19] border-t border-white/10">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <span className="studio-kicker">PARTNERSHIP TRACKS</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              How We Work With You.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((pt) => {
              const Icon = pt.icon;
              return (
                <div
                  key={pt.title}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#21d9f6]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3.5 rounded-xl bg-[#21d9f6]/10 text-[#21d9f6] border border-[#21d9f6]/20 w-fit mb-6">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {pt.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {pt.desc}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {pt.benefits.map((b) => (
                        <div
                          key={b}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#21d9f6] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#21d9f6] hover:underline pt-4 border-t border-white/10"
                  >
                    <span>Apply for this track</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

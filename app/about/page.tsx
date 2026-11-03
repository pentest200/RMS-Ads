import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Target, Zap, Users } from "lucide-react";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us | 360° Digital Marketing & Advertising Agency",
  description:
    "Learn about RMS Ads, our 360° digital marketing philosophy, leadership, and how we build compounding growth for ambitious brands.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Radical Transparency",
      description:
        "No hidden agency markups or vanity metrics. You see every rupee spent, every conversion tracked, and every strategic pivot in real time.",
      icon: ShieldCheck,
    },
    {
      title: "Mathematical Media Buying",
      description:
        "Our media planners treat client ad budgets as venture capital. Every campaign is modeled around payback periods, CAC:LTV, and marginal ROAS.",
      icon: Target,
    },
    {
      title: "Creative Velocity",
      description:
        "Algorithms favor creative variation. Our in-house creative direction tests multiple hooks, script formats, and visual angles for maximum retention.",
      icon: Zap,
    },
    {
      title: "Elite Creator Network",
      description:
        "We bypass generic agency middle-men to connect brands directly with verified educators, industry creators, and influential authority figures.",
      icon: Users,
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "RMS Ads Inception",
      desc: "Founded with a mission to bring mathematical attribution and high-impact digital advertising to Indian growth companies.",
    },
    {
      year: "2022",
      title: "EdTech Sector Breakthrough",
      desc: "Engineered scalable enrollment pipelines for premier competitive exam institutes, lowering average CPA by 38%.",
    },
    {
      year: "2023",
      title: "Omnichannel 360° Expansion",
      desc: "Integrated programmatic media buying, creator whitelisting, and automated lead routing into our proprietary framework.",
    },
    {
      year: "2024+",
      title: "National Brand Footprint",
      desc: "Collaborations across premier national brands including ALLEN, Physics Wallah, Scaler, Unacademy, and Careerwill.",
    },
  ];

  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">WHO WE ARE</span>
          <h1>
            MORE THAN MARKETING.
            <br />
            <em>WE BUILD MOMENTUM.</em>
          </h1>
          <p>
            RMS Ads is a premier 360° Digital Marketing &amp; Advertising Agency.
            We connect ambitious brands with high-intent audiences through
            strategic digital advertising, performance marketing, influencer
            collaborations, and multi-platform growth.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#030b19]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="studio-kicker">OUR CORE BELIEF</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Attention is earned. <br />
                <span className="text-[#21d9f6]">Results are engineered.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                The internet is loud, fast-moving, and unforgiving. Most agencies
                focus on superficial vanity metrics — views and clicks that
                never translate into enterprise value.
              </p>
              <p className="text-slate-400 leading-relaxed">
                At RMS Ads, we look at the full picture. From channel-native
                creative production and creator alignment to high-intent funnel
                conversion and cross-platform amplification, we architect
                campaigns that systematically scale awareness, engagement, and
                revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#21d9f6]/30 transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-[#21d9f6] mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones / Journey */}
      <section className="py-24 bg-[#071629] border-y border-white/10">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <span className="studio-kicker">OUR EVOLUTION</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              From Niche Performance to 360° Market Leaders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/10"
              >
                <div className="text-3xl font-black text-[#21d9f6] mb-3">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}

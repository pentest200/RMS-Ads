import { Zap, Target, BarChart2, Award, CheckCircle2 } from "lucide-react";

export default function AgencyIntro() {
  const pillars = [
    {
      title: "Omnichannel Paid Media",
      desc: "Algorithmic media deployment across Google, Meta, YouTube, and Programmatic networks calibrated for maximum scale and reduced CAC.",
      icon: Target,
    },
    {
      title: "Influencer & Creator Engines",
      desc: "Direct collaborations with verified industry creators, educators, and niche tastemakers combined with high-converting paid whitelisting.",
      icon: Zap,
    },
    {
      title: "Conversion Funnel Architecture",
      desc: "Speed-optimized landing pages, dynamic quiz funnels, and automated CRM lead routing that turn clicks into verified enrollments and sales.",
      icon: BarChart2,
    },
    {
      title: "Enterprise Revenue Strategy",
      desc: "Clear unit economics modeling, predictive CAC:LTV analysis, and transparent board-level reporting without vanity vanity metrics.",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050B1B]/60 border-y border-white/5">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              Agency Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              MORE THAN MARKETING. <br />
              <span className="text-gradient-cyan">WE BUILD MOMENTUM.</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-base">
              At RMS Ads, we reject one-size-fits-all playbooks. We operate as an integrated
              growth partner, fusing high-impact creative production, proprietary media
              buying frameworks, and relentless daily optimization.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm">
              Whether you are scaling India's largest EdTech cohort, launching a disruptive
              consumer brand, or accelerating B2B pipeline, our 360° approach ensures every
              touchpoint works in synergy to drive verifiable enterprise valuation.
            </p>

            <div className="pt-2 space-y-3">
              {[
                "Full-Funnel Cross-Platform Synchronization",
                "Proven Track Record with Market Leaders (ALLEN, PW, Scaler)",
                "Transparent Real-Time Analytics & Attribution",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Strategic Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="glass-card glass-card-hover p-6 rounded-2xl relative group overflow-hidden"
                >
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-1">0{idx + 1} // ARCHITECTURE</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


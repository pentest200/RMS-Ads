import Link from "next/link";
import { ArrowRight, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";
import { caseStudiesData } from "@/lib/data";

export default function CaseStudiesPreview() {
  return (
    <section className="py-24 relative" id="case-studies">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="studio-kicker">VERIFIED OUTCOMES</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              CAMPAIGNS THAT <span className="text-gradient-cyan">MOVED MARKETS</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore how our full-funnel digital advertising and influencer strategies produced
              record enrollment numbers and unprecedented unit economics for industry titans.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-7">
                {/* Client & Industry Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                    {study.client}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {study.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {study.title}
                </h3>

                {/* Key Metrics Banner */}
                <div className="grid grid-cols-3 gap-2 bg-[#060D20] border border-white/5 p-3 rounded-xl mb-6">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-base sm:text-lg font-black text-cyan-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Results points */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {study.results.slice(0, 2).map((res) => (
                    <div key={res} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 px-7 border-t border-white/5 bg-[#060C1E]/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies#${study.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                >
                  <span>Read Breakdown</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


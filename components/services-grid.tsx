import Link from "next/link";
import {
  Megaphone,
  TrendingUp,
  Users,
  Sparkles,
  Target,
  Share2,
  FileText,
  Layers,
  GraduationCap,
  Compass,
  ArrowRight,
  Check,
} from "lucide-react";
import { servicesData } from "@/lib/data";

const iconMap: Record<string, any> = {
  Megaphone,
  TrendingUp,
  Users,
  Sparkles,
  Target,
  Share2,
  FileText,
  Layers,
  GraduationCap,
  Compass,
};

export default function ServicesGrid({ limit }: { limit?: number }) {
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-24 relative" id="services">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="studio-kicker">360° CAPABILITIES</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              ENGINEERED FOR <span className="text-gradient-cyan">CONVERSION &amp; SCALE</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We provide comprehensive full-cycle digital marketing solutions that combine creative
              firepower with mathematical precision across all 10 critical growth vectors.
            </p>
          </div>
          {limit && (
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group shrink-0"
            >
              <span>Explore All 10 Capabilities</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Megaphone;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="glass-card glass-card-hover p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />

                <div>
                  {/* Top Bar with Icon and Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600/30 via-navy-800 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-300 group-hover:scale-105 group-hover:border-cyan-400/40 transition-all">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/90 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables list */}
                  <div className="space-y-2 pt-4 border-t border-white/5 mb-6">
                    <div className="text-[11px] font-mono uppercase text-slate-500">Deliverables</div>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors"
                >
                  <span>Request Strategy Proposal</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


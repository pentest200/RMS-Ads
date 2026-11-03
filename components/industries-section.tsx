import Link from "next/link";
import {
  GraduationCap,
  ShoppingBag,
  ShieldCheck,
  Briefcase,
  Activity,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { industriesData } from "@/lib/data";

const iconMap: Record<string, any> = {
  GraduationCap,
  ShoppingBag,
  ShieldCheck,
  Briefcase,
  Activity,
  Smartphone,
};

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="industries">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="studio-kicker">SECTOR SPECIALIZATION</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            DEEP DOMAIN EXPERTISE IN <span className="text-gradient-cyan">HIGH-STAKES INDUSTRIES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every vertical demands specialized acquisition mechanics, regulatory compliance, and consumer
            psychology. We bring tailored growth models tested across millions in capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.iconName] || Briefcase;
            return (
              <div
                key={ind.id}
                className="glass-card glass-card-hover p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-600/15 border border-blue-400/25 flex items-center justify-center text-cyan-300 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {ind.description}
                  </p>
                  <div className="space-y-2 border-t border-white/5 pt-4 mb-6">
                    {ind.highlights.map((h) => (
                      <div key={h} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors pt-2"
                >
                  <span>Discuss Your Vertical Growth</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import {
  Maximize2,
  Award,
  TrendingUp,
  Zap,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { whyChooseReasons } from "@/lib/data";

const iconMap: Record<string, any> = {
  Maximize2,
  Award,
  TrendingUp,
  Zap,
  BarChart3,
  CheckCircle,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-[#040817] border-t border-white/5">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="studio-kicker justify-center">THE RMS ADVANTAGE</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            WHY HIGH-GROWTH BRANDS <span className="text-gradient-cyan">CHOOSE RMS ADS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We operate as an extension of your leadership team. No vanity fluff, no bloated retainers—just
            rigorous performance marketing engineered for enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseReasons.map((reason, idx) => {
            const Icon = iconMap[reason.iconName] || CheckCircle;
            return (
              <div
                key={reason.title}
                className="glass-card glass-card-hover p-7 rounded-2xl relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    ADV // 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


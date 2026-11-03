import { processSteps } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="py-24 relative bg-[#030612] border-y border-white/5" id="process">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="studio-kicker justify-center">METHODOLOGY &amp; RIGOR</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            OUR 4-STEP <span className="text-gradient-cyan">GROWTH ENGINE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A battle-tested cyclical framework designed to de-risk advertising capital, isolate high-intent audiences,
            and systematically scale customer acquisition.
          </p>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-40 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                    {step.step}
                  </span>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400/40 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 mb-3">
                  {step.tagline}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Sub-activities */}
                <div className="space-y-2 pt-4 border-t border-white/5 mb-4">
                  {step.activities.map((act) => (
                    <div key={act} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {idx < processSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-end text-slate-600 pt-2">
                  <span className="text-[10px] font-mono uppercase mr-1">Next</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


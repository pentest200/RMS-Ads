import type { Metadata } from "next";
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
  CheckCircle2,
} from "lucide-react";
import CTASection from "@/components/cta-section";
import { servicesData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Capabilities | 360° Digital Marketing & Advertising",
  description:
    "Explore our complete suite of 10 digital marketing capabilities: performance advertising, influencer campaigns, lead generation, EdTech marketing, and cross-channel growth.",
};

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

export default function ServicesPage() {
  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">FULL-SPECTRUM SUITE</span>
          <h1>
            10 SPECIALIZED
            <br />
            <em>GROWTH CAPABILITIES.</em>
          </h1>
          <p>
            From high-conversion paid media and influencer ecosystems to
            custom EdTech funnels and multi-channel orchestration — every service
            is engineered for measurable, compounding business return.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#030b19]">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((svc, idx) => {
              const Icon = iconMap[svc.iconName] || Megaphone;
              return (
                <div
                  key={svc.slug}
                  id={svc.slug}
                  className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#21d9f6]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-[#21d9f6]/10 text-[#21d9f6] border border-[#21d9f6]/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs text-slate-500">
                        0{idx + 1} / 10
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#21d9f6] transition-colors">
                      {svc.title}
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {svc.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                        Key Deliverables:
                      </div>
                      {svc.deliverables?.map((item: string) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#21d9f6] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#21d9f6] font-mono">
                      Enterprise Grade
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#21d9f6] transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <CTASection />
    </div>
  );
}

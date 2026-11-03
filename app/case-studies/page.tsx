import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";
import CTASection from "@/components/cta-section";
import WorkShowcase from "@/components/work-showcase";

export const metadata: Metadata = {
  title: "Case Studies & Work Highlights | RMS Ads",
  description:
    "Explore how RMS Ads drives multi-platform reach, qualified student leads, and performance growth for top tier national brands.",
};

const caseStudies = [
  {
    title: "National EdTech Lead Acceleration",
    brand: "Premier IIT-JEE / NEET Institute",
    summary:
      "Full-funnel digital campaign targeting Tier-1 and Tier-2 student cohorts across YouTube, Meta, and Telegram communities during peak enrollment season.",
    metrics: [
      { label: "Target CPA Reduction", value: "-42%" },
      { label: "Verified Admissions", value: "18,400+" },
      { label: "Return on Ad Spend", value: "4.8x" },
    ],
    tags: ["Performance Marketing", "EdTech", "Lead Gen"],
  },
  {
    title: "Influencer-Led Exam Crash Course Launch",
    brand: "Leading Online Learning Platform",
    summary:
      "Whitelisted creator campaign with 35+ verified educators across YouTube and Instagram, driving organic excitement and instant application spikes.",
    metrics: [
      { label: "Video Impressions", value: "24M+" },
      { label: "App Installs", value: "180K+" },
      { label: "Course Enrollments", value: "22,500" },
    ],
    tags: ["Influencer Marketing", "Creator Ops", "Mobile Apps"],
  },
  {
    title: "Omnichannel Engineering & Tech Degree Cohort",
    brand: "Modern School of Technology",
    summary:
      "Strategic search, programmatic display, and high-trust community distribution to enroll premier undergraduate computer science students.",
    metrics: [
      { label: "Qualified Applications", value: "12,200+" },
      { label: "Cost Per Enrolled Student", value: "-35%" },
      { label: "Admit Quality Score", value: "94%" },
    ],
    tags: ["Higher Education", "Strategy", "Paid Search"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">02 / WHAT WE MAKE POSSIBLE</span>
          <h1>
            NOT JUST VIEWS.
            <br />
            <em>NEW POSSIBILITIES.</em>
          </h1>
          <p>
            Three ways we turn a campaign brief into something people notice,
            remember, and act on. Explore our capabilities and illustrated
            campaign frameworks.
          </p>
        </div>
      </section>

      {/* Illustrated Capabilities from Preview */}
      <WorkShowcase />

      {/* Case Highlights */}
      <section className="py-24 bg-[#030b19] border-t border-white/10">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <span className="studio-kicker">CAMPAIGN HIGHLIGHTS</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 leading-tight">
              Real Impact. Engineered At Scale.
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Representative examples of strategic architectures, audience
              segmentation, and measurable performance delivered for industry
              leaders.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.title}
                className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#21d9f6]/40 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-[#21d9f6]"
                    >
                      {t}
                    </span>
                  ))}
                  <span className="text-xs text-slate-500 font-mono ml-auto">
                    {cs.brand}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      {cs.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {cs.summary}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#21d9f6] hover:underline"
                    >
                      <span>Plan a similar campaign</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-3 gap-4 p-6 rounded-xl bg-black/40 border border-white/5">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-xl sm:text-2xl font-black text-white">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono uppercase text-slate-400 mt-1">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
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

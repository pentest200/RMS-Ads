import type { Metadata } from "next";
import Link from "next/link";
import { companyDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms and Conditions | RMS Ads",
  description: "Terms of service and commercial conditions of RMS Ads.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">COMMERCIAL TERMS</span>
          <h1>
            TERMS &amp;
            <br />
            <em>CONDITIONS.</em>
          </h1>
          <p>
            Last updated: November 2026. Standard terms governing website use
            and consulting engagements with RMS Ads.
          </p>
        </div>
      </section>

      <div className="py-20 bg-[#030b19]">
        <div className="container-wide max-w-4xl">
          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website of RMS Ads ({process.env.NEXT_PUBLIC_SITE_URL || "https://rmsads.com"}),
                you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms,
                you must not use our website or services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">2. Scope of Services</h2>
              <p>
                RMS Ads provides 360° digital marketing, paid performance advertising, creator collaborations,
                and growth advisory services. Specific deliverables, ad budgets, management fees, and timelines
                are governed by individual Master Services Agreements (MSAs) or Statements of Work (SOWs).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">3. Intellectual Property</h2>
              <p>
                All website design, editorial concepts, layouts, graphics, and code are the proprietary intellectual
                property of RMS Ads. Client logos and brand marks displayed on this website belong to their respective
                owners and are used for representative illustrative purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">4. Client Ad Spend & Third-Party Platforms</h2>
              <p>
                Media ad spend is billed either directly to client payment profiles on Meta, Google, YouTube, and other
                advertising networks, or pre-funded by client prior to campaign launch. RMS Ads is not responsible for
                third-party ad platform downtime, policy enforcement, or algorithm volatility.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, RMS Ads shall not be liable for any indirect,
                incidental, or consequential damages resulting from website use or performance marketing outcomes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">6. Governing Law & Jurisdiction</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising
                under these terms shall be subject to the exclusive jurisdiction of the competent courts in Gurugram,
                Haryana, India.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

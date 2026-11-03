import type { Metadata } from "next";
import Link from "next/link";
import { companyDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | RMS Ads",
  description: "Privacy policy and data protection practices of RMS Ads.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">LEGAL &amp; COMPLIANCE</span>
          <h1>
            PRIVACY
            <br />
            <em>POLICY.</em>
          </h1>
          <p>
            Last updated: November 2026. How we collect, use, and protect your
            data with transparency and integrity.
          </p>
        </div>
      </section>

      <div className="py-20 bg-[#030b19]">
        <div className="container-wide max-w-4xl">
          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">1. Introduction</h2>
              <p>
                RMS Ads ("we," "our," or "us"), operating at {companyDetails.address}, values your privacy.
                This Privacy Policy explains how we collect, use, and safeguard personal information when
                you visit our website ({process.env.NEXT_PUBLIC_SITE_URL || "https://rmsads.com"}), contact us,
                or engage our marketing and advertising consulting services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
              <p>We may collect information directly from you when you submit our contact or enquiry forms:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Full name and professional job title</li>
                <li>Work email address and phone or WhatsApp number</li>
                <li>Company or brand name and website URL</li>
                <li>Marketing budget estimates and project requirements</li>
                <li>Technical analytics data collected via standard web server logs</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
              <p>We use the collected information strictly for legitimate business purposes:</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Responding to your agency inquiries and preparing marketing audit proposals</li>
                <li>Delivering agreed digital advertising and campaign management services</li>
                <li>Complying with statutory tax and legal obligations</li>
                <li>Preventing automated bot abuse and ensuring website security</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">4. Data Sharing & Third Parties</h2>
              <p>
                We do not sell, rent, or trade your personal data. We only share data with essential service providers
                (such as transactional email providers like Resend and secure cloud infrastructure like Vercel)
                solely to operate our business.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">5. Security & Retention</h2>
              <p>
                We maintain appropriate physical, electronic, and procedural safeguards. Information is retained only
                as long as necessary to fulfill business purposes and comply with legal requirements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white">6. Contact & Rights</h2>
              <p>
                If you have questions about this policy or wish to request data correction or deletion,
                contact us at{" "}
                <a href={`mailto:${companyDetails.email}`} className="text-[#21d9f6] underline">
                  {companyDetails.email}
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

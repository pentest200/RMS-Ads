import type { Metadata } from "next";
import BrandShowcase from "@/components/brand-showcase";
import CTASection from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Our Clients & Brand Collaborations | RMS Ads",
  description:
    "Proud partners to leading national brands including ALLEN, Physics Wallah, Scaler, Unacademy, Careerwill, and high-growth education leaders.",
};

export default function ClientsPage() {
  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">TRUST / COLLABORATION / EXPERIENCE</span>
          <h1>
            GOOD COMPANY.
            <br />
            <em>GREAT AMBITION.</em>
          </h1>
          <p>
            We partner with visionary founders, CMOs, and marketing leaders who
            demand compounding growth, genuine authority, and relentless
            execution.
          </p>
        </div>
      </section>

      {/* Brand Showcase with all 10 verified brands */}
      <BrandShowcase />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

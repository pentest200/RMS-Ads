import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { companyDetails } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Strategic Growth Consultations | RMS Ads",
  description:
    "Get in touch with RMS Ads. Request a customized marketing audit, inquire about multi-platform advertising retainers, or speak directly with our senior growth directors.",
};

const faqs = [
  {
    q: "How quickly can RMS Ads launch a campaign?",
    a: "After initial discovery and asset alignment, our rapid deployment sprint launches initial campaign tests within 5 to 7 business days.",
  },
  {
    q: "What is your typical engagement structure?",
    a: "We work on monthly performance retainers, milestone-based product launches, and hybrid revenue-share models with established brands.",
  },
  {
    q: "Do you provide full attribution and tracking setup?",
    a: "Yes. Every engagement includes server-side Conversion API (CAPI), UTM taxonomy structuring, and clear executive reporting dashboards.",
  },
  {
    q: "How does RMS Ads handle creator and influencer collaborations?",
    a: "We manage end-to-end creator outreach, contract negotiation, content briefs, and multi-platform distribution for maximum reach and authenticity.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Editorial Interior Hero */}
      <section className="studio-interior-hero">
        <div className="container-wide">
          <span className="studio-kicker">INITIATE PARTNERSHIP</span>
          <h1>
            YOUR NEXT
            <br />
            <em>BIG MOVE.</em>
          </h1>
          <p>
            Tell us where you want to go. We'll map how to get your brand in front
            of the right people with strategic clarity, high-trust creative, and
            measurable ROI.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Office Details */}
      <section className="py-24 bg-[#030b19]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Office & Direct Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
                <h2 className="text-xl font-bold text-white">
                  Direct Agency Desk
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#21d9f6]/10 text-[#21d9f6] shrink-0 mt-0.5">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">
                        Official Inquiry Email
                      </div>
                      <a
                        href={`mailto:${companyDetails.email}`}
                        className="text-white hover:text-[#21d9f6] font-semibold"
                      >
                        {companyDetails.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#21d9f6]/10 text-[#21d9f6] shrink-0 mt-0.5">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">
                        Phone / Direct Line
                      </div>
                      <a
                        href={`tel:${companyDetails.phone}`}
                        className="text-white hover:text-[#21d9f6] font-semibold"
                      >
                        {companyDetails.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#21d9f6]/10 text-[#21d9f6] shrink-0 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">
                        Headquarters
                      </div>
                      <div className="text-slate-300">
                        {companyDetails.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#21d9f6]/10 text-[#21d9f6] shrink-0 mt-0.5">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">
                        Operating Hours
                      </div>
                      <div className="text-slate-300">
                        {companyDetails.hours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service SLA card */}
              <div className="p-6 rounded-2xl bg-[#071629] border border-white/10 flex items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-[#21d9f6] shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-white">
                    24-Hour Strategic Response SLA
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Every inbound inquiry receives a response from our growth
                    team within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="pt-24 max-w-4xl">
            <span className="studio-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-10">
              Clear Answers. No Guesswork.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <h3 className="text-base font-bold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

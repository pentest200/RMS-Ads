"use client";

import Link from "next/link";
import ContactForm from "@/components/contact-form";

export default function LastCta() {
  return (
    <>
      <section className="studio-last-cta" id="contact">
        <div className="container-wide">
          <span className="studio-kicker light">LET'S MAKE SOMETHING MATTER</span>
          <h2>
            YOUR NEXT
            <br />
            <em>BIG MOVE</em>
            <span>↗</span>
          </h2>
          <div className="studio-last-cta-bottom">
            <p>
              Tell us where you want to go. We'll map how to get your brand in
              front of the right people.
            </p>
            <div>
              <a className="studio-cta-white" href="#inquiry-form">
                Let's Work Together ↗
              </a>
              <Link className="studio-cta-outline" href="/partner">
                Partner with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real working Contact Form Section in Studio Editorial Style */}
      <section className="py-20 bg-[#030b19] border-t border-white/10" id="inquiry-form">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="studio-kicker" style={{ color: "#21d9f6" }}>
                07 / GET IN TOUCH
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  fontFamily: 'var(--font-inter, "Manrope"), Arial, sans-serif',
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#f6f5f0",
                  marginTop: "12px",
                  lineHeight: 1.15,
                }}
              >
                Send Us a Campaign Brief.
              </h2>
              <p
                style={{
                  color: "#8b9cb1",
                  fontSize: "15px",
                  marginTop: "10px",
                  maxWidth: "520px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Fill out the form below and our team will get back to you within
                24 hours with a strategic plan.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}


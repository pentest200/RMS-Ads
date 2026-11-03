"use client";

import { useState } from "react";
import Link from "next/link";

type ServiceItem = {
  num: string;
  name: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    num: "01 /",
    name: "Multi-Platform Advertising",
    description:
      "Integrated campaigns across social, search, video, publishers and creator channels, planned around your brand goals.",
  },
  {
    num: "02 /",
    name: "Influencer Marketing",
    description:
      "Partner with creators your next customers already trust.",
  },
  {
    num: "03 /",
    name: "EdTech Performance Marketing",
    description:
      "Campaigns designed for registrations, student interest and enrollment journeys.",
  },
  {
    num: "04 /",
    name: "Lead Generation",
    description:
      "Capture attention that becomes meaningful business conversations.",
  },
  {
    num: "05 /",
    name: "Brand Promotions",
    description:
      "Bring your brand into new communities with clarity and consistency.",
  },
  {
    num: "06 /",
    name: "Campaign Management",
    description:
      "From first brief to final report, keep execution connected.",
  },
];

export default function Expertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleService(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section className="studio-expertise" id="expertise">
      <div className="container-wide studio-expertise-grid">
        <div className="studio-expertise-intro">
          <span className="studio-kicker">03 / WHAT WE'RE GOOD AT</span>
          <h2>
            YOUR
            <br />
            GROWTH.
            <br />
            <em>OUR CRAFT.</em>
          </h2>
          <p>
            We believe attention is earned. Results are engineered. Explore the
            disciplines that make both possible.
          </p>
          <Link className="studio-text-link" href="#contact">
            Build with us ↗
          </Link>
        </div>

        <div className="studio-services-list">
          {services.map((svc, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={svc.num}
                className={`studio-service-row ${isOpen ? "is-open" : ""}`}
              >
                <button
                  aria-expanded={isOpen}
                  className="studio-service-trigger"
                  type="button"
                  onClick={() => toggleService(idx)}
                >
                  <span className="studio-service-num">{svc.num}</span>
                  <span className="studio-service-name">{svc.name}</span>
                  <span className="studio-service-toggle">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="studio-service-panel" hidden={!isOpen}>
                  <p>{svc.description}</p>
                  <Link href="#contact">Discuss this service ↗</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


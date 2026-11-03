import type { Metadata, Viewport } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rmsads.com"),
  title: {
    default: "RMS Ads — 360° Digital Marketing & Advertising Agency",
    template: "%s | RMS Ads",
  },
  description:
    "RMS Ads is a premier 360° digital marketing and advertising agency helping ambitious brands scale through strategic paid media, influencer collaborations, lead generation, and omnichannel growth.",
  keywords: [
    "RMS Ads",
    "360 Digital Marketing Agency",
    "Performance Marketing Agency India",
    "EdTech Marketing Agency",
    "Influencer Marketing",
    "Lead Generation",
    "Paid Advertising",
    "ALLEN Digital Marketing",
    "Physics Wallah Marketing",
  ],
  authors: [{ name: "RMS Ads" }],
  openGraph: {
    title: "RMS Ads — 360° Digital Marketing & Advertising Agency",
    description:
      "Your Brand. Our Strategy. Unlimited Growth. Strategic digital advertising and performance marketing for ambitious enterprise brands.",
    url: "https://rmsads.com",
    siteName: "RMS Ads",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "RMS Ads — 360° Digital Marketing & Advertising Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RMS Ads — 360° Digital Marketing & Advertising Agency",
    description: "Your Brand. Our Strategy. Unlimited Growth.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#040814",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Schema.org Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "RMS Ads",
              url: "https://rmsads.com",
              logo: "https://rmsads.com/logo.svg",
              description: "360° Digital Marketing & Advertising Agency",
              address: {
                "@type": "PostalAddress",
                streetAddress: "DLF Cyber City, Sector 24",
                addressLocality: "Gurugram",
                addressRegion: "Haryana",
                postalCode: "122002",
                addressCountry: "IN",
              },
              telephone: "+91 98765 43210",
              email: "contact@rmsads.com",
            }),
          }}
        />
      </head>
      <body id="top" className="antialiased min-h-screen flex flex-col bg-[#030b19] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}


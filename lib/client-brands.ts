/**
 * RMS Ads client logo configuration.
 * Locally hosted verified assets from the approved reference package in /clients/
 * are prioritized with additional fallbacks.
 * The client list is the official 10 brands supplied by RMS Ads.
 */
export type FeaturedBrand = {
  name: string;
  imageUrl: string;
  fallbacks: string[];
  source: string;
  domain: string;
  pendingNotice?: string;
};

export const featuredBrands: FeaturedBrand[] = [
  {
    name: "ALLEN",
    imageUrl: "/clients/ALLEN_Career_Institute_logo.svg",
    fallbacks: [
      "/clients/allen.svg",
      "https://commons.wikimedia.org/wiki/Special:FilePath/ALLEN_Career_Institute_logo.svg",
    ],
    source: "ALLEN Career Institute",
    domain: "https://www.allen.ac.in/",
  },
  {
    name: "Careers360",
    imageUrl: "/clients/careers360.svg",
    fallbacks: [
      "https://cdn.brandfetch.io/idAnQRl0T7/w/400/h/400/theme/dark/icon.png",
    ],
    source: "Careers360",
    domain: "https://www.careers360.com/",
    pendingNotice: "Logo unavailable",
  },
  {
    name: "Scaler School of Technology",
    imageUrl: "/clients/image-2023-10-18T133423.275.jpg",
    fallbacks: [
      "/clients/scaler.svg",
      "https://s3-ap-southeast-1.amazonaws.com/ghost-production-blog/2023/10/Scaler-UG_Logo-Color.png",
    ],
    source: "Scaler",
    domain: "https://www.scaler.com/school-of-technology/",
  },
  {
    name: "Vedam School of Technology",
    imageUrl: "/clients/1741778686vegam_logo.webp",
    fallbacks: [
      "/clients/vedam.svg",
      "https://d13loartjoc1yn.cloudfront.net/upload/exam/1741778686vegam_logo.webp",
    ],
    source: "Vedam School of Technology",
    domain: "https://www.vedam.org/",
  },
  {
    name: "Newton School of Technology",
    imageUrl: "/clients/20250409174004.jpg",
    fallbacks: [
      "/clients/newton-school.svg",
      "https://bsmedia.business-standard.com/_media/bs/img/article/2025-04/09/full/20250409174004.jpg",
    ],
    source: "Newton School",
    domain: "https://www.newtonschool.co/",
  },
  {
    name: "Unacademy",
    imageUrl: "/clients/logo.svg",
    fallbacks: [
      "/clients/unacademy.svg",
      "https://unacademy.com/static/images/logo.svg",
    ],
    source: "Unacademy",
    domain: "https://unacademy.com/",
  },
  {
    name: "Physics Wallah (PW)",
    imageUrl: "/clients/Physics_wallah_logo.svg",
    fallbacks: [
      "/clients/physics-wallah.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Physics_wallah_logo.svg",
    ],
    source: "Physics Wallah",
    domain: "https://www.pw.live/",
  },
  {
    name: "PW Institute of Innovation (PW IOI)",
    imageUrl: "/clients/pw-ioi.svg",
    fallbacks: [
      "https://www.pwioi.com/logo.png",
    ],
    source: "PW IOI",
    domain: "https://www.pwioi.com/",
    pendingNotice: "Official asset pending",
  },
  {
    name: "ALLEN Digital",
    imageUrl: "/clients/20230130144224.jpg",
    fallbacks: [
      "/clients/allen-digital.svg",
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/30/full/20230130144224.jpg",
    ],
    source: "ALLEN Digital",
    domain: "https://allen.in/",
  },
  {
    name: "Careerwill",
    imageUrl: "/clients/7370e5c971cb-2BDAC4C85C884801BF66F7A0DB120370-1625725447433.png",
    fallbacks: [
      "/clients/careerwill.svg",
    ],
    source: "Careerwill",
    domain: "https://careerwill.com/",
  },
];

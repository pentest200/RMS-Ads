/**
 * RMS Ads client logo configuration.
 * Locally hosted verified assets in /clients/ are prioritized with external CDN fallbacks.
 * The client list was supplied by RMS Ads.
 */
export type FeaturedBrand = {
  name: string;
  imageUrl: string;
  fallbacks: string[];
  source: string;
  domain: string;
};

export const featuredBrands: FeaturedBrand[] = [
  {
    name: "ALLEN",
    imageUrl: "/clients/allen.svg",
    fallbacks: [
      "https://mma.prnewswire.com/media/1808523/Allen_Career_Institute_logo_new.jpg?p=facebook",
      "https://commons.wikimedia.org/wiki/Special:FilePath/ALLEN_Career_Institute_logo.svg",
    ],
    source: "https://commons.wikimedia.org/wiki/File:ALLEN_Career_Institute_logo.svg",
    domain: "https://www.allen.ac.in/",
  },
  {
    name: "Careers360",
    imageUrl: "/clients/careers360.svg",
    fallbacks: [
      "https://www.manipalonline.co/assets/img/course/Career360-1.jpg.webp",
      "https://cdn.brandfetch.io/idAnQRl0T7/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1771587547559",
    ],
    source: "https://brandfetch.com/careers360.com",
    domain: "https://www.careers360.com/",
  },
  {
    name: "Scaler School of Technology",
    imageUrl: "/clients/scaler.svg",
    fallbacks: [
      "https://s3-ap-southeast-1.amazonaws.com/ghost-production-blog/2023/10/Scaler-UG_Logo-Color.png",
    ],
    source: "https://www.scaler.com/blog/",
    domain: "https://www.scaler.com/school-of-technology/",
  },
  {
    name: "Vedam School of Technology",
    imageUrl: "/clients/vedam.svg",
    fallbacks: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2026-01/30/full/20260130183549.jpg",
      "https://d13loartjoc1yn.cloudfront.net/upload/exam/1741778686vegam_logo.webp",
    ],
    source: "https://www.vedam.org/",
    domain: "https://www.vedam.org/",
  },
  {
    name: "Newton School of Technology",
    imageUrl: "/clients/newton-school.svg",
    fallbacks: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2025-04/09/full/20250409174004.jpg",
    ],
    source: "https://brandfetch.com/newtonschool.co",
    domain: "https://www.newtonschool.co/",
  },
  {
    name: "Unacademy",
    imageUrl: "/clients/unacademy.svg",
    fallbacks: [
      "https://unacademy.com/static/images/logo.svg",
      "https://i.pinimg.com/736x/8e/bd/2c/8ebd2cab46b770b9b9e9ea5f73a78dea.jpg",
    ],
    source: "https://unacademy.com/",
    domain: "https://unacademy.com/",
  },
  {
    name: "Physics Wallah (PW)",
    imageUrl: "/clients/physics-wallah.svg",
    fallbacks: [
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Physics_wallah_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Physics_wallah_logo.svg/512px-Physics_wallah_logo.svg.png",
    ],
    source: "https://commons.wikimedia.org/wiki/File:Physics_wallah_logo.svg",
    domain: "https://www.pw.live/",
  },
  {
    name: "PW Institute of Innovation (PW IOI)",
    imageUrl: "/clients/pw-ioi.svg",
    fallbacks: [
      "https://www.pwioi.com/logo.png",
    ],
    source: "https://www.pwioi.com/",
    domain: "https://www.pwioi.com/",
  },
  {
    name: "ALLEN Digital",
    imageUrl: "/clients/allen-digital.svg",
    fallbacks: [
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/30/full/20230130144224.jpg",
    ],
    source: "https://www.allen.ac.in/",
    domain: "https://allen.in/",
  },
  {
    name: "Careerwill",
    imageUrl: "/clients/careerwill.svg",
    fallbacks: [
      "https://images.yourstory.com/cs/images/companies/7370e5c971cb-2BDAC4C85C884801BF66F7A0DB120370-1625725447433.png?ar=1%3A1&fill=solid&fill-color=fff&fm=auto&format=auto&mode=fill&q=85&w=1920",
    ],
    source: "https://careerwill.com/",
    domain: "https://careerwill.com/",
  },
];

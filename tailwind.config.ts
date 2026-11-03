import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./rms-ads-brand-logo-source-code/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040814",
        foreground: "#F8FAFC",
        navy: {
          950: "#040814",
          900: "#060D20",
          850: "#0A1430",
          800: "#0F1E44",
          700: "#162B5E",
          600: "#1E3A7E",
        },
        cyan: {
          400: "#38BDF8",
          300: "#67E8F9",
          custom: "#00F0FF",
        },
        royal: {
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 240, 255, 0.18)",
        "glow-royal": "0 0 30px rgba(37, 99, 235, 0.25)",
        "card-hover": "0 20px 40px -15px rgba(2, 6, 23, 0.8), 0 0 25px rgba(0, 240, 255, 0.12)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.25), transparent)",
        "cyan-glow": "radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;


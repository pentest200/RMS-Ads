"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";
import { servicesData } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number with area/country code"),
  company: z.string().min(2, "Company or brand name is required"),
  service: z.string().min(1, "Please choose a primary service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please describe your campaign goals (at least 10 characters)"),
  website_honeypot: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: servicesData[0]?.title || "Digital Marketing & Advertising",
      budget: "₹2,00,000 – ₹10,00,000 / month",
      message: "",
      website_honeypot: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setFeedbackMessage(
          result.error || "Failed to deliver enquiry. Please contact contact@rmsads.com directly."
        );
      } else {
        setStatus("success");
        setFeedbackMessage(result.message || "Thank you! We have received your enquiry.");
        reset();
      }
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage("Network error occurred. Please check your connection or email us directly.");
    }
  };

  return (
    <div className="glass-card p-7 sm:p-10 rounded-3xl border-cyan-500/20 shadow-2xl relative overflow-hidden">
      {/* Decorative ambient corner glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-mono font-semibold mb-3">
          <Sparkles className="h-3 w-3" />
          <span>START A PROJECT</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Let's Build Your <span className="text-gradient-cyan">Growth Machine</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          Fill out the details below. Our senior media directors will review your website and prepare a custom audit.
        </p>
      </div>

      {status === "success" && (
        <div className="mb-6 p-5 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-200 flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-bold text-white mb-1">Enquiry Successfully Dispatched!</p>
            <p>{feedbackMessage}</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-3 text-xs underline font-semibold text-cyan-300 hover:text-white"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <p className="font-semibold text-red-300 mb-0.5">Submission Error</p>
            <p>{feedbackMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Honeypot hidden input */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("website_honeypot")}
        />

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              Your Full Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Alakh Pandey"
              {...register("name")}
              className={`w-full rounded-xl bg-[#060D20] border px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/10 focus:border-cyan-400"
              }`}
            />
            {errors.name && (
              <p className="text-[11px] text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              Work Email <span className="text-cyan-400">*</span>
            </label>
            <input
              type="email"
              placeholder="alakh@organization.com"
              {...register("email")}
              className={`w-full rounded-xl bg-[#060D20] border px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/10 focus:border-cyan-400"
              }`}
            />
            {errors.email && (
              <p className="text-[11px] text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              Phone / WhatsApp Number <span className="text-cyan-400">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              {...register("phone")}
              className={`w-full rounded-xl bg-[#060D20] border px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                errors.phone
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/10 focus:border-cyan-400"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-400">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              Company or Brand Name <span className="text-cyan-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Physics Wallah / Scaler"
              {...register("company")}
              className={`w-full rounded-xl bg-[#060D20] border px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors focus:outline-none ${
                errors.company
                  ? "border-red-500 focus:border-red-500"
                  : "border-white/10 focus:border-cyan-400"
              }`}
            />
            {errors.company && (
              <p className="text-[11px] text-red-400">{errors.company.message}</p>
            )}
          </div>
        </div>

        {/* Row 3: Service & Estimated Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              Primary Service Needed <span className="text-cyan-400">*</span>
            </label>
            <select
              {...register("service")}
              className="w-full rounded-xl bg-[#060D20] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#060D20] text-white">
                  {s.title}
                </option>
              ))}
              <option value="Full 360° Omnichannel Retainer" className="bg-[#060D20] text-white">
                Full 360° Omnichannel Retainer
              </option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-300">
              Monthly Growth Budget
            </label>
            <select
              {...register("budget")}
              className="w-full rounded-xl bg-[#060D20] border border-white/10 px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="₹1,00,000 – ₹3,00,000 / month" className="bg-[#060D20] text-white">
                ₹1,00,000 – ₹3,00,000 / month
              </option>
              <option value="₹3,00,000 – ₹10,00,000 / month" className="bg-[#060D20] text-white">
                ₹3,00,000 – ₹10,00,000 / month
              </option>
              <option value="₹10,00,000 – ₹30,00,000 / month" className="bg-[#060D20] text-white">
                ₹10,00,000 – ₹30,00,000 / month
              </option>
              <option value="₹30,00,000+ / month (Enterprise Scale)" className="bg-[#060D20] text-white">
                ₹30,00,000+ / month (Enterprise Scale)
              </option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-300">
            Tell Us About Your Brand &amp; Goals <span className="text-cyan-400">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Share details regarding your current channels, target CPA/ROAS goals, upcoming launches, or student enrollment targets..."
            {...register("message")}
            className={`w-full rounded-xl bg-[#060D20] border px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 transition-colors focus:outline-none resize-none ${
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-white/10 focus:border-cyan-400"
            }`}
          />
          {errors.message && (
            <p className="text-[11px] text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-4 text-sm font-bold text-white shadow-glow hover:shadow-[0_0_35px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-white" />
              <span>Transmitting Enquiry to Growth Desk...</span>
            </>
          ) : (
            <>
              <span>Submit Growth Enquiry</span>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
          🔒 Strictly confidential. Non-disclosure protected. No spam ever.
        </p>
      </form>
    </div>
  );
}


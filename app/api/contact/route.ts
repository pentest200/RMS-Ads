import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Input validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number").max(20),
  company: z.string().min(2, "Company or brand name is required").max(100),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide more details (at least 10 characters)").max(2000),
  // Honeypot field for bot protection
  website_honeypot: z.string().max(0).optional(),
});

// In-memory rate limiting map (IP -> timestamps array)
const ipRequestMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5; // max 5 requests per minute per IP

  const timestamps = ipRequestMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < windowMs);

  if (recent.length >= maxRequests) {
    return true;
  }

  recent.push(now);
  ipRequestMap.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown-ip";

    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries sent from this network. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.website_honeypot && body.website_honeypot.length > 0) {
      // Silently reject bots without giving clues
      return NextResponse.json(
        { success: true, message: "Enquiry submitted successfully." },
        { status: 200 }
      );
    }

    // Validate payload with Zod
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]?.message || "Invalid input parameters.";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "contact@rmsads.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "RMS Ads Enquiries <onboarding@resend.dev>";

    // If Resend API key is configured, send the real email via Resend
    if (resendApiKey && !resendApiKey.includes("your_api_key_here")) {
      const resend = new Resend(resendApiKey);

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #060D20; color: #FFFFFF; border-radius: 12px; border: 1px solid #1E293B;">
          <h2 style="color: #00F0FF; margin-top: 0; border-bottom: 1px solid #1E293B; padding-bottom: 12px;">New RMS Ads Lead Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #FFFFFF;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0; color: #38BDF8;"><a href="mailto:${data.email}" style="color: #38BDF8;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; color: #FFFFFF;"><a href="tel:${data.phone}" style="color: #FFFFFF;">${data.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Company / Brand:</strong></td>
              <td style="padding: 8px 0; color: #FFFFFF;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Requested Service:</strong></td>
              <td style="padding: 8px 0; color: #00F0FF; font-weight: bold;">${data.service}</td>
            </tr>
            ${data.budget ? `
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Monthly Budget:</strong></td>
              <td style="padding: 8px 0; color: #FFFFFF;">${data.budget}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #0A1430; border-radius: 8px; border-left: 4px solid #00F0FF;">
            <p style="margin: 0 0 8px 0; color: #94A3B8; font-size: 12px; text-transform: uppercase;"><strong>Project Requirements & Message:</strong></p>
            <p style="margin: 0; color: #F8FAFC; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #1E293B; font-size: 11px; color: #64748B;">
            Sent automatically from RMS Ads Website Contact Engine • IP: ${ip}
          </div>
        </div>
      `;

      const sendResult = await resend.emails.send({
        from: fromEmail,
        to: notificationEmail,
        replyTo: data.email,
        subject: `[RMS Ads Lead] ${data.service} enquiry from ${data.name} (${data.company})`,
        html: htmlContent,
      });

      if (sendResult.error) {
        console.error("Resend API delivery error:", sendResult.error);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to deliver email through notification service. Please contact contact@rmsads.com directly.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your strategic growth enquiry has been delivered to the RMS Ads team. We will get back to you within 2 hours.",
        },
        { status: 200 }
      );
    } else {
      // RESEND_API_KEY is not configured yet in this environment
      console.warn(
        "RESEND_API_KEY is not configured. Enquiry logged safely for review:",
        data
      );

      return NextResponse.json(
        {
          success: true,
          notice: "demo_logged",
          message: "Thank you! Your enquiry has been received and logged. (Note: RESEND_API_KEY environment variable is needed in production to trigger live inbox delivery).",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Unhandled error in contact route:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}


import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.enum(["startup", "existing", "idea", "other"]),
  message: z.string().optional(),
});

const projectTypeLabels = {
  startup: "New Startup",
  existing: "Existing Business",
  idea: "Idea Stage",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Format the email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2E8A84;">New Resilient Brands Inquiry</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
          ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
          ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
          <p><strong>Project Type:</strong> ${projectTypeLabels[validatedData.projectType]}</p>
        </div>
        
        ${
          validatedData.message
            ? `
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
        `
            : ""
        }
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This inquiry was submitted through the Resilient Brands landing page contact form.</p>
        </div>
      </div>
    `;

    const emailText = `
New Resilient Brands Inquiry

Contact Information:
Name: ${validatedData.name}
Email: ${validatedData.email}
${validatedData.company ? `Company: ${validatedData.company}` : ""}
${validatedData.phone ? `Phone: ${validatedData.phone}` : ""}
Project Type: ${projectTypeLabels[validatedData.projectType]}

${validatedData.message ? `Message:\n${validatedData.message}` : ""}

---
This inquiry was submitted through the Resilient Brands landing page contact form.
    `;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "inquiry@resilientbrands.ai",
      to: ["brandon@resilientbrands.ai", "sami@resilientbrands.ai"],
      replyTo: validatedData.email,
      subject: `New Inquiry from ${validatedData.name} - Resilient Brands`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact API:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

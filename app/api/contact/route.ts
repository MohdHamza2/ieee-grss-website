import { type NextRequest, NextResponse } from "next/server"
import { sanitizeInput, validateEmail, validateRequired, limitLength } from "@/lib/sanitize"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const rawData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Sanitize and validate input
    const contactData = {
      firstName: sanitizeInput(limitLength(rawData.firstName, 50)),
      lastName: sanitizeInput(limitLength(rawData.lastName, 50)),
      email: sanitizeInput(rawData.email),
      subject: sanitizeInput(limitLength(rawData.subject, 100)),
      message: sanitizeInput(limitLength(rawData.message, 1000)),
      timestamp: new Date().toISOString(),
    }

    // Validate required fields
    if (
      !validateRequired(contactData.firstName) ||
      !validateRequired(contactData.lastName) ||
      !validateRequired(contactData.email) ||
      !validateRequired(contactData.subject) ||
      !validateRequired(contactData.message)
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    if (!validateEmail(contactData.email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-reply to user

    // For now, we'll just log the data and return success
    console.log("Contact form submission:", contactData)

    // Simulate email sending (replace with actual email service)
    await sendContactEmail(contactData)

    return NextResponse.json(
      {
        message: "Message sent successfully! We will get back to you within 24 hours.",
        success: true,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error. Please try again later." }, { status: 500 })
  }
}

async function sendContactEmail(data: any) {
  // This is where you would integrate with an email service like:
  // - Nodemailer
  // - SendGrid
  // - Resend
  // - AWS SES

  // For demonstration, we'll just simulate the email sending
  console.log(`Sending email notification for contact from ${data.firstName} ${data.lastName}`)
  console.log(`Subject: ${data.subject}`)
  console.log(`Message: ${data.message}`)

  // Simulate async email sending
  await new Promise((resolve) => setTimeout(resolve, 1000))
}

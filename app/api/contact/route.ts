import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, type, area, message } = body

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 })
    }

    // Log to console (replace with your email service: Resend, SendGrid, etc.)
    console.log('📬 New contact request:', { name, phone, type, area, message, timestamp: new Date().toISOString() })

    // If you want to send emails, add Resend / Nodemailer / EmailJS here:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from: 'web@thermocork.es', to: 'info@thermocork.es', subject: `Nuevo presupuesto de ${name}`, text: ... })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

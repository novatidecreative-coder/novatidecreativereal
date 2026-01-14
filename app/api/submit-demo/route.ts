import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, business, smsConsent } = body;

    // Validate required fields
    if (!name || !phone || !email || !business) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailSubject = `New Lead from ${name} - ${business}`;
    const emailBody = `
New Lead Submission from Novatide Creative Website

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${name}
Phone: ${phone}
Email: ${email}
Business: ${business}

SMS Consent: ${smsConsent ? 'Yes - Opted in' : 'No'}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/New_York',
  dateStyle: 'full',
  timeStyle: 'long'
})}

This lead was captured from: ${request.headers.get('referer') || 'Direct submission'}
    `.trim();

    // Send email using Web3Forms (free service, no API key needed for basic use)
    const web3FormsResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_KEY_HERE',
        subject: emailSubject,
        from_name: 'Novatide Creative Website',
        to: 'novatidecreative@gmail.com',
        message: emailBody,
        // Additional data
        name: name,
        email: email,
        phone: phone,
        business: business,
        sms_consent: smsConsent ? 'Yes' : 'No',
      }),
    });

    const web3FormsData = await web3FormsResponse.json();

    if (web3FormsData.success) {
      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully'
      });
    } else {
      // Fallback: Log to console if email fails (you can also use a database here)
      console.log('Form submission received:', {
        name,
        phone,
        email,
        business,
        smsConsent,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json({ 
        success: true,
        message: 'Form submitted successfully (email service unavailable)'
      });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

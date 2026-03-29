import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, guests, date, time, flexible, email, phone, specialRequests } = body;

    // Validate required fields
    if (!name || !guests || !date || !time || !email || !phone) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Create transporter with 20i SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.stackmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'admin@cinnamon.co.im',
        pass: 'Le48293c1'
      }
    });

    // Email to restaurant
    const restaurantEmail = {
      from: 'admin@cinnamon.co.im',
      to: ['info@cinnamon.co.im', 'admin@cinnamon.co.im'],
      subject: `New Reservation Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6F1E2D; border-bottom: 2px solid #6F1E2D; padding-bottom: 10px;">
            New Reservation Request
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Reservation Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Preferred Time:</strong> ${time}</p>
            <p><strong>Flexible with Time:</strong> ${flexible === 'yes' ? 'Yes' : 'No'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
          </div>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2d5016;">
              <strong>Action Required:</strong> Please contact the customer to confirm this reservation.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This email was sent from the Cinnamon Indian Restaurant reservation system.
            </p>
          </div>
        </div>
      `
    };

    // Confirmation email to customer
    const customerEmail = {
      from: 'admin@cinnamon.co.im',
      to: email,
      replyTo: 'info@cinnamon.co.im',
      subject: 'Reservation Request Received - Cinnamon Indian Restaurant',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6F1E2D; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Cinnamon Indian Restaurant</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Reservation Request Received</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #ddd; border-top: none;">
            <h2 style="color: #6F1E2D; margin-top: 0;">Thank you, ${name}!</h2>
            <p style="color: #333; line-height: 1.6;">
              We have received your reservation request and will contact you shortly to confirm your booking.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Your Requested Reservation:</h3>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time}</p>
              <p><strong>Guests:</strong> ${guests}</p>
              <p><strong>Flexible with Time:</strong> ${flexible === 'yes' ? 'Yes' : 'No'}</p>
              ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
            </div>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404;">
                <strong>Please Note:</strong> Your reservation is not confirmed until you receive a confirmation call or email from us.
              </p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="color: #666; margin-bottom: 15px;">Questions? Call us:</p>
              <p style="font-size: 18px; font-weight: bold; color: #6F1E2D; margin: 0;">
                +44 1624 894180
              </p>
            </div>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #ddd; border-top: none;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              31 Malew Street, Castletown, IM9 1AD, Isle of Man<br>
              <a href="mailto:info@cinnamon.co.im" style="color: #6F1E2D;">info@cinnamon.co.im</a>
            </p>
          </div>
        </div>
      `
    };

    // Send both emails
    await transporter.sendMail(restaurantEmail);
    await transporter.sendMail(customerEmail);

    return NextResponse.json(
      { message: 'Reservation request sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Reservation form error:', error);
    return NextResponse.json(
      { error: 'Failed to send reservation request. Please try again.' },
      { status: 500 }
    );
  }
}

import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (toEmail, fullName) => {
  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Email content
    const mailOptions = {
      from: `"Chatty Team" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "🎉 Welcome to Chatty!",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;">
          <h2>Hi ${fullName},</h2>
          <p>Welcome to <b>Chatty</b>! 🎉</p>
          <p>We’re so happy to have you join our real-time chat community.</p>
          <p>Start chatting with your friends and explore new conversations 🚀</p>
          <hr style="margin:20px 0;border:none;border-top:1px solid #ddd;">
          <p style="font-size:12px;color:#777;">This is an automated message — please do not reply.</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${toEmail}`);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

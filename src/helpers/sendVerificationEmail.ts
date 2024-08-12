import transporter from "@/lib/nodemailer";
import { ApiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
    
  try {
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verification Code</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f9f9f9;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  border-radius: 5px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  overflow: hidden;
              }
              .header {
                  background-color: #4CAF50;
                  color: white;
                  padding: 20px;
                  text-align: center;
              }
              .content {
                  padding: 20px;
              }
              .footer {
                  text-align: center;
                  padding: 10px;
                  background-color: #f1f1f1;
                  font-size: 12px;
                  color: #555;
              }
              .otp {
                  font-size: 24px;
                  font-weight: bold;
                  color: #4CAF50;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Verification Code</h1>
              </div>
              <div class="content">
                  <h2>Hello ${username},</h2>
                  <p>Thank you for registering. Please use the following verification code to complete your registration:</p>
                  <p class="otp">${verifyCode}</p>
                  <p>If you did not request this code, please ignore this email.</p>
              </div>
              <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Mystry Message. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
    `;



    await transporter.sendMail({
      from: '"Mystry message" <maddison53@ethereal.email>',
      to: email,
      subject: 'Mystry message | Verification code',
      html: emailHtml,
    });

    console.log("fgfgfg",email);
    
    return { success: true, message: 'Verification email sent successfully using node mailer' };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return { success: false, message: 'Failed to send verification email' };
  }
}

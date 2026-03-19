import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Interface for email options
export interface EmailOptions {
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    cc?: string | string[];
    bcc?: string | string[];
    from?: string;
}

// Interface for sending email result
export interface SendEmailResult {
    success: boolean;
    messageId?: string;
    error?: string;
}

/**
 * Send an email using nodemailer
 * @param options - Email options (to, subject, text, html, etc.)
 * @returns Promise<SendEmailResult> - Result of the email send operation
 */
export const sendEmail = async (options: EmailOptions): Promise<SendEmailResult> => {
    try {
        const { to, subject, text, html, cc, bcc, from } = options;

        // Ensure 'to' is a string (nodemailer expects single recipient as string)
        const toAddresses = Array.isArray(to) ? to.join(", ") : to;

        const mailOptions = {
            from: from || process.env.SMTP_FROM || process.env.SMTP_USER,
            to: toAddresses,
            cc: cc ? (Array.isArray(cc) ? cc.join(", ") : cc) : undefined,
            bcc: bcc ? (Array.isArray(bcc) ? bcc.join(", ") : bcc) : undefined,
            subject,
            text: text || "",
            html: html || text || "", // Fallback to text if html not provided
        };

        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent: %s", info.messageId);
        
        return {
            success: true,
            messageId: info.messageId,
        };
    } catch (error: any) {
        console.error("Error sending email:", error);
        return {
            success: false,
            error: error.message || "Failed to send email",
        };
    }
};

/**
 * Send a welcome email to a new user
 * @param email - Recipient email address
 * @param name - Recipient name
 * @returns Promise<SendEmailResult>
 */
export const sendWelcomeEmail = async (email: string, name: string): Promise<SendEmailResult> => {
    return sendEmail({
        to: email,
        subject: "Welcome to Ethio School",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #4a5568;">Welcome to Ethio School!</h1>
                <p style="color: #2d3748; font-size: 16px;">Dear ${name},</p>
                <p style="color: #2d3748; font-size: 16px;">Thank you for joining Ethio School. We are excited to have you on board!</p>
                <p style="color: #2d3748; font-size: 16px;">If you have any questions, please don't hesitate to contact us.</p>
                <p style="color: #4a5568; font-size: 14px; margin-top: 30px;">Best regards,<br>The Ethio School Team</p>
            </div>
        `,
    });
};

/**
 * Send a password reset email
 * @param email - Recipient email address
 * @param resetToken - Password reset token
 * @returns Promise<SendEmailResult>
 */
export const sendPasswordResetEmail = async (email: string, resetToken: string): Promise<SendEmailResult> => {
    const resetUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/reset-password/${resetToken}`;
    
    return sendEmail({
        to: email,
        subject: "Password Reset Request",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #4a5568;">Password Reset Request</h1>
                <p style="color: #2d3748; font-size: 16px;">You requested a password reset. Click the button below to reset your password:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${resetUrl}" style="background-color: #3182ce; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
                </div>
                <p style="color: #718096; font-size: 14px;">If you didn't request this, please ignore this email.</p>
                <p style="color: #718096; font-size: 14px;">This link will expire in 1 hour.</p>
            </div>
        `,
    });
};

/**
 * Send an assignment notification email to students
 * @param emails - Array of recipient email addresses
 * @param assignmentTitle - Title of the assignment
 * @param dueDate - Due date of the assignment
 * @returns Promise<SendEmailResult>
 */
export const sendAssignmentNotification = async (
    emails: string | string[],
    assignmentTitle: string,
    dueDate: Date
): Promise<SendEmailResult> => {
    const formattedDate = dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return sendEmail({
        to: emails,
        subject: `New Assignment: ${assignmentTitle}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #4a5568;">New Assignment Posted!</h1>
                <p style="color: #2d3748; font-size: 16px;">A new assignment has been posted:</p>
                <ul style="color: #2d3748; font-size: 16px;">
                    <li><strong>Assignment:</strong> ${assignmentTitle}</li>
                    <li><strong>Due Date:</strong> ${formattedDate}</li>
                </ul>
                <p style="color: #2d3748; font-size: 16px;">Please log in to your account to view the details and submit your work.</p>
            </div>
        `,
    });
};

/**
 * Send a grade notification email to students
 * @param email - Recipient email address
 * @param assignmentTitle - Title of the assignment
 * @param grade - Grade received
 * @returns Promise<SendEmailResult>
 */
export const sendGradeNotification = async (
    email: string,
    assignmentTitle: string,
    grade: number
): Promise<SendEmailResult> => {
    return sendEmail({
        to: email,
        subject: `Grade Posted: ${assignmentTitle}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #4a5568;">Grade Posted!</h1>
                <p style="color: #2d3748; font-size: 16px;">Your grade for <strong>${assignmentTitle}</strong> has been posted.</p>
                <p style="color: #2d3748; font-size: 24px; font-weight: bold;">Grade: ${grade}/100</p>
                <p style="color: #2d3748; font-size: 16px;">Log in to your account to view detailed feedback.</p>
            </div>
        `,
    });
};

export default transporter;

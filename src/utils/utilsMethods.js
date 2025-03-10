import crypto from 'crypto';
import nodemailerTransporter from '../config/nodemailerConfig.js';

export function generateSecureOTP() {
    return crypto.randomInt(100000, 1000000).toString();
}

export async function sendEmailToUser(email, otp) {
    try {
        let info = await nodemailerTransporter.sendMail({
            from: 'Siddesh Jaiswal "siddeshjaiswal12@gmail.com"',
            to: email,
            subject: "OTP for Codingwiz Login",
            html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
                        <div style="text-align: center; margin-bottom: 20px;">
                            <img src="../../public/assets/codingwiz_logo.png" alt="Codingwiz Logo" style="max-width: 150px;">
                        </div>
                        <h2 style="text-align: center; color: #333;">🔐 Codingwiz Login OTP</h2>
                        <p>Hello,</p>
                        <p>You requested to log in to your <strong>Codingwiz</strong> account. Please use the following One-Time Password (OTP) to proceed:</p>
                        <div style="text-align: center; margin: 20px 0;">
                            <span style="display: inline-block; background-color: #4f46e5; color: #fff; font-size: 24px; padding: 10px 20px; border-radius: 8px; letter-spacing: 3px;">
                                ${otp}
                            </span>
                        </div>
                        <p>This OTP is valid for the next 10 minutes. Please do not share this code with anyone.</p>
                        <p>If you did not request this login, please ignore this email or contact support.</p>
                        <hr style="margin-top: 30px;">
                        <p style="font-size: 12px; color: #888;">Regards,<br/>Codingwiz Team</p>
                    </div>
                `
        });
        return info;
    } catch (error) {
        throw new Error(error.message)
    }
}

export function generateSecureOrderId() {
    return crypto.randomBytes(6).toString('hex').toUpperCase();
}

export function generateSecureSecretKey() {
    return crypto.randomBytes(12).toString('hex').toLowerCase();
}

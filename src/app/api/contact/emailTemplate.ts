interface EmailTemplateProps {
  fullName: string;
  email: string;
  company?: string;
  message: string;
}

export function getConsultationEmailHtml({
  fullName,
  email,
  company,
  message,
}: EmailTemplateProps): string {
  const formattedMessage = message.replace(/\n/g, "<br>");
  const companyName = company || "-";

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background-color:#f4f5f7;padding:32px 16px;color:#333">
      <div style="max-width:640px;margin:0 auto;background-color:#fff;border-radius:12px;overflow:hidden;border:1px solid #e8e8e8">
        <div style="background-color:#f90706;padding:32px 28px;color:#fff">
          <p style="margin:0 0 10px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">
            AMAYA PERDANA KREASINDO
          </p>
          <h1 style="margin:0;font-size:25px;line-height:1.4;font-weight:700;color:#fff">
            New Consultation Request
          </h1>
          <p style="margin:10px 0 0;font-size:14px;line-height:1.7;color:#fff">
            A new inquiry has been submitted through your website.
          </p>
        </div>
        <div style="padding:30px 28px">
          <p style="margin:0 0 24px;font-size:14px;line-height:1.7;color:#666">
            You have received a new consultation request. Here are the contact details and message submitted by the prospective client.
          </p>
          <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#1a1a1a">
            Contact Information
          </h2>
          <table role="presentation" style="width:100%;border-collapse:collapse;background-color:#fafafa;border:1px solid #eee;border-radius:8px">
            <tr>
              <td style="padding:15px;width:115px;font-size:13px;font-weight:700;color:#777;border-bottom:1px solid #eee;vertical-align:top">
                Full Name
              </td>
              <td style="padding:15px;font-size:14px;font-weight:600;color:#222;border-bottom:1px solid #eee;overflow-wrap:anywhere">
                ${fullName}
              </td>
            </tr>
            <tr>
              <td style="padding:15px;font-size:13px;font-weight:700;color:#777;border-bottom:1px solid #eee;vertical-align:top">
                Email Address
              </td>
              <td style="padding:15px;font-size:14px;color:#f90706;border-bottom:1px solid #eee;overflow-wrap:anywhere">
                <a href="mailto:${email}" style="color:#f90706;text-decoration:none">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:15px;font-size:13px;font-weight:700;color:#777;vertical-align:top">
                Company
              </td>
              <td style="padding:15px;font-size:14px;color:#222;overflow-wrap:anywhere">
                ${companyName}
              </td>
            </tr>
          </table>
          <h2 style="margin:28px 0 14px;font-size:15px;font-weight:700;color:#1a1a1a">
            Message Details
          </h2>
          <div style="background-color:#fff8f8;border-left:4px solid #f90706;border-radius:4px;padding:20px">
            <p style="margin:0;font-size:14px;line-height:1.9;color:#444;overflow-wrap:anywhere">
              ${formattedMessage}
            </p>
          </div>
          <p style="margin:28px 0 0;font-size:13px;line-height:1.7;color:#666">
            Please follow up with the prospective client at your earliest convenience.
          </p>
        </div>
        <div style="background-color:#1b1b1b;padding:24px 28px;text-align:center">
          <p style="margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:1px;color:#fff">
            AMAYA PERDANA KREASINDO
          </p>
          <p style="margin:0;font-size:12px;line-height:1.7;color:#bdbdbd">
            Intelligent Digital Solutions for Business Growth.
          </p>
          <div style="margin:20px auto 0;width:40px;height:3px;background-color:#f90706"></div>
          <p style="margin:16px 0 0;font-size:11px;color:#999">
            This email was automatically generated from your website consultation form.
          </p>
        </div>
      </div>
    </div>
  `;
}
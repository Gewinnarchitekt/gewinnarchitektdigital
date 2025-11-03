import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  phone?: string;
  message: string;
  copyToSelf: boolean;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { email: formData.email, name: `${formData.firstName} ${formData.lastName}` });

    // Validate required fields
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Fehlende Pflichtfelder" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize and prepare email content
    const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Neue Kontaktanfrage</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${fullName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${formData.email}</p>
          ${formData.company ? `<p style="margin: 10px 0;"><strong>Firma:</strong> ${formData.company}</p>` : ''}
          ${formData.phone ? `<p style="margin: 10px 0;"><strong>Telefon:</strong> ${formData.phone}</p>` : ''}
        </div>
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Nachricht:</h3>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; border-radius: 3px;">${formData.message}</p>
        </div>
      </div>
    `;

    // Send email to business
    const businessEmail = await resend.emails.send({
      from: "Gewinnarchitekt Kontaktformular <info@gewinnarchitekt.ch>",
      to: ["info@gewinnarchitekt.ch"],
      subject: `Neue Kontaktanfrage von ${fullName}`,
      html: businessEmailHtml,
      replyTo: formData.email,
    });

    console.log("Business email sent:", businessEmail);

    if (businessEmail.error) {
      console.error("Error sending business email:", businessEmail.error);
      throw new Error("Fehler beim Senden der Nachricht");
    }

    // Send copy to customer if requested
    if (formData.copyToSelf) {
      const customerEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Vielen Dank für Ihre Nachricht!</h2>
          <p>Hallo ${formData.firstName},</p>
          <p>Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.</p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Ihre Nachricht:</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          <p>Mit freundlichen Grüssen,<br>Das Gewinnarchitekt Team</p>
        </div>
      `;

      const customerEmail = await resend.emails.send({
        from: "Gewinnarchitekt <info@gewinnarchitekt.ch>",
        to: [formData.email],
        subject: "Bestätigung Ihrer Nachricht",
        html: customerEmailHtml,
      });

      console.log("Customer copy email sent:", customerEmail);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Nachricht erfolgreich gesendet" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Ein Fehler ist aufgetreten" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

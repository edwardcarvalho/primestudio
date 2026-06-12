import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, service, budget, message } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Prime Studio <onboarding@resend.dev>",
      to: "contacto@primestudio.pt",
      replyTo: email,
      subject: `PrimeStudio - Pedido de Orçamento: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">Novo contacto via primestudio.pt</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 120px;">Nome</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #6b7280;">Empresa</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 8px 0; color: #6b7280;">Serviço</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 8px 0; color: #6b7280;">Orçamento</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <p style="color: #6b7280; margin: 0 0 8px 0; font-size: 12px;">MENSAGEM</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Responde directamente a este email para contactar ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar. Tenta novamente." },
      { status: 500 }
    );
  }
}

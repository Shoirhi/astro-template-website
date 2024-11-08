import { Resend } from "resend";

import { CONTACT_CONFIG } from "../config";

export default async ({ html, text }: { html: string; text: string }) => {

  if (!import.meta.env.RESEND_API_KEY) {
    return new Response(
      JSON.stringify({
        message: "No API Key",
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const from = `${CONTACT_CONFIG.fromName} <${CONTACT_CONFIG.fromEmail}>`
  const to = [CONTACT_CONFIG.notifyEmail]
  const subject = "Webサイトからお問い合せがありました"

  if (!to || !from || !subject || !html || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data",
    });
  }

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};

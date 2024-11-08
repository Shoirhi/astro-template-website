export const prerender = false;

import type { APIRoute } from "astro";

import sendReplyEmail from "@/features/contact/api/sendReplyEmail";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const res = await sendReplyEmail({html: body.html, text: body.text, email: body.email})

  return res
};
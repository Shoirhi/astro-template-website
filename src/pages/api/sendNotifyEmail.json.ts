export const prerender = false;

import type { APIRoute } from "astro";

import sendNotifyEmail from "@/features/contact/api/sendNotifyEmail";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const res = await sendNotifyEmail({html: body.html, text: body.text})

  return res
};
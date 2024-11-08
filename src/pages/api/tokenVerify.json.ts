export const prerender = false;

import type { APIRoute } from "astro";

import tokenVerify from "@/features/contact/api/tokenVerify";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const res = await tokenVerify({token: body.token})

  return res
};
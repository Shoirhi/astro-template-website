const verifyEndpoint =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default async ({ token }: { token: string }) => {
  if (!import.meta.env.TURNSTILE_SECRET_KEY) {
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

  const secret = import.meta.env.TURNSTILE_SECRET_KEY;

  const res = await fetch(verifyEndpoint, {
    method: "POST",
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: data.success ? 200 : 400,
    headers: {
      "content-type": "application/json",
    },
  });
};

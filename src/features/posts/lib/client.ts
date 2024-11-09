import { createClient } from "microcms-js-sdk";

if (!import.meta.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!import.meta.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});
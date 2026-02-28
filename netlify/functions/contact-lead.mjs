import { submitContactLead } from "../../server/contactLeadService.mjs";

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  };
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method not allowed" });
  }

  try {
    const payload = event.body ? JSON.parse(event.body) : {};
    const result = await submitContactLead(payload, {
      userAgent: event.headers?.["user-agent"] || "",
      referer: event.headers?.referer || event.headers?.referrer || "",
      ip: event.headers?.["x-forwarded-for"] || "",
    });
    return json(200, result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to submit form";
    const statusCode = /required|valid email/i.test(message) ? 400 : 500;
    return json(statusCode, { ok: false, error: message });
  }
}

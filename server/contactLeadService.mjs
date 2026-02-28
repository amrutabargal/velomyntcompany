function cleanText(value, maxLength = 2000) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeLead(payload = {}, meta = {}) {
  const lead = {
    name: cleanText(payload.name, 120),
    email: cleanText(payload.email, 160),
    phone: cleanText(payload.phone, 40),
    company: cleanText(payload.company, 160),
    service: cleanText(payload.service, 80),
    message: cleanText(payload.message, 5000),
  };

  if (!lead.name || !lead.email || !lead.message) {
    throw new Error("Missing required fields: name, email, message");
  }
  if (!isValidEmail(lead.email)) {
    throw new Error("Please provide a valid email address");
  }

  return {
    ...lead,
    createdAt: new Date().toISOString(),
    source: "website-contact-form",
    meta: {
      userAgent: cleanText(meta.userAgent, 500),
      ip: cleanText(meta.ip, 100),
      referer: cleanText(meta.referer, 500),
    },
  };
}

export async function submitContactLead(payload, meta = {}) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("Missing GOOGLE_SHEETS_WEBHOOK_URL");
  }

  const lead = normalizeLead(payload, meta);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });

    const raw = await response.text();
    let parsed = null;
    try {
      parsed = raw ? JSON.parse(raw) : null;
    } catch (_) {
      parsed = null;
    }

    if (!response.ok) {
      throw new Error(`Google Sheets webhook failed with status ${response.status}`);
    }

    return {
      ok: true,
      message: parsed?.message || "Lead submitted successfully",
      rowId: parsed?.rowId || null,
      raw: parsed ?? raw,
    };
  } finally {
    clearTimeout(timeout);
  }
}

const API_PATHS = ["/api/google-reviews", "/.netlify/functions/google-reviews"];

function initialsFromName(name = "Google User") {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "GU";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
}

function mapGoogleReviewToTestimonial(review) {
  const name = review?.author_name ?? "Google User";
  return {
    name,
    role: review?.relative_time_description
      ? `Google Review • ${review.relative_time_description}`
      : "Google Review",
    company: "Google",
    initials: initialsFromName(name),
    rating: Number.isFinite(review?.rating) ? review.rating : 5,
    text: review?.text ?? "",
    avatarUrl: review?.profile_photo_url ?? "",
  };
}

const EMPTY_RESULT = {
  source: null,
  rating: null,
  userRatingsTotal: null,
  fetchedAt: null,
  testimonials: [],
  skipped: false,
};

export async function fetchDynamicTestimonials({ limit = 6, signal } = {}) {
  const baseUrl = import.meta.env.VITE_API_URL;
  if (baseUrl === undefined || baseUrl === null || (typeof baseUrl === "string" && baseUrl.trim() === "")) {
    return { ...EMPTY_RESULT, skipped: true };
  }

  const base = String(baseUrl).trim().replace(/\/$/, "");
  const errors = [];

  for (const path of API_PATHS) {
    const fullPath = path.startsWith("/") ? path : `/${path}`;
    const url = `${base}${fullPath}?limit=${encodeURIComponent(limit)}`;
    try {
      const response = await fetch(url, { method: "GET", signal });
      if (!response.ok) {
        errors.push(`${path}: ${response.status}`);
        continue;
      }

      const payload = await response.json();
      if (!Array.isArray(payload?.reviews) || payload.reviews.length === 0) {
        errors.push(`${path}: no reviews`);
        continue;
      }

      const testimonials = payload.reviews
        .map(mapGoogleReviewToTestimonial)
        .filter((item) => item.text.trim().length > 0);

      if (testimonials.length === 0) {
        errors.push(`${path}: empty mapped reviews`);
        continue;
      }

      return {
        source: payload.source ?? "google-places",
        rating: payload.rating ?? null,
        userRatingsTotal: payload.user_ratings_total ?? null,
        fetchedAt: payload.fetched_at ?? null,
        testimonials,
      };
    } catch (error) {
      const msg = error?.name === "AbortError" ? "aborted" : (error instanceof Error ? error.message : "unknown error");
      errors.push(`${path}: ${msg}`);
    }
  }

  return { ...EMPTY_RESULT };
}

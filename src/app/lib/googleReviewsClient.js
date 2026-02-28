const API_ENDPOINTS = ["/api/google-reviews", "/.netlify/functions/google-reviews"];

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

export async function fetchDynamicTestimonials({ limit = 6, signal } = {}) {
  const errors = [];

  for (const endpoint of API_ENDPOINTS) {
    try {
      const url = `${endpoint}?limit=${encodeURIComponent(limit)}`;
      const response = await fetch(url, { method: "GET", signal });
      if (!response.ok) {
        errors.push(`${endpoint}: ${response.status}`);
        continue;
      }

      const payload = await response.json();
      if (!Array.isArray(payload?.reviews) || payload.reviews.length === 0) {
        errors.push(`${endpoint}: no reviews`);
        continue;
      }

      const testimonials = payload.reviews
        .map(mapGoogleReviewToTestimonial)
        .filter((item) => item.text.trim().length > 0);

      if (testimonials.length === 0) {
        errors.push(`${endpoint}: empty mapped reviews`);
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
      errors.push(`${endpoint}: ${error instanceof Error ? error.message : "unknown error"}`);
    }
  }

  throw new Error(`No dynamic review endpoint available. ${errors.join(" | ")}`);
}

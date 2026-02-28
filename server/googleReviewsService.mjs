const GOOGLE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

function toPositiveInt(value, fallback = 6) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  if (Number.isNaN(parsed) || parsed <= 0) return fallback;
  return parsed;
}

function normalizeReview(review) {
  return {
    author_name: review?.author_name ?? "Google User",
    author_url: review?.author_url ?? "",
    language: review?.language ?? "en",
    profile_photo_url: review?.profile_photo_url ?? "",
    rating: Number.isFinite(review?.rating) ? review.rating : 5,
    relative_time_description: review?.relative_time_description ?? "",
    text: review?.text ?? "",
    time: review?.time ?? null,
  };
}

export async function getGooglePlaceReviews({ limit = 6 } = {}) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error("Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID");
  }

  const safeLimit = toPositiveInt(limit, 6);
  const url = new URL(GOOGLE_DETAILS_URL);
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews,name");
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Google Places API failed with status ${response.status}`);
  }

  const payload = await response.json();
  if (payload?.status !== "OK" || !payload?.result) {
    const status = payload?.status ?? "UNKNOWN_ERROR";
    const message = payload?.error_message ? ` (${payload.error_message})` : "";
    throw new Error(`Google Places API error: ${status}${message}`);
  }

  const allReviews = Array.isArray(payload.result.reviews) ? payload.result.reviews : [];
  const reviews = allReviews.slice(0, safeLimit).map(normalizeReview);

  return {
    source: "google-places",
    place_name: payload.result.name ?? "",
    rating: Number.isFinite(payload.result.rating) ? payload.result.rating : null,
    user_ratings_total: Number.isFinite(payload.result.user_ratings_total)
      ? payload.result.user_ratings_total
      : null,
    fetched_at: new Date().toISOString(),
    reviews,
  };
}

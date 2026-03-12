const SERPAPI_BASE = "https://serpapi.com/search.json";
const DATA_ID = "0x23bc485783d227f:0x9d7cd3e02cd0c2f";
const API_KEY = "5a92b85505b10e5cb038864eb0ea54de42a832d26f46e9cbbd91ee365ce686f5";

function toPositiveInt(value, fallback = 6) {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  if (Number.isNaN(parsed) || parsed <= 0) return fallback;
  return Math.min(parsed, 20);
}

function mapSerpApiToNormalized(review) {
  const name = review?.user?.name ?? "Google User";
  const text = review?.snippet ?? review?.extracted_snippet?.original ?? "";
  return {
    author_name: name,
    profile_photo_url: review?.user?.thumbnail ?? "",
    relative_time_description: review?.date ?? "",
    rating: Number.isFinite(review?.rating) ? review.rating : 5,
    text: text.trim() || "Great experience!",
    review_id: review?.review_id,
  };
}

async function fetchSerpApiPage(params) {
  const url = `${SERPAPI_BASE}?${params.toString()}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`SerpAPI failed with status ${response.status}`);
  }
  return response.json();
}

export async function getGooglePlaceReviews({ limit = 6 } = {}) {
  const safeLimit = toPositiveInt(limit, 6);
  const allReviews = [];
  const seenIds = new Set();
  let placeInfo = {};

  const queriesToTry = [null, "good", "experience", "work"];
  for (const query of queriesToTry) {
    if (allReviews.length >= safeLimit) break;
    try {
      const params = new URLSearchParams({
        engine: "google_maps_reviews",
        data_id: DATA_ID,
        hl: "en",
        api_key: API_KEY,
      });
      if (query) {
        params.set("query", query);
        params.set("num", "20");
      }
      const payload = await fetchSerpApiPage(params);
      const status = payload?.search_metadata?.status;
      if (status === "Error") {
        console.warn("[google-reviews] SerpAPI error:", payload?.error ?? "unknown");
        continue;
      }
      placeInfo = payload?.place_info ?? placeInfo;
      const reviews = payload?.reviews;
      const count = Array.isArray(reviews) ? reviews.length : 0;
      console.log(`[google-reviews] query="${query ?? "default"}": received ${count} reviews`);
      if (!Array.isArray(reviews)) continue;
      for (const r of reviews) {
        if (allReviews.length >= safeLimit) break;
        const mapped = mapSerpApiToNormalized(r);
        const id = mapped.review_id || `${mapped.author_name}-${mapped.text?.slice(0, 30)}`;
        if (seenIds.has(id)) continue;
        seenIds.add(id);
        allReviews.push(mapped);
      }
      if (query && count === 0) continue;
      if (!query && count > 0) {
        const token = payload?.serpapi_pagination?.next_page_token;
        if (token) {
          const page2Params = new URLSearchParams({
            engine: "google_maps_reviews",
            data_id: DATA_ID,
            hl: "en",
            api_key: API_KEY,
            next_page_token: token,
          });
          const page2 = await fetchSerpApiPage(page2Params);
          const page2Reviews = page2?.reviews ?? [];
          console.log(`[google-reviews] page 2 (next_token): received ${page2Reviews.length} reviews`);
          for (const r of page2Reviews) {
            if (allReviews.length >= safeLimit) break;
            const mapped = mapSerpApiToNormalized(r);
            const id = mapped.review_id || `${mapped.author_name}-${mapped.text?.slice(0, 30)}`;
            if (seenIds.has(id)) continue;
            seenIds.add(id);
            allReviews.push(mapped);
          }
        }
      }
    } catch (err) {
      console.warn("[google-reviews] query failed:", query, err instanceof Error ? err.message : err);
    }
  }

  const cleanReviews = allReviews.map(({ review_id, ...r }) => r);
  console.log(`[google-reviews] Total returning: ${cleanReviews.length} reviews`);

  return {
    source: "google-maps",
    place_name: placeInfo.title ?? "",
    rating: Number.isFinite(placeInfo.rating) ? placeInfo.rating : null,
    user_ratings_total: Number.isFinite(placeInfo.reviews) ? placeInfo.reviews : null,
    fetched_at: new Date().toISOString(),
    reviews: cleanReviews,
  };
}

import { getGooglePlaceReviews } from "../../server/googleReviewsService.mjs";

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=120",
    },
    body: JSON.stringify(body),
  };
}

export async function handler(event) {
  try {
    const limit = event?.queryStringParameters?.limit ?? 6;
    const data = await getGooglePlaceReviews({ limit });
    return response(200, data);
  } catch (error) {
    return response(200, {
      source: "google-maps",
      rating: null,
      user_ratings_total: null,
      fetched_at: new Date().toISOString(),
      reviews: [],
    });
  }
}

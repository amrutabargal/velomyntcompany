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
    return response(500, {
      source: "google-places",
      error: "Failed to fetch Google reviews",
      details: error instanceof Error ? error.message : "Unknown error",
      reviews: [],
    });
  }
}

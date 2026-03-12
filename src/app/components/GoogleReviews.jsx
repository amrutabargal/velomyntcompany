import { useState, useEffect } from "react";
import { Star } from "lucide-react";

/**
 * GoogleReviews - Displays Google Maps reviews in a testimonial card layout.
 * Fetches from backend API (avoids CORS). Configure API_URL if using a different endpoint.
 */
const API_URL = "/api/google-reviews";

function initialsFromName(name = "Google User") {
  const words = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "GU";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] ?? ""}${words[1][0] ?? ""}`.toUpperCase();
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`${API_URL}?limit=5`, {
          method: "GET",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        const list = Array.isArray(data?.reviews) ? data.reviews : [];

        setReviews(
          list
            .filter((r) => r?.text?.trim?.())
            .slice(0, 5)
            .map((r) => ({
              name: r?.author_name ?? "Google User",
              rating: Number.isFinite(r?.rating) ? r.rating : 5,
              text: r?.text ?? "",
              avatarUrl: r?.profile_photo_url ?? "",
              date: r?.relative_time_description ?? "",
              initials: initialsFromName(r?.author_name),
            })),
        );
      } catch (err) {
        if (err?.name !== "AbortError") {
          setError(err instanceof Error ? err.message : "Failed to load reviews");
          setReviews([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 animate-pulse"
                style={{ minHeight: 200 }}
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={j} className="w-5 h-5 bg-gray-200 rounded" />
                  ))}
                </div>
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-2 w-4/5" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="flex items-center mt-6 gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || reviews.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 text-lg">No reviews yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          Client Testimonials
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Hear what our clients say about working with us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => {
                  const filled = Math.floor(review.rating);
                  const hasHalf = review.rating - filled >= 0.5;
                  const filledClass = "w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400";
                  const halfClass = "w-4 h-4 sm:w-5 sm:h-5 fill-amber-400/60 text-amber-400";
                  const emptyClass = "w-4 h-4 sm:w-5 sm:h-5 text-amber-400/30";
                  const starClass =
                    i < filled ? filledClass : i === filled && hasHalf ? halfClass : emptyClass;
                  return <Star key={i} className={starClass} size={20} />;
                })}
              </div>

              <p className="text-gray-700 text-sm sm:text-base flex-1 line-clamp-4 mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                {review.avatarUrl ? (
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-gray-100"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold text-sm">
                    {review.initials}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="font-semibold text-gray-900 truncate">{review.name}</div>
                  {review.date && (
                    <div className="text-xs text-gray-500 truncate">{review.date}</div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

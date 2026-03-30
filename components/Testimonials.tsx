import TestimonialsClient, { Review } from './TestimonialsClient';

const COLORS = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500", "bg-red-500"];

export default async function Testimonials() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  let reviews: Review[] = [];
  let rating = 5.0;
  let totalReviews: number | undefined = undefined;

  if (apiKey && placeId) {
    try {
      // Fetch from Google Places API
      // Using next: { revalidate: 3600 } to cache the response for 1 hour
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=pl`,
        { next: { revalidate: 3600 } }
      );
      
      const data = await res.json();

      if (data.result) {
        if (data.result.rating) rating = data.result.rating;
        if (data.result.user_ratings_total) totalReviews = data.result.user_ratings_total;
        
        if (data.result.reviews && data.result.reviews.length > 0) {
          // Filter out reviews without text and sort by highest rating
          const validReviews = data.result.reviews
            .filter((r: any) => r.text && r.text.length > 0)
            .sort((a: any, b: any) => b.rating - a.rating);

          if (validReviews.length > 0) {
            reviews = validReviews.slice(0, 3).map((r: any, index: number) => ({
              quote: r.text,
              author: r.author_name,
              time: r.relative_time_description,
              initial: r.author_name.charAt(0).toUpperCase(),
              color: COLORS[index % COLORS.length],
              photoUrl: r.profile_photo_url,
              rating: r.rating
            }));
          }
        }
      }
    } catch (error) {
      console.error("Error fetching Google Reviews:", error);
      // Fallback to empty reviews on error
    }
  }

  return <TestimonialsClient reviews={reviews} rating={rating} totalReviews={totalReviews} />;
}

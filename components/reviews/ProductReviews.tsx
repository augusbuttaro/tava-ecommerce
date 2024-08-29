import SectionTitle from "../global/SectionTitle";
import ReviewCard from "./ReviewCard";
import { fetchProductReviews } from "@/utils/actions";

interface ProductReviewsProps {
  productId: string;
}

async function ProductReviews({ productId }: ProductReviewsProps) {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className="space-y-6">
      <SectionTitle text="Product Reviews" className="text-bg-foreground text-2xl" />
      <div className="grid grid-cols-2 gap-4">
        {reviews.map((review) => {
          const { comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = { comment, rating, image: authorImageUrl, name: authorName };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}

export default ProductReviews;

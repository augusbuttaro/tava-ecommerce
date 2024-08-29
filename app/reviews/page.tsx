import SectionTitle from '@/components/global/SectionTitle';
import ReviewCard from '@/components/reviews/ReviewCard';
import { Separator } from '@/components/ui/separator';
import { fetchProductReviewsByUser, deleteReviewAction } from '@/utils/actions';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';

async function Reviews() {
  const reviews = await fetchProductReviewsByUser();

  return (
    <section className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <SectionTitle
          text={reviews.length === 0 ? 'You have no reviews yet' : 'Your Reviews'}
          className="text-3xl font-semibold text-foreground"
        />
      </header>

      <Separator className="my-8" />

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <div className="text-center text-xl font-medium text-muted-foreground">
            You haven't written any reviews yet...
          </div>
        ) : (
          reviews.map((review) => {
            const { comment, rating, id } = review;
            const { name, image } = review.product;
            const reviewInfo = { comment, rating, name, image };

            return (
              <ReviewCard key={id} reviewInfo={reviewInfo}>
                <DeleteReview reviewId={id} />
              </ReviewCard>
            );
          })
        )}
      </div>
    </section>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });

  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType="delete" deleteClassName="w-8 h-8 p-1 rounded bg-destructive text-destructive-foreground" />
    </FormContainer>
  );
};

export default Reviews;

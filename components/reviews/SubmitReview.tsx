'use client';

import { useState } from 'react';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { Card } from '@/components/ui/card';
import RatingInput from '@/components/reviews/RatingInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { createReviewAction } from '@/utils/actions';
import { useUser } from '@clerk/nextjs';

interface SubmitReviewProps {
  productId: string;
}

function SubmitReview({ productId }: SubmitReviewProps) {
  const [isReviewFormVisible, setReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div className="my-6">
      <Button className="capitalize bg-primary text-primary-foreground" size="lg" onClick={() => setReviewFormVisible(!isReviewFormVisible)}>
        Leave Review
      </Button>
      {isReviewFormVisible && (
        <Card className="bg-card text-card-foreground p-8 mt-4">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input type="hidden" name="authorName" value={user?.firstName || 'user'} />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl || ''} />
            <RatingInput name="rating" />
            <TextAreaInput name="comment" labelText="Feedback" defaultValue="Outstanding product!" />
            <SubmitButton className="mt-4 bg-primary text-primary-foreground" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;

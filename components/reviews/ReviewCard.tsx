'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Rating from './Rating';
import Comment from './Comment';
import Image from 'next/image';

interface ReviewInfo {
  comment: string;
  rating: number;
  name: string;
  image: string;
}

interface ReviewCardProps {
  reviewInfo: ReviewInfo;
  children?: React.ReactNode;
}

function ReviewCard({ reviewInfo, children }: ReviewCardProps) {
  return (
    <Card className="bg-card text-card-foreground relative p-4">
      <CardHeader className="flex flex-row justify-between items-center ">
        <div className='flex items-center gap-x-4'>
            <Image
            src={reviewInfo.image}
            alt={reviewInfo.name}
            height={48}
            width={48}
            className="h-12 w-12 rounded-full object-cover"
            />
          <h2 className="text-xl leading-none font-semibold">{reviewInfo.name}</h2>
        </div>
        <Rating rating={reviewInfo.rating} />
      </CardHeader>
      <CardContent>
        <Comment comment={reviewInfo.comment} />
      </CardContent>
    {children && <div className="absolute bottom-3 right-3">{children}</div>}

    </Card>
  );
}

export default ReviewCard;

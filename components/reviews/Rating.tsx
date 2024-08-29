'use client';

import { GoStar, GoStarFill } from 'react-icons/go';

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  return (
    <div className="flex gap-1 mt-0">
      {stars.map((isFilled, i) => {
        const className = `w-4 h-4 ${isFilled ? 'text-primary' : 'text-muted'}`;
        return isFilled ? <GoStarFill className={className} key={i} /> : <GoStar className={className} key={i} />;
      })}
    </div>
  );
}

export default Rating;

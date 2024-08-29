'use client';

import { useState } from "react";
import { Button } from "../ui/button";

interface CommentProps {
  comment: string;
}

function Comment({ comment }: CommentProps) {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!isExpanded);

  const longComment = comment.length > 130;
  const displayComment = longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment;

  return (
    <div className="text-sm text-muted-foreground">
      <p>{displayComment}</p>
      {longComment && (
        <Button
          variant="link"
          className="pl-0 text-accent-foreground"
          onClick={toggleExpanded}
        >
          {isExpanded ? 'Show less' : 'Show More'}
        </Button>
      )}
    </div>
  );
}

export default Comment;

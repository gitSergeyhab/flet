import { useEffect, useState } from "react";
import { IComment } from "../types/data";
import { useFetchComments } from "./useFetchComments";

const LIMIT = 3;

export const useLoadComments = (postId?: string) => {
  const [allComments, setAllComments] = useState<IComment[]>([]);

  console.log({ allComments, postId });

  const [offset, setOffset] = useState(0);

  const { comments, commentsStatus } = useFetchComments({
    limit: LIMIT,
    offset,
    postId,
  });

  useEffect(() => {
    if (comments) {
      setAllComments((prev) => [...prev.slice(0, offset), ...comments]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  const loadMoreComments = () => {
    setOffset((prev) => prev + LIMIT);
  };

  return {
    allComments,
    commentsStatus,
    loadMoreComments,
  };
};

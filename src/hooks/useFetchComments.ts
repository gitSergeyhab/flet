import { IComment } from "../types/data";
import { useFetchData } from "./useFetchData";

export interface FetchCommentsParams {
  limit: number;
  offset: number;
  postId?: string;
}
export const useFetchComments = ({
  limit,
  offset,
  postId,
}: FetchCommentsParams) => {
  const { data, status } = useFetchData<IComment[]>(
    `/comments?postId=${postId}&_limit=${limit}&_start=${offset}`
  );
  return { comments: data, commentsStatus: status };
};

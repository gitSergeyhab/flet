import { getFullPostsData } from "../lib/utils";
import { IComment, IPost, IUser } from "../types/data";
import { useFetchData } from "./useFetchData";

export const useFetchFullPostData = () => {
  const { data: comments, status: commentsStatus } =
    useFetchData<IComment[]>(`/comments`);

  const { data: users, status: usersStatus } = useFetchData<IUser[]>(`/users`);

  const { data: posts, status: postsStatus } = useFetchData<IPost[]>(`/posts`);

  if (
    commentsStatus === "loading" ||
    usersStatus === "loading" ||
    postsStatus === "loading"
  ) {
    return { posts: null, status: "loading" };
  }

  if (
    commentsStatus === "error" ||
    usersStatus === "error" ||
    postsStatus === "error"
  ) {
    return { posts: null, status: "error" };
  }

  const fullPostsData = getFullPostsData(posts, comments, users);

  return { posts: fullPostsData, status: "success" };
};

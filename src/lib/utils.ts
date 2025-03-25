import { FullPostData, IComment, IPost, IUser } from "../types/data";

export const getFullPostData = (
  post: IPost,
  comments: IComment[],
  users: IUser[]
): FullPostData => {
  const postComments = comments.filter((comment) => comment.postId === post.id);
  const userName = users.find((user) => user.id === post.userId)?.name;

  return {
    ...post,
    userName,
    comments: postComments,
  };
};

export const getFullPostsData = (
  posts: IPost[] = [],
  comments: IComment[] = [],
  users: IUser[] = []
): FullPostData[] =>
  posts.map((post) => getFullPostData(post, comments, users));

export const capitalize = (str?: string) =>
  str && str.charAt(0).toUpperCase() + str.slice(1);

import { FC, PropsWithChildren } from "react";
import { IPost } from "../../types/data";
import { capitalize } from "../../lib/utils";
import "./styles.css";

export interface PostArticleProps extends PropsWithChildren {
  post: IPost;
  userName?: string;
}
export const PostArticle: FC<PostArticleProps> = ({
  post,
  children,
  userName,
}) => {
  return (
    <article className="post">
      <h3 className="post__title">
        {capitalize(post.title)} ({userName ? `автор:  ${userName}` : null})
      </h3>
      <p className="content-text">{capitalize(post.body)}</p>
      {children}
    </article>
  );
};

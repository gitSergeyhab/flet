import { FC } from "react";
import { IComment } from "../../types/data";
import { capitalize } from "../../lib/utils";
import "./styles.css";

export interface PostCommentProps {
  comment: IComment;
}

export const PostComment: FC<PostCommentProps> = ({ comment }) => {
  return (
    <div className="comment">
      <h4>
        {capitalize(comment.name)} (автор: {comment.email.split("@")[0]})
      </h4>
      <p className="content-text">{capitalize(comment.body)}</p>
    </div>
  );
};

import { FC } from "react";
import { ContentList } from "../../shared/ContentList/ContentList";
import { PostComment } from "../../shared/PostComment/PostComment";
import { Button } from "../../shared/Button/Button";
import { useLoadComments } from "../../hooks/useLoadComments";

const MAX_COMMENTS = 5; // максимальное количество комментариев - в респонсе этих данных нет - проверено опытным путем)

export const CommentsSection: FC<{ postId: string }> = ({ postId }) => {
  const { allComments, commentsStatus, loadMoreComments } =
    useLoadComments(postId);

  if (allComments.length === 0) {
    return null;
  }

  return (
    <section>
      <h2>Комментарии:</h2>
      <ContentList>
        {allComments?.map((comment) => (
          <li key={comment.id}>
            <PostComment comment={comment} />
          </li>
        ))}
      </ContentList>
      <div className="load-button-wrapper">
        {allComments.length < MAX_COMMENTS && (
          <Button onClick={loadMoreComments}>
            {commentsStatus === "loading" ? "Загрузка..." : "Загрузить еще"}
          </Button>
        )}
      </div>
    </section>
  );
};

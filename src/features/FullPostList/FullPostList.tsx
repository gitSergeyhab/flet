import { FC, useState } from "react";
import { FullPostData } from "../../types/data";
import { ContentList } from "../../shared/ContentList/ContentList";
import { PostArticle } from "../../shared/PostArticle/PostArticle";
import { PostComment } from "../../shared/PostComment/PostComment";
import { Button } from "../../shared/Button/Button";
import "./styles.css";

export interface ContentListProps {
  posts: FullPostData[];
}

export const FullPostList: FC<ContentListProps> = ({ posts }) => {
  const [showedPosts, setShowedPosts] = useState(5);

  const handleButtonClick = () => {
    setShowedPosts((prev) => prev + 5);
  };
  return (
    <>
      <ContentList>
        {posts?.slice(0, showedPosts).map((post) => (
          <li key={post.id}>
            <PostArticle post={post} userName={post.userName}>
              <p>
                <b>Комментарии:</b>
              </p>
              <ContentList>
                {post.comments.map((comment) => (
                  <li key={comment.id}>
                    <PostComment comment={comment} />
                  </li>
                ))}
              </ContentList>
            </PostArticle>
          </li>
        ))}
      </ContentList>

      {showedPosts < posts.length && (
        <div className="load-button-wrapper">
          <Button onClick={handleButtonClick}>Показать ещё</Button>
        </div>
      )}
    </>
  );
};

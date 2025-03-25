import { useParams } from "react-router";
import { useFetchData } from "../../hooks/useFetchData";
import { IPost, IUser } from "../../types/data";
import { capitalize } from "../../lib/utils";
import { LoaderErrorElement } from "../../shared/LoaderErrorElement/LoaderErrorElement";
import { CommentsSection } from "../../features/CommentsSection/CommentsSection";

import "./styles.css";

function PostPage() {
  const { postId, userId } = useParams();

  const { data: user, status: userStatus } = useFetchData<IUser>(
    `/users/${userId}`
  );
  const { data: posts, status: postsStatus } = useFetchData<IPost>(
    `/posts/${postId}`
  );

  if (userStatus === "loading" || postsStatus === "loading") {
    return <LoaderErrorElement>Грузим пост</LoaderErrorElement>;
  }

  return (
    <>
      <h1>{capitalize(posts?.title)}</h1>
      <p className="">
        <b>Автор: {user?.name}</b>
      </p>
      <div>{capitalize(posts?.body)}</div>
      <CommentsSection postId={postId!} />
    </>
  );
}

export default PostPage;

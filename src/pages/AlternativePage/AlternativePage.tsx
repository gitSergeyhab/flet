import { FullPostList } from "../../features/FullPostList/FullPostList";
import { useFetchFullPostData } from "../../hooks/useFetchFullPostData";
import { LoaderErrorElement } from "../../shared/LoaderErrorElement/LoaderErrorElement";

function AlternativePage() {
  const { posts, status } = useFetchFullPostData();

  if (status === "loading") {
    return <LoaderErrorElement>Грузим посты</LoaderErrorElement>;
  }

  if (status === "error" || !posts) {
    return (
      <LoaderErrorElement isError>
        Не удалось загрузить посты
      </LoaderErrorElement>
    );
  }

  return (
    <>
      <h1>Вариант 2 (всё на одной странице)</h1>
      <FullPostList posts={posts} />
    </>
  );
}

export default AlternativePage;

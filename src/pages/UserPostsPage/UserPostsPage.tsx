import { useParams } from "react-router";
import { useFetchData } from "../../hooks/useFetchData";
import { IPost, IUser } from "../../types/data";
import { LoaderErrorElement } from "../../shared/LoaderErrorElement/LoaderErrorElement";
import { AppLink } from "../../shared/AppLink/AppLink";
import { ContentList } from "../../shared/ContentList/ContentList";
import { capitalize } from "../../lib/utils";

function UserPostsPage() {
  const { userId } = useParams();

  const { data: user, status: userStatus } = useFetchData<IUser>(
    `/users/${userId}`
  );

  const { data: posts, status: postsStatus } = useFetchData<IPost[]>(
    `/posts?userId=${userId}`
  );

  if (userStatus === "loading" || postsStatus === "loading") {
    return <LoaderErrorElement>Грузим юзеров</LoaderErrorElement>;
  }

  if (userStatus === "error" || postsStatus === "error") {
    return <LoaderErrorElement>Не удалось загрузить юзеров</LoaderErrorElement>;
  }

  return (
    <>
      <h1>Посты Пользователя: {user?.name}</h1>
      <div>
        <ContentList>
          {posts?.map(({ id, title }) => (
            <li key={id}>
              <AppLink to={`/${userId}/posts/${id}`}>
                {capitalize(title)}
              </AppLink>
            </li>
          ))}
        </ContentList>
      </div>
    </>
  );
}

export default UserPostsPage;

import { useFetchData } from "../../hooks/useFetchData";
import { IUser } from "../../types/data";
import { LoaderErrorElement } from "../../shared/LoaderErrorElement/LoaderErrorElement";
import { UserList } from "../../features/UserList/UserList";

function FirstVersionPage() {
  const { data: users, status } = useFetchData<IUser[]>("/users");

  if (status === "loading") {
    return <LoaderErrorElement>Грузим юзеров</LoaderErrorElement>;
  }

  if (status === "error" || !users) {
    return (
      <LoaderErrorElement isError>
        Не удалось загрузить юзеров
      </LoaderErrorElement>
    );
  }

  return (
    <>
      <h1>Пользователи</h1>
      <UserList users={users} />
    </>
  );
}

export default FirstVersionPage;

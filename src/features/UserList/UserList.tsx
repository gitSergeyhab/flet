import { IUser } from "../../types/data";
import { UserCard } from "../../shared/UserCard/UserCard";
import { FC } from "react";
import "./styles.css";

export interface UserListProps {
  users: IUser[];
}
export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-card-container">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

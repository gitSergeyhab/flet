import { FC } from "react";
import { IUser } from "../../types/data";
import { AppLink } from "../AppLink/AppLink";
import "./styles.css";

export interface UserCardProps {
  user: IUser;
}

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <AppLink to={`/${user.id}/posts`}>
        <h2 className="user-card__header">{user.name}</h2>
      </AppLink>

      <div className="user-card__body">
        <p> {user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    </div>
  );
};

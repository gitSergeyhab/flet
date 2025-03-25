import { FC, PropsWithChildren } from "react";
import { Link } from "react-router";
import "./styles.css";

export interface AppLinkProps extends PropsWithChildren {
  to: string;
}
export const AppLink: FC<AppLinkProps> = ({ to, children }) => {
  return (
    <Link className="link" to={to}>
      {children}
    </Link>
  );
};

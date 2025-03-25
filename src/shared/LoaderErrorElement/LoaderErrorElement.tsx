import { FC, PropsWithChildren } from "react";
import "./styles.css";

export interface LoaderErrorElementProps extends PropsWithChildren {
  isError?: boolean;
}
export const LoaderErrorElement: FC<LoaderErrorElementProps> = ({
  children,
  isError,
}) => {
  return <h2 className={isError ? "loader error" : "loader"}>{children}</h2>;
};

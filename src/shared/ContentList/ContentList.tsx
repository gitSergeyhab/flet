import { FC, PropsWithChildren } from "react";
import "./styles.css";

export const ContentList: FC<PropsWithChildren> = ({ children }) => {
  return <ul className="content-list">{children}</ul>;
};

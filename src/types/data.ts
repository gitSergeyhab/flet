export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface FullPostData extends IPost {
  userName?: string;
  comments: IComment[];
}

export type RequestStatus = "loading" | "success" | "error" | "idle";

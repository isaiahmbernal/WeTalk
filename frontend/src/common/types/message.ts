import { UserT } from "./user";

export interface MessageT {
  id: string;
  user: UserT;
  content: string;
  time: number;
  replyTo?: {
    id: string;
    content?: string;
  };
}
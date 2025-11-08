import { MessageT } from "./message";

export interface FeedT {
  title: string;
  messages: MessageT[];
}
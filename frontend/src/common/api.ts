import users from "../data/users.json";
import feeds from "../data/feeds.json";
import { FeedT } from "./types/feed";

// const getUsers = () => {
//   return users;
// };

// const getFeeds = () => {
//   return feeds;
// };

export const getFeed = () => {
  return feeds[1762559650];
};


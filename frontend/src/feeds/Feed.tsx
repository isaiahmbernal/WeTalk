import React from "react";
import { FeedT } from "@/common/types/feed";
import Message from "./Message";

const Feed: React.FC<FeedT> = ({ title, messages }) => {
  return (
    <div className="w-full w-min-none flex-col align-center gap-sm" style={{ background: "" }}>
      <h4 className="w-min-none" style={{ background: "" }}>
        {title}
      </h4>
      {messages?.map((msg, idx) => {
        return <Message key={msg.id} {...msg} />;
      })}
    </div>
  );
};

export default Feed;

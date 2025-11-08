import React from "react";
import type { MessageT } from "@/types/message";

const Message: React.FC<MessageT> = ({ id, user, content, time, replyTo }) => {
  
  const handleScroll = (replyTo) => {
    console.log("Clicked Reply");
    const msg = document.getElementById(`msg-${replyTo}`);
    if (msg) msg.scrollIntoView();
  }

  const convertDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleString();
  };
  
  return (
    <div
      className="w-full border-box flex-col align-end px-sm py-xs gap-xs"
      style={{ border: "solid white 0.1px"}}
      id={`msg-${id}`}
    >
      <div className="w-min-full flex-row justify-between align-center">
        <span className="font-bold">{user.username ?? "MSG_USER"}</span>
        <span className="font-xs"># {id ?? "MSG_ID"}</span>
      </div>
      <p className="w-min-full font-light font-sm" style={{background: ""}}>{content ?? "MSG_CONTENT"}</p>
      {replyTo?.content && (
        <p
          className="w-max-full w-full border-box font-light font-xs ellipsis px-xs py-xxs"
          style={{
            background: "rgb(255, 255, 255, 0.1)",
          }}>{replyTo.content ?? "MSG_CONTENT"}</p>
      )}
      {replyTo ? (
        <div className="w-min-full flex-row justify-between align-center">
          <span
            onClick={() => { handleScroll(replyTo); }}
            className="pointer underline font-xs"
          >
            # {replyTo.id}
          </span>
          <span className="font-xs">{convertDate(time) ?? "MSG_TIME"}</span>
        </div>
      ) : (
        <span className="font-xs">{convertDate(time) ?? "MSG_TIME"}</span>
      )}
    </div>
  );
};

export default Message;

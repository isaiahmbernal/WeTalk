import React, { useEffect } from "react";
import { useState } from "react";

import type { FeedT } from "@/types/feed";
import Feed from "./feeds/Feed";

import "./App.css";
import { getFeed } from "./common/api";

function App() {
  
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const feedsResponse = getFeed();
    for (const msgOut of feedsResponse.messages) {
      if (msgOut.replyTo) {
        for (const msgIn of feedsResponse.messages) {
          if (msgOut.replyTo.id === msgIn.id) {

            const newData = {
              id: msgIn.id,
              content: msgIn.content
            }

            msgOut.replyTo = newData;
            // } as any;
            // (msgOut.replyTo as any).content = msgIn.content;
          }
        }
      }
    }
    setFeeds([feedsResponse]);
  }, []);

  return (
    <div className="bg-black border-box w-min-screen h-min-screen flex-col align-center">
      <nav className="bg-blue border-box w-min-screen flex-row px-sm py-xs">
        <h2>💬 WeTalk</h2>
      </nav>
      <section className="w-full w-min-none border-box px-sm py-sm" style={{ background: "", maxWidth: "600px" }}>
        {feeds?.map((feed, idx) => {
          return <Feed key={idx} {...feed}/>
        })}
      </section>
    </div>
  );
}

export default App;

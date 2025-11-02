import { useReducer, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5);

  const [iss, goobleGoo] = useState({
    message: "idle",
    latitude: 100,
    longitude: 200,
  });

  const [messages, setMessages] = useState([
    {
      type: "received",
      user: "Yao",
      content: "hey cutie",
    },
    {
      type: "received",
      user: "Yao",
      content: "what's up",
    },
    {
      type: "sent",
      user: "Isaiah",
      content: "nuthin much",
    },
  ]);

  console.log(messages);

  const issData = async () => {
    console.log("Logging into the server");

    const response = await fetch("http://api.open-notify.org/iss-now.json");
    const data = await response.json();

    // const newData = {
    //   ...iss,
    //   latitude: data.iss_position.latitude,
    //   longitude: data.iss_position.longitude
    // }

    // const newData = {
    //   message: data.message,
    //   latitude: data.iss_position.latitude,
    //   longitude: data.iss_position.longitude
    // };

    goobleGoo(newData);

    console.log(data);
  };

  return (
    <>
      <div>
        <span className="emoji">🐱</span>
        <span className="emoji">🐵</span>
      </div>
      <h1>Yao + Isaiah</h1>
      <div
        style={{
          background: "",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}
      >
        asdf
        {messages.map((message) => {
          if (message.type === "received") {
            return (
              <div className="">
                <div className="message message-rec">
                  <p>{message.content}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div className="message-row-sent">
                <div className="message message-sent">
                  <p>{message.content}</p>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div>
        <h2>ISS Location</h2>
        <p>Status: {iss.message}</p>
        <p>Latitude: {iss.latitude}</p>
        <p>Longitude: {iss.longitude}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={issData}>Login</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [message, setMessage] = useState();
  // create socket using io
  const socket = io("http://localhost:3000");

  // event manage means ye show code in brower console and display
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  io();
  return (
    <div>
      App
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default App;

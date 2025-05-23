import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const App = () => {
  // create socket using io
  const socket = io("http://localhost:3000");

  // event manage means ye show code in brower console and display
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
    //first event received from server
    socket.on("welcome", (message) => {
      console.log(message);
      //first event send by client to server
      socket.emit("message", "mohit to you");
    });
  }, []);

  return <div>App</div>;
};

export default App;

import React, { useMemo } from "react";
import { io } from "socket.io-client";

const App = () => {
  // create socket using io
  const socket = io("http://localhost:3000");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console;
  // };
  io();
  return (
    <div>
      App
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e}
        />
        <button type="submit"> submit</button>
      </form> */}
    </div>
  );
};

export default App;

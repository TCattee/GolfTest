import './App.css';

import React, { useState, useEffect } from "react";

import socketIOClient from "socket.io-client"
const ENDPOINT = "https://mst-full-stack-dev-test.herokuapp.com/"


function App() {
  const [response, setResponse] = useState([]);
  const layout = [];
  useEffect(() => {
    console.log("hello1!")
    const socket = socketIOClient(ENDPOINT);
    socket.on("data-update", data => {
      setResponse(data);
    });
  }, []);
  // loop through the response object, convert into entries and push to layout object
  for(let entry of Object.entries(response)){
    // [0] is the title, [1] is the value.
    layout.push(<div className="Cell" key={entry[0]}>
      <p className="Entry" key={entry[0]}>{entry[0]}</p><p className="Entry">{entry[1]}</p>
      </div>
    )
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/*Place entries into DOM*/}
        <div className="EntryHolder">{layout}</div>
      </header>
    </div>
  );
}

export default App;

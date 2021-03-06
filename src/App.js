import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import React, { useState } from "react";
import './App.css';



  let className = "b-border";
let className2 = "";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
       <div className="heading">
        <h3
          onClick={() => {
            setToggle(!toggle);
            className = "b-border";
            className2 = "";
          }}
          className={className}
        >
          {" "}
          Timer
        </h3>
        <h3
          onClick={() => {
            setToggle(!toggle);
            className = "";
            className2 = "b-border";
          }}
          className={className2}
        >
          Stopwatch
        </h3>
      </div>
      <div className="showcomponent">{toggle ? <Timer /> : <Stopwatch />}</div>
    </div>
  );
}

export default App;

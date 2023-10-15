import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "#181818";
      showalert("Darkmode Active", "success");
    } else {
      setmode("light");
      document.body.style.background = "white";
      showalert("Lightmode Active", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route path="/about">
          <About mode={mode} togglemode={togglemode} />
          </Route>
          <Route path="/">
              <Textform
              heading="Enter the text to analyze"
              mode={mode}
              togglemode={togglemode}
              showalert={showalert}
             />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;

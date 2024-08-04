import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import {
  // BrowserRouter as Router,
  // Routes,
  // Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const DarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Enabled DarkMode!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Disabled DarkMode!", "success");
    }
  };

  return (
    // <Router>
    <>
      <NavBar title="Home" terms="Terms" policy="About" mode={mode} DarkMode={DarkMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode} DarkMode={DarkMode}/>} /> */}
          {/* <Route exact path="/" element={<TextArea showAlert={showAlert} label="TextArea:- Enter Your Text" mode={mode} DarkMode={DarkMode} />} /> */}
          <TextArea showAlert={showAlert} label="TextArea:- Enter Your Text" mode={mode} DarkMode={DarkMode} />
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";

let name = "<b>Harry3</b>";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode is enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="TextPerf" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        ></TextForm>
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;

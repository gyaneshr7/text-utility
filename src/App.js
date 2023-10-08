import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { Alert } from "./components/Alert";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    }, 1000);
  };

  const toggleMode = (theme) => {
    if (mode === "light") {
      setMode(theme);

      if (theme === "dark") document.body.style.backgroundColor = "#042743";
      else document.body.style.backgroundColor = theme;

      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

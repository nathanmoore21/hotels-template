// Import React library
import React from "react";
// Import ReactDOM (Document Object Model) library
import ReactDOM from "react-dom";
// Import main AppRouter component - this is the entry point for the app
import AppRouter from "./AppRouter";
// Import css stylesheet
import "./styles.css";

ReactDOM.render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  <React.StrictMode>
    {/* Render the AppRouter component, which contains the entire app */}
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
